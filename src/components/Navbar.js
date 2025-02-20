import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

function Navbar() {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

    return (
        <nav className="p-4 bg-gray-800 text-white flex justify-between">
            <h1 className="text-xl font-bold">Gestionnaire de Factures</h1>
            <div>
                <Link to="/dashboard" className="mr-4">Dashboard</Link>
                <button onClick={handleLogout} className="bg-red-500 px-4 py-2 rounded">Déconnexion</button>
            </div>
        </nav>
    );
}

export default Navbar;