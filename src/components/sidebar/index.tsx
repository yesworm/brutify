import Select from 'react-select';
import Controls from '../controls';
import { ITrack } from '../../types';
import React from 'react';
import TrackImage from '../trackimage';

interface IProps {
    playlists: Array<{name: string, id: string}>;
    setSelectedPlaylistId: (id: string) => void;
    getTracks: (id: string) => Promise<void>;
    token: string | null;
    tracks: Array<string>;
    track: ITrack | null;
    setTrack: React.Dispatch<React.SetStateAction<ITrack | null>>;
}

const Sidebar:React.FC<IProps> = ({ playlists, getTracks, token, tracks, track, setTrack, setSelectedPlaylistId }) => {


    const styles = {
        menuList: (styles) => {
            return {
                ...styles,
                maxHeight: "25vh"
            };
        },
        container: (styles) => ({
            ...styles,
            width: '90%',
        }),
        option: (styles:any, { isFocused }: { isFocused: any}) => {
            return {
                ...styles,
                backgroundColor: isFocused ? "#999999" : null,
                color: "#333333",
            }
        }
    }

    const handleChange = (selectedOption: any) => {
        console.log("Selected playlist:", selectedOption);
        if (selectedOption && selectedOption.id) {
            setSelectedPlaylistId(selectedOption.id);
        }
    };

    return(
        <>
            <Controls
                token={token}
                tracks={tracks}
                setTrack={setTrack}
            />
            <Select
                options={playlists}
                menuPlacement='auto'
                getOptionLabel={(e: {name: string, id: string}) => e.name}
                onChange={handleChange}
                styles={styles}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 2,
                    colours: {
                        ...theme.colors,
                        primary: 'black',
                        primary25: 'grey',
                        primary50: 'grey',
                        primary75: 'grey',
                        neutral0: 'white',
                        neutral5: 'white',
                        neutral10: 'white',
                        neutral20: 'black',
                        neutral30: 'black',
                        neutral40: 'white',
                        neutral50: 'black',
                        neutral60: 'black',
                        neutral70: 'black',
                        neutral80: 'white',
                        neutral90: 'black',

                    }
                })}
            />
            <TrackImage track={track} />
        </>
    )
}

export default Sidebar;