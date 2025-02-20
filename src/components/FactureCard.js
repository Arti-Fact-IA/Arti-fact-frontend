import React from "react";
import "../styles/styles.css";

function FactureCard({ facture }) {
    return (
        <div className="card">
            <h3 className="text-lg font-semibold">{facture.entreprise_emettrice}</h3>
            <p><strong>Montant :</strong> {facture.montant} €</p>
            <p><strong>Date :</strong> {facture.date_facture}</p>
        </div>
    );
}

export default FactureCard;