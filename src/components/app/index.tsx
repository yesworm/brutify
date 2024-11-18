import Login from '../login'
import Nav from '../nav'
import Sidebar from '../sidebar'
import Trackinfo from '../trackinfo'
import { useEffect, useState, useCallback } from 'react'
import { getAccessToken } from '../../auth'
import axios from 'axios'
import { GlobalStyle } from '../../styles'
import { Container, TrackViewer, Side } from './styles'
import { ITrack } from '../../types'

function App() {

    const GlobalStyleProxy:any = GlobalStyle;

    const [token, setToken] = useState<string | null>(null)
    const [profile, setProfile] = useState<string | null>(null)
    const [playlists, setPlaylists] = useState<Array<{name: string, id: string}>>([]);
    const [tracks, setTracks] = useState<Array<string>>([]);
    const [track, setTrack] = useState<ITrack | null>(null);
    const [selectedPlaylistId, setSelectedPlaylistId] = useState<string | null>(null);
    
    useEffect(() => {
        let isRequesting = false;  // add flag
        
        const getToken = async () => {
            if (isRequesting) return;  // skip if already requesting
            try {
                isRequesting = true;  // set flag
                const clientId = import.meta.env.VITE_CLIENT_ID;
                const params = new URLSearchParams(window.location.search);
                const code = params.get("code");
                
                if (code) {
                    const accessToken = await getAccessToken(clientId, code);
                    setToken(accessToken);
                }
            } catch (error) {
                console.error('Error in getToken:', error);
            } finally {
                isRequesting = false;  // reset flag
            }
        };

        getToken();
    }, []); 

    console.log(track)

useEffect(() => {
    const getUserInfo = async () => {
        if (!token) return;

        try {
            const { data } = await axios.get("https://api.spotify.com/v1/me", {
                headers : {
                    Authorization: `Bearer ${token}`,
                    "Content-type": "application/json",
                },
            });
            setProfile(data.images[0].url);
        } catch (error) {
            console.error("Error fetching profile:", error);
        }
    };

    getUserInfo();
}, [token]); //only run when token changes

useEffect(() => {
    const getPlaylists = async () => {
        if (!token) return;

        try {
            const { data } = await axios.get("https://api.spotify.com/v1/me/playlists", {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-type": "application/json",
                },
            });
            console.log("Playlists received", data);
            
            // mapping  the playlists to only keep what we need
            const playlists = data.items.map(({name, id}) => ({name, id}));
            setPlaylists(playlists);
            
        } catch (error) {
            console.error("Error fetching playlists:", error);
            if (axios.isAxiosError(error)) {
                console.error('Response:', error.response?.data);
            }
        }
    };

    getPlaylists();
}, [token]);

useEffect(() => {
    const getTracks = async (playlistId: string) => {
        if (!token) return;

        try {
            console.log("Fetching tracks for playlist:", playlistId);
            const { data } = await axios.get(
                `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            
            console.log("Raw playlist response:", data);
            
            if (!data.items || !Array.isArray(data.items)) {
                console.error("No items array in response:", data);
                return;
            }

            const uris = data.items
                .filter((item: any) => item && item.track)
                .map((item: any) => {
                    console.log("Processing track:", {
                        name: item.track.name,
                        uri: item.track.uri,
                        artists: item.track.artists
                    });
                    return item.track.uri;
                });
            
            console.log("Final URIs:", uris);
            
            if (uris.length > 0) {
                setTracks(uris);
            } else {
                console.warn("No valid track URIs found in playlist");
            }
        } catch (error) {
            console.error("Error fetching tracks:", error);
            if (axios.isAxiosError(error)) {
                console.error('Response:', error.response?.data);
            }
        }
    };

    if (selectedPlaylistId) {
        getTracks(selectedPlaylistId);
    }
}, [token, selectedPlaylistId]);

    if (!token) {
        return (
            <>
                <GlobalStyleProxy />
                <Login />
            </>
        )
    } 
    
    return (
        <>
            <GlobalStyleProxy />
            <Nav 
                profile={profile}
            />
            <Container>
                <TrackViewer>
                    <Trackinfo 
                        track={track}
                    />
                </TrackViewer>
            <Side>
                <Sidebar 
                    track={track}
                    token={token}
                    tracks={tracks}
                    playlists={playlists}
                    setSelectedPlaylistId={setSelectedPlaylistId}
                    setTrack={setTrack}
                />
            </Side>
            </Container>
        </>
    )
}

export default App