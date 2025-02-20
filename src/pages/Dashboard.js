import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function Dashboard() {
    const [factures, setFactures] = useState([]);
    const [file, setFile] = useState(null);
    const token = localStorage.getItem("token");

    useEffect(() => {
        fetchFactures();
    }, []);

    const fetchFactures = async () => {
        try {
            const res = await axios.get(`${API_URL}/factures`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setFactures(res.data);
        } catch (error) {
            console.error("Erreur lors du chargement des factures", error);
        }
    };

    const handleUpload = async () => {
        if (!file) return alert("Sélectionnez un fichier");
        const formData = new FormData();
        formData.append("file", file);
        try {
            await axios.post(`${API_URL}/upload`, formData, {
                headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" },
            });
            alert("Facture uploadée avec succès !");
            fetchFactures();
        } catch (error) {
            console.error("Erreur lors de l'upload", error);
        }
    };

    return (
        <div>
            <h1>Tableau de bord</h1>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={handleUpload}>Téléverser</button>
        </div>
    );
}

export default Dashboard;