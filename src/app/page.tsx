"use client";
import Image from "next/image";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link"; // <-- Import necessário

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
    { nome: "FISIOTERAPIA", img: "/fisioterapia.jpg", id: "fisio" },
    { nome: "PODOLOGIA", img: "/podologia.jpg", id: "Podologia" },
    { nome: "ESTÉTICA", img: "/estetica.jpg", id: "Estetica" },
    { nome: "PILATES", img: "/pilates.jpg", id: "Pilates" },
    { nome: "NEW SEITAI JAPONESA", img: "/seitai.jpg", id: "Seitai" },
    { nome: "LIBERAÇÃO MIOFACIAL", img: "/liberacao.jpg", id: "LibMioface" },
    { nome: "ACUPUNTURA", img: "/acupuntura.jpg", id: "Acupuntura" },
    { nome: "LOW PRESSURE FITNESS", img: "/lpf.png", id: "LPF" },
    { nome: "VENTOSATERAPIA", img: "/nuva-60.jpg", id: "Ventosa" },
    { nome: "AURICULOTERAPIA", img: "/nuva-62.jpg", id: "Auriculoterapia" },
  ];

  const especialistas = [
    { nome: "Samara", especialidade: "Fisioterapeuta", foto: "/samaraFisio.JPG" },
    { nome: "Andressa", especialidade: "Fisioterapeuta", foto: "/andressaFisio.JPG" },
    { nome: "Cleiton", especialidade: "Fisioterapeuta", foto: "/cleitonFisio.jpg" },
    { nome: "Sirleide", especialidade: "Podóloga", foto: "/sirleidePodologa.JPG" },
    { nome: "Rodrigo", especialidade: "Fisioterapeuta", foto: "/rodrigoFisio.JPG" },
    { nome: "Ruth", especialidade: "Fisioterapeuta", foto: "/ruthFisio.JPG" },
    { nome: "Solange", especialidade: "Esteticista", foto: "/solangeEsteticista.JPG" },
  ];

  return (
    <main className="flex flex-col">

      {/* Seção Home */}
      <section id="home" className="relative w-full h-screen flex items-center justify-center">
        <Image src="/fundo.jpg" alt="Fundo" fill className="object-cover" />
        <div className="absolute inset-0 bg-white/80 sm:bg-white/70 md:bg-white/60 lg:bg-white/50"></div>
        <div className="absolute flex flex-col items-center mt-40 text-center text-black px-4">
          <Image src="/logo.png" alt="Logo Nuva" width={620} height={620} />
          <h1 className="text-4xl md:text-4xl font-bold mt-16">
            Onde o corpo respira e a mente se renova.
          </h1>
          <p className="text-xl md:text-2xl mt-10 max-full">
            Fisioterapia, pilates e bem-estar em um espaço pensado para você.
          </p>
          <a
            href="https://wa.me/5548996513245?text=Olá,%20quero%20agendar%20meu%20horário!"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 px-12 py-5 border-2 border-[#1F526F] text-[#1F526F] font-semibold rounded hover:bg-[#1F526F] hover:text-white transition text-3xl"
          >
            Agende seu horário
          </a>
        </div>
      </section>

      {/* Seção Sobre Nós */}
      <section id="sobre-nos" className="w-full py-35 bg-white flex flex-col items-start px-6">
        <div className="w-full flex items-center mb-8">
          <h2 className="text-3xl font-bold text-[#5373A9] mr-4 whitespace-nowrap">SOBRE NÓS</h2>
          <div className="flex-1 h-1 bg-[#D9D9D9]"></div>
        </div>
        <p className="text-black text-3xl ml-10 max-full mt-12 mb-12">
          A Nuva é mais do que uma clínica de fisioterapia. É um espaço de cuidado,
          movimento e presença, onde cada pessoa é recebida com atenção verdadeira.
          <br />
          Criada por fisioterapeutas apaixonadas pelo que fazem, a Nuva acredita que
          o bem-estar não se impõe, se cultiva.
          <br />
          Aqui, cada corpo se reconecta com sua leveza, reencontra seu ritmo e se
          transforma de forma suave, contínua.
        </p>

        {/* Galeria Horizontal */}
        <div className="relative w-full flex items-center">
          <button
            onClick={scrollLeft}
            className="absolute left-0 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            <FaChevronLeft size={28} />
          </button>
          <div ref={scrollRef} className="w-full overflow-x-auto flex space-x-4 scroll-smooth py-4">
            {[16, 17, 22, 24, 37, 39, 45, 47, 51, 53, 55].map((num) => (
              <div key={num} className="flex-shrink-0 w-[280px] h-[180px] rounded-xl overflow-hidden shadow-lg">
                <Image src={`/nuva-${num}.jpg`} alt={`Nuva ${num}`} width={280} height={180} className="object-cover w-full h-full" />
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
      <section id="servicos" className="w-full py-35 bg-white flex flex-col items-start px-6">
        <div className="w-full flex items-center mt-9 mb-8">
          <h2 className="text-3xl font-bold text-[#5373A9] mr-4 whitespace-nowrap">SERVIÇOS</h2>
          <div className="flex-1 h-1 bg-[#D9D9D9]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12 justify-items-center w-full">
          {servicos.map((servico) => (
            <div
              key={servico.nome}
              className="relative w-full max-w-[440px] h-[500px] overflow-hidden group shadow-lg rounded-2xl"
            >
              <Image
                src={servico.img}
                alt={servico.nome}
                fill
                sizes="(max-width: 768px) 100vw, 440px"
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                <h3 className="text-2xl font-bold mb-4">{servico.nome}</h3>
                <Link
                  href={`/${servico.id}`} // Navega para a página do serviço
                  className="border border-white px-6 py-2 mt-5 text-white hover:bg-white hover:text-black transition"
                >
                  SABER MAIS
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seção Especialistas */}
      <section id="especialistas" className="w-full bg-white flex flex-col items-center px-6">
        <div className="w-full flex items-center mt-32 mb-8">
          <h2 className="text-3xl font-bold text-[#5373A9] mr-4 whitespace-nowrap">ESPECIALISTAS</h2>
          <div className="flex-1 h-1 bg-[#D9D9D9]"></div>
        </div>

        <div className="w-full bg-[#1F526F] py-12 flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center w-full max-w-40xl px-6">
            {especialistas.map((esp) => (
              <div
                key={esp.nome}
                className="bg-white rounded-2xl shadow-lg flex flex-col items-center p-4 w-full max-w-[280px] h-[400px]"
              >
                <div className="w-45 h-70 relative mb-4 rounded-t-2xl overflow-hidden">
                  <Image src={esp.foto} alt={esp.nome} fill className="object-cover" />
                </div>
                <div className="flex flex-col items-center justify-center mt-auto">
                  <h3 className="text-2xl font-bold text-black text-center">{esp.nome}</h3>
                  <p className="text-black text-xl text-center">{esp.especialidade}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
