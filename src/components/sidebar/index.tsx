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

const Sidebar:React.FC<IProps> = ({ 
    playlists, 
    token, 
    tracks, 
    track, 
    setTrack, 
    setSelectedPlaylistId 
}) => {


    const styles = {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        menuList: (styles: any) => {
            return {
                ...styles,
                maxHeight: "25vh"
            };
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        container: (styles: any) => ({
            ...styles,
            width: '90%',
        }),
        option: (styles: React.CSSProperties, { isFocused }: { isFocused: boolean }) => {
            return {
                ...styles,
                backgroundColor: isFocused ? "#999999" : null,
                color: "#333333",
            }
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
                    colors: {
                        ...theme.colors,
                        primary: 'black',
                        primary25: '#e6e6e6',     
                        primary50: '#cccccc',     
                        primary75: '#b3b3b3',     
                        neutral0: 'white',        
                        neutral5: 'white',
                        neutral10: 'white',
                        neutral20: 'black',       
                        neutral30: 'black',
                        neutral40: 'black',       
                        neutral50: 'black',       
                        neutral60: 'black',
                        neutral70: 'black',
                        neutral80: 'black',       
                        neutral90: 'black',
                    }
                })}
            />
            <TrackImage track={track} />
        </>
    )
}

export default Sidebar;