import React, { useState } from "react";
import axios from "axios";
import "../styles/styles.css";

const API_URL = process.env.REACT_APP_API_URL;

function UploadFile() {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);

        try {
            const token = localStorage.getItem("token");
            await axios.post(`${API_URL}/upload`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                }
            });
            alert("Fichier téléversé avec succès");
        } catch (error) {
            console.error("Erreur lors du téléversement", error);
            alert("Échec du téléversement");
        }
    };

    return (
        <div className="upload-container">
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Téléverser</button>
        </div>
    );
}

export default UploadFile;