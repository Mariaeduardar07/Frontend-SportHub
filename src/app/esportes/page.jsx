"use client";

import { useState, useEffect } from "react";
import { Card, Spin, Pagination } from "antd";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./esportes.module.css";

export default function UsersPage() {
  const [modalidades, setModalidades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
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
      <h1 className={styles.title}>Lista de Modalidades</h1>

      {loading ? (
        // Tela de carregamento
        <div className={styles.loadingWrapper}>
          <Spin size="large" />
          <p className={styles.loadingText}>Carregando modalidades...</p>
        </div>
      ) : (
        <>
          {/* Controles de paginação */}
          <div className={styles.controlsWrapper}>
            <Pagination
              total={modalidades.length}
              showTotal={(total) => `Total ${total} modalidades`}
              pageSize={pageSize}
              current={currentPage}
              showSizeChanger={true}
              pageSizeOptions={["5", "10", "20"]}
              onChange={handlePageChange}
              onShowSizeChange={handlePageSizeChange}
            />
          </div>

          {/* Lista de modalidades em cards */}
          <div className={styles.cardsContainer}>
            {currentModalidades.map((modalidade) => (
              <Link
                key={modalidade.id}
                href={`/esportes/${modalidade.id}`}
                className={styles.cardLink}
              >
                <Card className={styles.userCard} hoverable>
                  <div className={styles.cardContent}>
                    {/* Informações da modalidade */}
                    <h3 className={styles.userName}>{modalidade.name}</h3>
                    {isValidImageUrl(modalidade.image_url) && !imageErrors.has(modalidade.id) ? (
                      <Image
                        src={modalidade.image_url}
                        alt={modalidade.name}
                        width={400}
                        height={300}
                        className={styles.image}
                        style={{
                          width: "100%",
                          height: "180px",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                        onError={() => handleImageError(modalidade.id)}
                      />
                    ) : (
                      <div 
                        className={styles.imagePlaceholder}
                        style={{
                          width: "100%",
                          height: "180px",
                          backgroundColor: "#f0f0f0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "8px",
                          color: "#666",
                          fontSize: "14px"
                        }}
                      >
                        📷 Imagem não disponível
                      </div>
                    )}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </>
      )}

      {/* Container para mostrar as notificações toast */}
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
      />
    </div>
  );
}
