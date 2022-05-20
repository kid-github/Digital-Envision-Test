import React from 'react'
import "./login.scss"

export default function Login() {
    const handleCLick = () => {
        const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
        const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URL;
        const AUTH_ENDPOINT = process.env.REACT_APP_AUTH_ENDPOINT;
        const RESPONSE_TYPE = "token";
        window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&show_dialog=true`
    }
    return (
        <div>
            <h2>LOGIN</h2>

            <button onClick={handleCLick}>Login to Spotify</button>
        </div>
    )
}
