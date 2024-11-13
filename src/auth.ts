// redirect 

export async function redirectToAuthCodeFlow(clientId: string) {
    const verifier = generateCodeVerifier(128);
    const challenge = await generateCodeChallenge(verifier);

    localStorage.setItem("verifier", verifier);

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("response_type", "code");
    params.append("redirect_uri", "http://localhost:5173/callback");
    params.append("scope", "user-read-private user-read-email playlist-read-private playlist-read-collaborative");
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
        const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
        
        if (!verifier) {
            throw new Error("No verifier found in localStorage");
        }

        const params = new URLSearchParams();
        params.append("client_id", clientId);
        params.append("client_secret", clientSecret); // Add this line
        params.append("grant_type", "authorization_code");
        params.append("code", code);
        params.append("redirect_uri", "http://localhost:5173/callback");
        params.append("code_verifier", verifier);

        console.log('Sending token request with params:', {
            clientId,
            code: code.substring(0, 5) + '...',
            verifier: verifier.substring(0, 5) + '...'
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

        const data = await result.json();
        if (!data.access_token) {
            console.error('No access token in response:', data);
            throw new Error('No access token received');
        }

        return data.access_token;
    } catch (error) {
        console.error('Authorization error:', error);
        throw error;
    }
}