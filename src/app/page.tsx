"use client";
import Image from "next/image";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const servicos = [
    { nome: "ESTÉTICA", img: "/estetica.jpg" },
    { nome: "PILATES", img: "/pilates.jpg" },
    { nome: "PODOLOGIA", img: "/podologia.jpg" },
    { nome: "FISIOTERAPIA", img: "/fisioterapia.jpg" },
    { nome: "SEITAI", img: "/seitai.jpg" },
    { nome: "LIBERAÇÃO MIOFACIAL", img: "/liberacao.jpg" },
    { nome: "ACUPUNTURA", img: "/acupuntura.jpg" },
    { nome: "LOW PRESSURE FITNESS", img: "/lpf.png" },
  ];

  return (
    <main className="flex flex-col">
      {/* Seção Home - imagem de fundo */}
      <section
        id="home"
        className="relative w-full h-screen flex items-center justify-center"
      >
        <Image
          src="/fundo.jpg"
          alt="Fundo"
          fill
          className="object-cover opacity-35"
        />
        {/* Overlay com logo e frases */}
        <div className="absolute flex flex-col items-center mt-40 text-center text-black px-4">
          <Image src="/logo.png" alt="Logo Nuva" width={620} height={620} />
          <h1 className="text-4xl md:text-4xl font-bold mt-16">
            Onde o corpo respira e a mente se renova.
          </h1>
          <p className="text-xl md:text-2xl mt-10 max-full">
            Fisioterapia, pilates e bem-estar em um espaço pensado para você.
          </p>

          {/* Botão para WhatsApp */}
          <a
            href="https://wa.me/554896791449?text=Olá,%20quero%20agendar%20meu%20horário!"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 px-12 py-5 border-2 border-[#1F526F] text-[#1F526F] font-semibold rounded hover:bg-[#1F526F] hover:text-white transition text-3xl"
          >
            Agende seu horário
          </a>
        </div>
      </section>

      {/* Seção Sobre Nós */}
      <section
        id="sobre-nos"
        className="w-full py-35 bg-white flex flex-col items-start px-6"
      >
        <div className="w-full flex items-center mb-8">
          <h2 className="text-3xl font-bold text-[#5373A9] mr-4 whitespace-nowrap">
            SOBRE NÓS
          </h2>
          <div className="flex-1 h-1 bg-[#D9D9D9]"></div>
        </div>

        <p className="text-black text-3xl ml-10 max-full mt-12 mb-12">
          A Nuva é mais do que uma clínica de fisioterapia. É um espaço de cuidado,
          movimento e presença, onde cada pessoa é recebida com atenção verdadeira.
          <br />
          Criada por fisioterapeutas apaixonadas pelo que fazem, a Nuva acredita que
          o bem-estar não se impõe, se cultiva.
          <br />
          Aqui, cada corpo se reconecta com sua
          leveza, reencontra seu ritmo e se transforma de forma suave, contínua.
        </p>

        <div className="relative w-full flex items-center">
          <button
            onClick={scrollLeft}
            className="absolute left-0 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            <FaChevronLeft size={28} />
          </button>

          <div
            ref={scrollRef}
            className="w-full overflow-x-auto flex space-x-16 scroll-smooth py-4"
          >
            {[22, 24, 37, 39, 53, 55].map((num) => (
              <div
                key={num}
                className="flex-shrink-0 w-[280px] h-[180px] rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={`/nuva-${num}.jpg`}
                  alt={`Nuva ${num}`}
                  width={280}
                  height={180}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            <FaChevronRight size={28} />
          </button>
        </div>
      </section>

      {/* Seção Serviços */}
      <section
        id="servicos"
        className="w-full py-35 bg-white flex flex-col items-start px-6"
      >
        <div className="w-full flex items-center mt-12 mb-8">
          <h2 className="text-3xl font-bold text-[#5373A9] mr-4 whitespace-nowrap">
            SERVIÇOS
          </h2>
          <div className="flex-1 h-1 bg-[#D9D9D9]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 mt-12 lg:grid-cols-4 gap-8 w-full">
          {servicos.map((servico) => (
            <div
              key={servico.nome}
              className="relative w-full h-64  overflow-hidden group shadow-lg"
            >
              <Image
                src={servico.img}
                alt={servico.nome}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)] group-hover:bg-[rgba(0,0,0,0.8)] transition"></div>




              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                <h3 className="text-2xl font-bold mb-4">{servico.nome}</h3>
                <button className="border border-white px-6 py-2 mt-5 text-white hover:bg-white hover:text-black transition">
                  SABER MAIS
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seção Especialistas */}
      <section
        id="especialistas"
        className="w-full py-20 bg-white flex flex-col items-center"
      >
        <h2 className="text-3xl font-bold mb-6">Especialistas</h2>
        <p className="max-w-3xl text-center text-lg">
          Perfil dos especialistas e equipe.
        </p>
      </section>

      {/* Seção Contato */}
      <section
        id="contato"
        className="w-full py-20 bg-[#FBFFF5] flex flex-col items-center"
      >
        <h2 className="text-3xl font-bold mb-6">Contato</h2>
        <p className="max-w-3xl text-center text-lg">
          Informações de contato, formulário ou telefone.
        </p>
      </section>
    </main>
  );
}
