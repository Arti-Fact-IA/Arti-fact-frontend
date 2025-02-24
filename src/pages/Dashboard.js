import React, { useEffect, useState } from "react";
import axios from "axios";
import FactureDetails from "../components/FactureDetails";
import "../styles/styles.css";

const API_URL = process.env.REACT_APP_API_URL;

function Dashboard() {
    const [factures, setFactures] = useState([]);
    const [selectedFacture, setSelectedFacture] = useState(null);

    useEffect(() => {
        const fetchFactures = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.get(`${API_URL}/factures`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setFactures(res.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des factures", error);
            }
        };
        fetchFactures();
    }, []);

    return (
        <div className="container">
            <h1>Tableau des Factures</h1>
            <table className="facture-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Entreprise Émettrice</th>
                        <th>Nom du Fichier</th>
                        <th>Montant (€)</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {factures.map((facture) => (
                        <tr key={facture.id}>
                            <td>{facture.id}</td>
                            <td>{facture.entreprise_emettrice || 'NC'}</td>
                            <td>{facture.nom_fichier}</td>
                            <td>{facture.montant !== null ? facture.montant.toFixed(2) : 'NC'}</td>
                            <td>{facture.date_facture ? new Date(facture.date_facture).toLocaleDateString() : 'NC'}</td>
                            <td>{facture.status}</td>
                            <td>
                                <button onClick={() => setSelectedFacture(facture)}>Voir Détails</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedFacture && <FactureDetails facture={selectedFacture} onClose={() => setSelectedFacture(null)} />}
        </div>
    );
}

export default Dashboard;
