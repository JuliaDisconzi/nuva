"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function Estetica() {
  const servicos = [
    "Limpeza de pele profunda",
    "Rejuvenescimento facial",
    "Tratamento de acne e cicatrizes",
    "Depilação",
  ];

  return (
    <main
      id="Estetica"
      className="w-full min-h-screen bg-white flex flex-col items-center pt-28 px-6 sm:px-8"
    >
      {/* Título da página */}
      <div className="w-full max-w-6xl text-left mb-10">
        <h2 className="text-4xl font-bold text-[#1F526F] mb-3">ESTÉTICA</h2>
        <div className="h-1 w-32 sm:w-48 bg-[#1F526F]"></div>
      </div>

      {/* Seção texto + imagem */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full max-w-6xl gap-8">
        {/* Texto */}
        <div className="flex-1 text-left">
          <p className="text-black text-2xl leading-relaxed">
            A estética vai além da beleza: é um cuidado completo com o corpo e a mente.
            Na nossa clínica, oferecemos tratamentos personalizados que valorizam a saúde da pele,
            promovem relaxamento e elevam a autoestima. Cada atendimento é pensado para proporcionar
            bem-estar, harmonizando resultados visíveis com conforto e cuidado.
          </p>
        </div>

        {/* Imagem */}
        <div className="flex-1 flex justify-center md:justify-end w-full mt-6 md:mt-0">
          <div className="relative w-full h-64 sm:h-72 md:h-96 rounded-2xl shadow-lg">
            <Image
              src="/estetica.jpg"
              alt="Estética"
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Serviços */}
      <div className="mt-16 w-full max-w-6xl bg-white shadow-xl rounded-2xl p-8 flex flex-col items-start gap-4 mb-20">
        {servicos.map((servico, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 bg-[#EAF1F6] px-5 py-3 rounded-md hover:bg-[#D1E2F0] transition-all duration-300 w-full"
          >
            <FaArrowRight className="text-[#1F526F] shrink-0" />
            <span className="text-[#1F526F] font-semibold text-lg">{servico}</span>
          </div>
        ))}
      </div>

      <a
        href="https://wa.me/554896791449?text=Olá,%20quero%20agendar%20meu%20horário!"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-12 mb-12 px-12 py-5 border-2 border-[#1F526F] text-[#1F526F] font-semibold rounded hover:bg-[#1F526F] hover:text-white transition text-3xl"
      >
        Agende seu horário
      </a>
    </main>
  );
}
