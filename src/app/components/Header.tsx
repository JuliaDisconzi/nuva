"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const toggleMenu = () => setMenuAberto(!menuAberto);

  return (
    <header className="bg-[#FBFFF5] fixed top-0 left-0 w-full z-50 py-4 px-8 shadow-md flex items-center justify-between">
      <div className="flex items-center flex-shrink-0">
        <Image src="/icone.png" alt="Logo Nuva" width={60} height={60} />
      </div>

      {/* Botão mobile */}
      <button
        onClick={toggleMenu}
        className="text-[#1F526F] text-3xl md:hidden focus:outline-none transition-transform duration-300"
      >
        {menuAberto ? <FaTimes /> : <FaBars />}
      </button>

      {/* Menu desktop */}
      <nav
        className="
          hidden md:flex flex-1 justify-evenly ml-10
          font-outfit text-black text-xl transition-all
        "
      >
        <Link href="/#home" className="hover:text-[#1F526F] transition-colors">Home</Link>
        <Link href="/#sobre-nos" className="hover:text-[#1F526F] transition-colors">Sobre Nós</Link>
        <Link href="/#servicos" className="hover:text-[#1F526F] transition-colors">Serviços</Link>
        <Link href="/#especialistas" className="hover:text-[#1F526F] transition-colors">Especialistas</Link>
        <Link href="/#footer" className="hover:text-[#1F526F] transition-colors">Contato</Link>
      </nav>

      {/* Menu mobile */}
      <nav
        className={`
          md:hidden absolute top-full left-0 w-full bg-[#FBFFF5]
          flex flex-col items-center font-outfit text-black text-lg shadow-md
          transition-all duration-500 ease-in-out
          ${menuAberto ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}
        `}
      >
        <Link href="/#home" className="py-3 hover:text-[#1F526F]" onClick={() => setMenuAberto(false)}>Home</Link>
        <Link href="/#sobre-nos" className="py-3 hover:text-[#1F526F]" onClick={() => setMenuAberto(false)}>Sobre Nós</Link>
        <Link href="/#servicos" className="py-3 hover:text-[#1F526F]" onClick={() => setMenuAberto(false)}>Serviços</Link>
        <Link href="/#especialistas" className="py-3 hover:text-[#1F526F]" onClick={() => setMenuAberto(false)}>Especialistas</Link>
        <Link href="/#footer" className="py-3 hover:text-[#1F526F]" onClick={() => setMenuAberto(false)}>Contato</Link>
      </nav>
    </header>
  );
}
