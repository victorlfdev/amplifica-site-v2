import "./globals.css";
import localFont from "next/font/local";
import { Inter } from "next/font/google";

import ClientEffects from "../components/ClientEffects";

// Fonte Inter
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// Fonte Salvatore
const salvatore = localFont({
  src: [
    {
      path: "../../public/fonts/Salvatore-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Salvatore-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-salvatore",
});

// Metadados
export const metadata = {
  title: "Amplifica",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={salvatore.variable}>
      <body
        className={`${inter.className} relative text-gray-200 bg-gradient-to-tr from-yellow-800 via-gray-800 to-black min-h-screen overflow-x-hidden`}
      >
        {/* Componentes que usam JS do navegador */}
        <ClientEffects />

        {/* Vídeo de fundo */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="hidden md:block fixed inset-0 w-full h-full object-cover -z-20"
        >
          <source src="/background.webm" type="video/webm" />
          <source src="/background.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="fixed inset-0 bg-black/60 -z-10"></div>

        {children}
      </body>
    </html>
  );
}
