import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Nuva",
  description: "Projeto Nuva",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={outfit.className}>
      <body className="flex flex-col min-h-screen">
        {/* Header em todas as páginas */}
        <Header />

        {/* Conteúdo da página */}
        <main className="flex-grow">{children}</main>

        {/* Footer em todas as páginas */}
        <Footer />
      </body>
    </html>
  );
}
