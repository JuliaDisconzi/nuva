"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa"; // seta no início de cada item

export default function LPF() {
    const servicos = [
        "Fortalecimento do core e músculos profundos",
        "Melhora da postura e alinhamento corporal",
        "Redução de pressão intra-abdominal",
        "Reabilitação pós-parto e preventiva",
        "Aumento da mobilidade e flexibilidade",


    ];

    return (
        <main
            id="LPF"
            // min-h-screen garante altura mínima da tela inteira
            // pt-28 cria espaço para o header fixo (começa logo abaixo dele)
            // px-6/8 garante espaçamento lateral responsivo
            className="w-full min-h-screen bg-white flex flex-col items-center pt-28 px-6 sm:px-8"
        >

            <div className="w-full max-w-6xl text-left mb-10">
                <h2 className="text-4xl font-bold text-[#1F526F] mb-3">
                    LOW PRESSURE FITNESS
                </h2>
                {/* Linha decorativa abaixo do título */}
                <div className="h-1 w-32 sm:w-78 bg-[#1F526F]"></div>
            </div>

            {/* --- SEÇÃO TEXTO + IMAGEM LADO A LADO --- */}
            <div
                className="
          flex flex-col md:flex-row
          items-center md:items-start justify-between
          w-full max-w-6xl gap-8
        "

            >
                {/* LADO ESQUERDO - TEXTO */}
                <div className="flex-1 text-left">
                    <p className="text-black text-2xl leading-relaxed">
                        LPF é um inovador sistema de treinamento postural e respiratório , que utiliza o conhecimento das rotas fasciais para uma maior ativação dos músculos do CORE, proporcionado aos seus praticantes a regulação do tônus basal e a normalização da PIA (pressão intra-abdominal).

                    </p>
                </div>

                {/* LADO DIREITO - IMAGEM */}

                <div className="flex-1 flex justify-center md:justify-end w-full mt-6 md:mt-0">
                    <div className="relative w-full h-64 sm:h-72 md:h-96 rounded-2xl shadow-lg">
                        <Image
                            src="/lpf.png"
                            alt="Low Pressure Fitness"
                            fill
                            className="object-cover rounded-2xl"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>

            </div>

            {/* --- BLOCO DE SERVIÇOS --- */}
            <div
                className="
          mt-16 w-full max-w-6xl
          bg-white shadow-xl rounded-2xl
          p-8
          flex flex-col items-start
          gap-4 mb-20
        "
            >
                {servicos.map((servico, idx) => (
                    <div
                        key={idx}
                        className="
              flex items-center gap-3
              bg-[#EAF1F6]
              px-5 py-3
              rounded-md
              hover:bg-[#D1E2F0]
              transition-all duration-300
              w-full
            "
                    >
                        {/* Ícone de seta no início */}
                        <FaArrowRight className="text-[#1F526F] shrink-0" />
                        {/* Nome do serviço */}
                        <span className="text-[#1F526F] font-semibold text-lg">
                            {servico}
                        </span>
                    </div>
                ))}
            </div>
            <a
                href="https://wa.me/5548996513245?text=Olá,%20quero%20agendar%20meu%20horário!"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 mb-50 px-12 py-5 border-2 border-[#1F526F] text-[#1F526F] font-semibold rounded hover:bg-[#1F526F] hover:text-white transition text-3xl"
            >
                Agende seu horário
            </a>
        </main>
    );
}
