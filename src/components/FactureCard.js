import React from "react";

function FactureCard({ facture }) {
    return (
        <div className="border p-4 rounded shadow-md bg-white">
            <h3 className="text-lg font-semibold">{facture.entreprise_emettrice}</h3>
            <p><strong>Montant :</strong> {facture.montant} €</p>
            <p><strong>Date :</strong> {facture.date_facture}</p>
        </div>
    );
}

export default FactureCard;