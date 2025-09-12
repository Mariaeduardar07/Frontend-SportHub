import Banner from "@/components/banner";
import style from "./sobreAPI.module.css";

export default function SobreAPI() {
  return (
    <div className={style.container}>
      <Banner 
        mainCardTitle="CONHEÇA A API"
        mainCardDescription="Descubra nossa API de esportes com informações completas sobre modalidades, regras, equipamentos e muito mais. Acesse dados detalhados e atualizados para seus projetos."
        mainCardButton="EXPLORAR AGORA"
        mainCardImage="https://cdn.abo.media/upload/article/dfm2hvspmhg3g6eqelre.jpg"
        mainCardImageAlt="Bola de futebol no campo"
      />
      <div className={style.textSection}>
        <h1 className={style.title}>SportsAPI</h1>
        <p className={style.description}>
          A API de Esportes é uma API REST que fornece informações detalhadas
          sobre modalidades esportivas, incluindo regras, equipamentos, origem,
          popularidade e muito mais.
        </p>
      </div>

      <div className={style.listSection}>
        <h1 className={style.listTitle}>Endpoint escolhido</h1>
        <div className={style.featureList}>
          <p>/modalidades</p>
        </div>
      </div>

      <div className={style.listSection}>
        <h1 className={style.listTitle}>Lista de atributos</h1>
        <ul className={style.featureList}>
          <li className={style.listItem}>
            id → Identificador único do esporte.
          </li>
          <li className={style.listItem}>
            name → Nome da modalidade (ex: Futebol, Basquete).
          </li>
          <li className={style.listItem}>
            image_url → Link de uma imagem representando o esporte.
          </li>
          <li className={style.listItem}>
            description → Breve explicação sobre o esporte.
          </li>
          <li className={style.listItem}>
            type → Define se o esporte é coletivo ou individual.
          </li>
          <li className={style.listItem}>
            indoor → Informa se é praticado em ambiente fechado (true/false).
          </li>
          <li className={style.listItem}>
            origin_country → País ou cultura onde o esporte surgiu.
          </li>
          <li className={style.listItem}>
            olympic → Indica se o esporte faz parte dos Jogos Olímpicos
            (true/false)
          </li>
          <li className={style.listItem}>
            popularity_rank → Ranking de popularidade mundial (quanto menor,
            mais popular).
          </li>
          <li className={style.listItem}>
            basic_rules → Resumo das principais regras da modalidade.
          </li>
          <li className={style.listItem}>
            team_size → Número de jogadores por equipe (quando for coletivo).
          </li>
          <li className={style.listItem}>
            equipment → Equipamentos necessários (bola, raquete, chuteira,
            etc.).
          </li>
          <li className={style.listItem}>
            elements → Habilidades ou características envolvidas (resistência,
            agilidade, estratégia).
          </li>
        </ul>
      </div>
    </div>
  );
}
