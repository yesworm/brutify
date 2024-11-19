import { redirectToAuthCodeFlow } from "../../auth"
import { Navbar, Button, Profile, AsciiLogo } from "./styles"
interface NavProps {
    profile?: string | null;
}


const Nav: React.FC<NavProps> = ({ profile }) => {
    const clientId = import.meta.env.VITE_CLIENT_ID;

    const handleClick = async () => {
        await redirectToAuthCodeFlow(clientId)
    }

    const asciiLogo = `
 ▄▀▀█▄▄   ▄▀▀▄▀▀▀▄  ▄▀▀▄ ▄▀▀▄  ▄▀▀▀█▀▀▄  ▄▀▀█▀▄    ▄▀▀▀█▄    ▄▀▀▄ ▀▀▄
▐ ▄▀   █ █   █   █ █   █    █ █    █  ▐ █   █  █  █  ▄▀  ▀▄ █   ▀▄ ▄▀
  █▄▄▄▀  ▐  █▀▀█▀  ▐  █    █  ▐   █     ▐   █  ▐  ▐ █▄▄▄▄   ▐     █  
  █   █   ▄▀    █    █    █      █          █      █    ▐         █  
 ▄▀▄▄▄▀  █     █      ▀▄▄▄▄▀   ▄▀        ▄▀▀▀▀▀▄   █            ▄▀   
█    ▐   ▐     ▐              █         █       █ █             █    
▐                             ▐         ▐       ▐ ▐             ▐    
`;

    return (
        <>
            <Navbar>
                <AsciiLogo>{asciiLogo}</AsciiLogo>
            {!profile ? (
                 <Button onClick={handleClick}>
                 Login
                </Button>
            ) : (
                <Profile profile={profile} />
            )}
            </Navbar>
        </>
    );
}

export default Nav;