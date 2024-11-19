import { ITrack } from "../../types"
import { H1, TickerContent, TickerWrapper, Container, Text, Circle, TrackDetails} from "./styles";

interface IProps {
    track: ITrack | null;
}

const Trackinfo:React.FC<IProps> = ({ track }) => {
    
    if(!track || track.id === '') return null

    const trackNameRepeated = track.artists[0].name.length > 10 ? track.artists[0].name : (track.artists[0].name + ' ').repeat(4)
    const trackArtist = track.artists[0].name
    
    return (
        <>
        <TrackDetails>
        <Container>
            <Circle>
                {trackNameRepeated.split('').map((char:string, index:number) => (
                    <Text
                    key={index}
                    style={{
                      transform: `rotate(${(360 / trackNameRepeated.length) * index}deg) translateX(-50%)`,
                    }}
                    >
                    {char}
                    </Text>
                ))}
            </Circle>
        </Container>
            <H1>{track.name}</H1>
        </TrackDetails>
            <TickerWrapper>
                <TickerContent>
                    {trackArtist}       {trackArtist}       {trackArtist}       {trackArtist}       {trackArtist}       {trackArtist}       {trackArtist}       {trackArtist}
                </TickerContent>
            </TickerWrapper>
        </>
    )
}

export default Trackinfo