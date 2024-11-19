const REDIRECT_URI = import.meta.env.DEV 
    ? "http://localhost:5173/callback"
    : "https://brutify.online/callback";

export async function redirectToAuthCodeFlow(clientId: string) {
    const verifier = generateCodeVerifier(128);
    const challenge = await generateCodeChallenge(verifier);

    localStorage.setItem("verifier", verifier);

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("response_type", "code");
    params.append("redirect_uri", REDIRECT_URI);
    params.append("scope", "user-read-private user-read-recently-played user-read-email playlist-read-private playlist-read-collaborative streaming user-read-playback-position user-top-read user-library-read user-read-currently-playing user-modify-playback-state user-read-playback-state");
    params.append("code_challenge_method", "S256");
    params.append("code_challenge", challenge);

    document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

function generateCodeVerifier(length: number) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

async function generateCodeChallenge(codeVerifier: string) {
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}

export async function getAccessToken(clientId: string, code: string): Promise<string> {
    try {
        const verifier = localStorage.getItem("verifier");
        
        if (!verifier) {
            throw new Error("No verifier found in localStorage");
        }

        const params = new URLSearchParams();
        params.append("client_id", clientId);
        params.append("grant_type", "authorization_code");
        params.append("code", code);
        params.append("redirect_uri", REDIRECT_URI);
        params.append("code_verifier", verifier);

        console.log('Token request params:', {
            clientId,
            code: code.substring(0, 10) + '...',
            verifier: verifier.substring(0, 10) + '...',
            redirect_uri: REDIRECT_URI
        });

        console.log('Token request details:', {
            clientId: clientId,
            code: code,
            redirect_uri: REDIRECT_URI,
            verifier: verifier,
            params: params.toString()
        });

        const result = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: { 
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: params
        });

        if (!result.ok) {
            const errorData = await result.json();
            console.error('Token request failed:', {
                status: result.status,
                statusText: result.statusText,
                error: errorData
            });
            throw new Error(`Token request failed: ${result.status} ${result.statusText}`);
        }

        const { access_token } = await result.json();
        return access_token;
    } catch (error) {
        console.error('Token request failed:', error);
        throw error;
    }
}