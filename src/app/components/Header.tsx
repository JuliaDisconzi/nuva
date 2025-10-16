"use client";
import { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const toggleMenu = () => setMenuAberto(!menuAberto);

  return (
    <header className="bg-[#FBFFF5] fixed top-0 left-0 w-full z-50 py-4 px-8 shadow-md flex items-center justify-between">
      <div className="flex items-center flex-shrink-0">
        <Image src="/icone.png" alt="Logo Nuva" width={60} height={60} />
      </div>

      <button
        onClick={toggleMenu}
        className="text-[#1F526F] text-3xl md:hidden focus:outline-none transition-transform duration-300"
      >
        {menuAberto ? <FaTimes /> : <FaBars />}
      </button>

      <nav
        className={`
          hidden md:flex flex-1 justify-evenly ml-10
          font-outfit text-black text-xl transition-all
        `}
      >
        <a href="#home" className="hover:text-[#1F526F] transition-colors">Home</a>
        <a href="#sobre-nos" className="hover:text-[#1F526F] transition-colors">Sobre Nós</a>
        <a href="#servicos" className="hover:text-[#1F526F] transition-colors">Serviços</a>
        <a href="#especialistas" className="hover:text-[#1F526F] transition-colors">Especialistas</a>
        <a href="#footer" className="hover:text-[#1F526F] transition-colors">Contato</a>
      </nav>

      <nav
        className={`
          md:hidden absolute top-full left-0 w-full bg-[#FBFFF5]
          flex flex-col items-center font-outfit text-black text-lg shadow-md
          transition-all duration-500 ease-in-out
          ${menuAberto ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}
        `}
      >
        <a href="#home" className="py-3 hover:text-[#1F526F]" onClick={() => setMenuAberto(false)}>Home</a>
        <a href="#sobre-nos" className="py-3 hover:text-[#1F526F]" onClick={() => setMenuAberto(false)}>Sobre Nós</a>
        <a href="#servicos" className="py-3 hover:text-[#1F526F]" onClick={() => setMenuAberto(false)}>Serviços</a>
        <a href="#especialistas" className="py-3 hover:text-[#1F526F]" onClick={() => setMenuAberto(false)}>Especialistas</a>
        <a href="#footer" className="py-3 hover:text-[#1F526F]" onClick={() => setMenuAberto(false)}>Contato</a>
      </nav>
    </header>
  );
}
