export default function Header() {
  return (
    <nav className="w-full py-2 fixed top-0 bg-white/70 backdrop-blur-md select-none drag-none z-10 flex justify-between items-center px-4">
      <ul className="mx-auto flex gap-4 text-xl text-black/70">
        <li className="cursor-pointer border-b-2 border-transparent transition-colors delay-75 ease-in-out hover:border-black/70">
          <a href="#home">Pág. Inicial</a>
        </li>
        <li className="cursor-pointer border-b-2 border-transparent transition-colors delay-75 ease-in-out hover:border-black/70">
          <a href="#sobre">Sobre</a>
        </li>
        <li className="cursor-pointer border-b-2 border-transparent transition-colors delay-75 ease-in-out hover:border-black/70">
          <a href="#contato">Contato</a>
        </li>
        <li className="cursor-pointer border-b-2 border-transparent transition-colors delay-75 ease-in-out hover:border-black/70">
          <a href="#membros">Membros</a>
        </li>
      </ul>
    </nav>
  );
}
