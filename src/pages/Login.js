import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const res = await axios.post(`${API_URL}/login`, { email, password });
            localStorage.setItem("token", res.data.access_token);
            window.location.href = "/dashboard";
        } catch (error) {
            console.error("Erreur de connexion", error);
        }
    };

    return (
        <div className="container">
            <h1>Connexion</h1>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Se connecter</button>
            <p>Pas encore de compte ? <Link to="/register">S'inscrire</Link></p>
        </div>
    );
}

export default Login;