import Login from '../login'
import Nav from '../nav'
import Trackinfo from '../trackinfo'
import { useEffect, useState } from 'react'
import { getAccessToken } from '../../auth'
import axios from 'axios'
import { GlobalStyle } from '../../styles'
import { Container, TrackViewer, Side } from './styles'

function App() {

    const GlobalStyleProxy:any = GlobalStyle;

    const [token, setToken] = useState<string | null>(null)
    const [profile, setProfile] = useState<string | null>(null)
    
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
                    <Trackinfo />
                </TrackViewer>
            <Side />
            </Container>
        </>
    )
}

export default App