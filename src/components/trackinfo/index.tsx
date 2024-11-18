import { ITrack } from "../../types"
import { H1, TickerContent, TickerWrapper } from "./styles";

interface IProps {
    track: ITrack | null;
}

const Trackinfo:React.FC<IProps> = ({ track }) => {
    
    if(!track || track.id === '') return null
    
    return (
        <>
            <H1>{track.name}</H1>
            <TickerWrapper>
                <TickerContent>
                    {track.name}
                </TickerContent>
            </TickerWrapper>
        </>
    )
}

export default Trackinfo