"use client";

import { useState } from "react";
import axios from "axios";
import styles from "./esportes.module.css";

export default function page() {
    const [modalidades, setModalidades] = useState([]);
    const [loading, setLoading] = useState(false);

    const buscarModalidade = async () => {
        setLoading(true);
        try {
            const response = await axios.get("http://localhost:5000/modalidade");
            const data = response.data;
            console.table(data);
            setModalidades(data);
        } catch (error) {
            console.error("Erro ao buscar modalidades:", error);
        } finally {
            setLoading(false);
        }
    };
      return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Modalidades</h1>

                <div className={styles.buttonSection}>
                    <button 
                        onClick={buscarModalidade} 
                        disabled={loading} 
                        className={styles.searchButton}
                    >
                        {loading ? "Carregando ... " : "🔍 Buscar Modalidades"}
                    </button>
                </div>
            </div>

            <div className={styles.grid}>
                {modalidades.map((modalidade) => (
                    <div key={modalidade.id} className={styles.card}>
                        <h3 className={styles.cardTitle}>{modalidade.name}</h3>
                        <p className={styles.cardDescription}>{modalidade.image_url}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}