import "./globals.css";
import Header from "../components/header";

export const metadata = {
    title: "SportHub",
    description: "Projeto que reúne informações sobre diversos esportes, trazendo descrições, regras, origens, curiosidades e dados básicos de cada modalidade",
    icons: {
        icon: "/icons/favicon.ico",
    },
};

export default function RootLayout({ children }) {
    return (
        <html>            
            <body><Header />{children}</body>
        </html>
    );
}
