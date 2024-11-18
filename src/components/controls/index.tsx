import SpotifyPlayer from 'react-spotify-web-playback';
import { ITrack, IState} from '../../types';

interface IProps {
    token: string | null;
    tracks: Array<string>;
    setTrack: React.Dispatch<React.SetStateAction<ITrack | null>>

}


const Controls:React.FC<IProps> = ( {token, tracks, setTrack} ) => {
    // return early if no token is available - adding typeguard to confirm that token is a string 
    if (!token) return null;

    console.log("Tracks received in Controls:", tracks);

    return (
        <>
        <SpotifyPlayer
            token={token}
            play={play}
            uris={tracks}
            hideCoverArt={true}
            hideAttribution={true}
            inlineVolume={false}
            styles={{
                trackArtistColor: '#fff',
                trackNameColor: '#fff',
                sliderColor: '#fff'
            }}
            callback={ (state: IState) => {
                console.log("Player state:", state);
                setTrack(state.track)
            }}
        />
        </>
    )
}

export default Controls 