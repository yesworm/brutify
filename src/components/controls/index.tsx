import SpotifyPlayer from 'react-spotify-web-playback';
import { ITrack, IState} from '../../types';
import { useState } from 'react';

interface IProps {
    token: string | null;
    tracks: Array<string>;
    setTrack: React.Dispatch<React.SetStateAction<ITrack | null>>

}


const Controls:React.FC<IProps> = ( {token, tracks, setTrack} ) => {
    // return early if no token is available - adding typeguard to confirm that token is a string 
    if (!token) return null;

    const [play, setPlay] = useState(true)

    return (
        <>
        <SpotifyPlayer
            token={token}
            play={play}
            uris={tracks}
            hideCoverArt={true}
            hideAttribution={true}
            inlineVolume={false}
            layout={'compact'}
            styles={{
                trackArtistColor: '#fff',
                trackNameColor: '#fff',
                sliderColor: '#fff'
            }}
            callback={ (state: IState) => {
                console.log("Player state:", state);
                setTrack(state.track)
                if(!state.isPlaying){
                    setPlay(true)
                }
            }}
        />
        </>
    )
}

export default Controls 