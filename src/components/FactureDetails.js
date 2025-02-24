import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/styles.css";

const API_URL = process.env.REACT_APP_API_URL;

function FactureDetails({ facture, onClose }) {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.get(`${API_URL}/factures/${facture.id}/articles`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setArticles(res.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des articles", error);
            }
        };
        fetchArticles();
    }, [facture.id]);

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Détails de la Facture</h2>
                <p><strong>ID :</strong> {facture.id}</p>
                <p><strong>Entreprise Émettrice :</strong> {facture.entreprise_emettrice || 'NC'}</p>
                <p><strong>Nom du Fichier :</strong> {facture.nom_fichier}</p>
                <p><strong>Montant :</strong> {facture.montant !== null ? facture.montant.toFixed(2) : 'NC'} €</p>
                <p><strong>Date :</strong> {facture.date_facture ? new Date(facture.date_facture).toLocaleDateString() : 'NC'}</p>
                <p><strong>Status :</strong> {facture.status}</p>

                <h3>Articles de la Facture</h3>
                <div className="accordion">
                    {articles.length > 0 ? (
                        articles.map((article, index) => (
                            <details key={index}>
                                <summary>{article.nom} - {article.prix.toFixed(2)} €</summary>
                                <p><strong>Quantité :</strong> {article.quantite}</p>
                                <p><strong>Total :</strong> {(article.prix * article.quantite).toFixed(2)} €</p>
                            </details>
                        ))
                    ) : (
                        <p>Aucun article trouvé pour cette facture.</p>
                    )}
                </div>

                <button onClick={onClose}>Fermer</button>
            </div>
        </div>
    );
}

export default FactureDetails;
