import { redirectToAuthCodeFlow } from "../../auth"
interface NavProps {
    profile?: string | null;
}


const Nav: React.FC<NavProps> = ({ profile }) => {
    const clientId = import.meta.env.VITE_CLIENT_ID;

    const handleClick = async () => {
        await redirectToAuthCodeFlow(clientId)
    }

    return (
        <>
            <h1>Brutify</h1>
            {!profile ? (
                 <button onClick={handleClick}>
                 Login
                </button>
            ) : (
                <img src={profile} />
            )}
        </>
    );
}

export default Nav