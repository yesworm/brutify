import Select from 'react-select'
import Controls from '../controls'

interface IProps {
    playlists: Array<{name: string, id: string}>;
    getTracks: (id: string) => Promise<void>;
}

const Sidebar:React.FC<IProps> = ({ playlists, getTracks }) => {


    const styles = {
        menuList: (styles) => {
            return {
                ...styles,
                maxHeight: "25vh"
            };
        },
        option: (styles:any, { isFocused }: { isFocused: any}) => {
            return {
                ...styles,
                backgroundColor: isFocused ? "#999999" : null,
                color: "#333333",
            }
        }
    }

    const handleChange = ((e:any) => {
        console.log(e.id)
    })

    return(
        <>
            <Controls/>
            <Select
                options={playlists}
                getOptionLabel={(e:any)=>e.name}
                styles={styles}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 0,
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
        </>
    )
}

export default Sidebar;