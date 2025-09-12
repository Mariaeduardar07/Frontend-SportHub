"use client";

import { useState, useEffect } from "react";
import { Spin, Pagination } from "antd";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { ArrowRight, Trophy, Users, MapPin } from "lucide-react";
import "react-toastify/dist/ReactToastify.css";
import styles from "./esportes.module.css";

export default function EsportesPage() {
  const [modalidades, setModalidades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [imageErrors, setImageErrors] = useState(new Set());

  // Função para buscar todos os usuários
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/modalidades");
      setModalidades(response.data);
      toast.success("Modalidades carregadas com sucesso!", {
        toastId: "success-load", // ID único para evitar duplicatas
      });
    } catch (error) {
      console.error("Erro ao buscar modalidades:", error);
      toast.error("Erro ao carregar modalidades.", {
        toastId: "error-load",
      });
    } finally {
      setLoading(false);
    }
  };

  // Executa a busca quando o componente carrega
  useEffect(() => {
    fetchUsers();
  }, []);

  // Calcula quais usuários mostrar na página atual
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentModalidades = modalidades.slice(startIndex, endIndex);

  // Função para mudar de página
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Função para mudar quantidade de itens por página
  const handlePageSizeChange = (current, size) => {
    setPageSize(size);
    setCurrentPage(1);
  };

  // Função para tratar erros de imagem
  const handleImageError = (modalidadeId) => {
    setImageErrors(prev => new Set([...prev, modalidadeId]));
  };

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

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Descubra o Mundo dos Esportes</h1>
        <p className={styles.subtitle}>
          Explore nossa coleção completa de modalidades esportivas com informações detalhadas, 
          regras e curiosidades sobre cada esporte.
        </p>
      </div>

      {loading ? (
        <div className={styles.loadingWrapper}>
          <Spin size="large" />
          <p className={styles.loadingText}>Carregando modalidades...</p>
        </div>
      ) : (
        <>
          <div className={styles.controlsWrapper}>
            <Pagination
              total={modalidades.length}
              showTotal={(total) => `${total} modalidades encontradas`}
              pageSize={pageSize}
              current={currentPage}
              showSizeChanger={true}
              pageSizeOptions={["6", "12", "18", "24"]}
              onChange={handlePageChange}
              onShowSizeChange={handlePageSizeChange}
            />
          </div>

          <div className={styles.cardsContainer}>
            {currentModalidades.map((modalidade) => (
              <Link
                key={modalidade.id}
                href={`/esportes/${modalidade.id}`}
                className={styles.cardLink}
              >
                <div className={styles.userCard}>
                  <div className={styles.cardContent}>
                    <div className={styles.imageSection}>
                      {isValidImageUrl(modalidade.image_url) && !imageErrors.has(modalidade.id) ? (
                        <Image
                          src={modalidade.image_url}
                          alt={modalidade.name}
                          fill
                          className={styles.cardImage}
                          onError={() => handleImageError(modalidade.id)}
                        />
                      ) : (
                        <div className={styles.imagePlaceholder}>
                          <div className={styles.icon}>🏅</div>
                          <span>Imagem não disponível</span>
                        </div>
                      )}
                    </div>
                    
                    <h3 className={styles.userName}>{modalidade.name}</h3>
                    
                    <div className={styles.cardMeta}>
                      {modalidade.type && (
                        <span className={styles.badge}>
                          <Users size={12} />
                          {modalidade.type}
                        </span>
                      )}
                      {modalidade.olympic && (
                        <span className={styles.badge}>
                          <Trophy size={12} />
                          Olímpico
                        </span>
                      )}
                      {modalidade.origin_country && (
                        <span className={styles.badge}>
                          <MapPin size={12} />
                          {modalidade.origin_country}
                        </span>
                      )}
                    </div>
                    
                    <button className={styles.viewButton}>
                      Ver Detalhes
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}

      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
