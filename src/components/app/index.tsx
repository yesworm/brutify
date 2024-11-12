import Login from '../login'
import Trackinfo from '../trackinfo'
import { useEffect, useState } from 'react'
import { getAccessToken } from '../../auth'

function App() {
    const [token, setToken] = useState<string | null>(null)
    
    useEffect(() => {
        let isRequesting = false;  // add flag
        
        const getToken = async () => {
            if (isRequesting) return;  // skip if already requesting
            try {
                isRequesting = true;  // set flag
                const clientId = import.meta.env.VITE_CLIENT_ID;
                const params = new URLSearchParams(window.location.search);
                const code = params.get("code");
                
                if (code) {
                    const accessToken = await getAccessToken(clientId, code);
                    setToken(accessToken);
                }
            } catch (error) {
                console.error('Error in getToken:', error);
            } finally {
                isRequesting = false;  // reset flag
            }
        };

        getToken();
    }, []); 

    if (!token) {
        return (
            <>
                <Login />
            </>
        )
    } 
    
    return <Trackinfo />
}

export default App