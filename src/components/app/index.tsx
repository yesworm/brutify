import Login from '../login'
import Trackinfo from '../trackinfo'
import { useState } from 'react'


function App() {

    const [token, setToken] = useState<string | null>(null)
    
    if (!token) {
        return (
            <>
                <Login />
            </>
        )
    } else {
        <Trackinfo />
    }


}

export default App