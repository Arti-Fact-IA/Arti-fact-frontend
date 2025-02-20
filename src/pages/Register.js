import React, { useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nom, setNom] = useState("");
    const [entreprise, setEntreprise] = useState("");

    const handleRegister = async () => {
        try {
            await axios.post(`${API_URL}/register`, { email, password, nom, entreprise });
            alert("Compte créé avec succès ! Connecte-toi maintenant.");
        } catch (error) {
            console.error("Erreur d'inscription", error);
        }
    };

    return (
        <div>
            <h1>Inscription</h1>
            <input type="text" placeholder="Nom" onChange={(e) => setNom(e.target.value)} />
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)} />
            <input type="text" placeholder="Entreprise" onChange={(e) => setEntreprise(e.target.value)} />
            <button onClick={handleRegister}>S'inscrire</button>
        </div>
    );
}

export default Register;