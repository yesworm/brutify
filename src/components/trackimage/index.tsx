import { ITrack } from '../../types'
import {Box, Image} from './styles'

interface IProps {
    track: ITrack | null
}


const TrackImage:React.FC<IProps> = ({ track }) => {

    if(!track || !track.image) return <Box/>

    return (
        <>
        <Box>
            <Image image={track.image}/>
        </Box>
        </>
    )
}

export default TrackImage 