"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import styles from "./detalhes.module.css";

export default function DetalhesEsporte() {
  const [modalidade, setModalidade] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    const buscarDetalhes = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/modalidades/${params.id}`);
        setModalidade(response.data);
      } catch (error) {
        console.error("Erro ao buscar detalhes:", error);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      buscarDetalhes();
    }
  }, [params.id]);

  // Função para verificar se uma URL de imagem é válida
  const isValidImageUrl = (url) => {
    if (!url) return false;
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  // Função para tratar erros de imagem
  const handleImageError = () => {
    setImageError(true);
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>Carregando detalhes...</div>
      </div>
    );
  }

  if (!modalidade) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>Modalidade não encontrada</div>
        <button onClick={() => router.back()} className={styles.backButton}>
          ← Voltar
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <button onClick={() => router.back()} className={styles.backButton}>
          ← Voltar para Esportes
        </button>
        
        <div className={styles.detailsCard}>
          <div className={styles.imageSection}>
            {isValidImageUrl(modalidade.image_url) && !imageError ? (
              <Image
                src={modalidade.image_url}
                alt={modalidade.name}
                width={400}
                height={300}
                className={styles.image}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                }}
                onError={handleImageError}
              />
            ) : (
              <div 
                className={styles.imagePlaceholder}
                style={{
                  width: "100%",
                  height: "300px",
                  backgroundColor: "#f0f0f0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#666",
                  fontSize: "18px",
                  flexDirection: "column",
                  gap: "10px"
                }}
              >
                <span style={{ fontSize: "48px" }}>📷</span>
                <span>Imagem não disponível</span>
              </div>
            )}
          </div>
          
          <div className={styles.infoSection}>
            <h1 className={styles.title}>{modalidade.name}</h1>
            
            <div className={styles.detailsGrid}>
              <div className={styles.detailItem}>
                <span className={styles.label}>ID:</span>
                <span className={styles.value}>{modalidade.id}</span>
              </div>
              
              <div className={styles.detailItem}>
                <span className={styles.label}>Descrição:</span>
                <span className={styles.value}>
                  {modalidade.description || "Descrição não disponível"}
                </span>
              </div>
              
              <div className={styles.detailItem}>
                <span className={styles.label}>Origem:</span>
                <span className={styles.value}>
                  {modalidade.origin || "Origem não disponível"}
                </span>
              </div>
              
              <div className={styles.detailItem}>
                <span className={styles.label}>Categoria:</span>
                <span className={styles.value}>
                  {modalidade.category || "Categoria não disponível"}
                </span>
              </div>
              
              <div className={styles.detailItem}>
                <span className={styles.label}>Popularidade:</span>
                <span className={styles.value}>
                  {modalidade.popularity || "Não disponível"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
