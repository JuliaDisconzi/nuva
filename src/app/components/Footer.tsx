"use client";

import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#B7C5C7] w-full py-10 px-8 flex flex-col items-center">
      
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full max-w-6xl gap-8">
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
         
          <div className="flex-shrink-0">
            <Image src="/logofooter.png" alt="Logo Nuva" width={200} height={200} />
          </div>

          
          <div className="flex flex-col text-black text-2xl space-y-2 items-center md:items-start">
            <p>Rua Adhemar da Silva, 753</p>
            <p>Kobrasol / São José - SC</p>
            <p>(48) 99651-3245</p>

            
            <div className="flex gap-4 mt-2">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a>
              <a href="https://wa.me/5548996513245" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>

        
        <div className="hidden md:block w-px bg-black h-32"></div>

        <nav className="flex flex-col items-center md:items-start gap-2 text-black text-2xl">
          <a href="#home" className="hover:text-[#1F526F] transition-colors">Home</a>
          <a href="#sobre-nos" className="hover:text-[#1F526F] transition-colors">Sobre Nós</a>
          <a href="#servicos" className="hover:text-[#1F526F] transition-colors">Serviços</a>
          <a href="#especialistas" className="hover:text-[#1F526F] transition-colors">Especialistas</a>
          <a href="#footer" className="hover:text-[#1F526F] transition-colors">Contato</a>
        </nav>
      </div>

      <div className="border-t border-black mt-8 pt-4 text-center text-sm text-black">
        Desenvolvido por Julia Disconzi - 2025
      </div>
    </footer>
  );
}
