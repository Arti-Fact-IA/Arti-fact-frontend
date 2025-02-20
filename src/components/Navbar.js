import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

function Navbar() {
    const token = localStorage.getItem("token");
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

    return (
        <nav className="navbar">
            <h1>Arti-Fact</h1>
            <div>
                {token ? (
                    <>
                        <Link to="/dashboard" className="nav-link">Dashboard</Link>
                        <button onClick={handleLogout} className="btn-logout">Déconnexion</button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="nav-link">Connexion</Link>
                        <Link to="/register" className="nav-link">S'inscrire</Link>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;