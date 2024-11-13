import Select from 'react-select'

interface IProps {
    playlists: Array<string>
}

const Sidebar:React.FC<IProps> = ({ playlists }) => {

    return(
        <>
            <Select
                options={playlists}
            />
        </>
    )
}

export default Sidebar;