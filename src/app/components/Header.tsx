import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#FBFFF5] fixed top-0 w-full z-50 py-4 px-6 flex items-center shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/icone.png" alt="Logo Nuva" width={60} height={60} />
      </div>

      {/* Espaçamento entre logo e links */}
      <nav className="flex flex-1 justify-evenly font-outfit text-black text-2xl ml-4">
        <nav className="flex flex-1 justify-evenly font-outfit text-black text-2xl ml-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#sobre-nos" className="hover:underline">Sobre Nós</a>
          <a href="#servicos" className="hover:underline">Serviços</a>
          <a href="#especialistas" className="hover:underline">Especialistas</a>
          <a href="#contato" className="hover:underline">Contato</a>
        </nav>

      </nav>
    </header>
  );
}
