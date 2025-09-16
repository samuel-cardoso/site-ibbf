"use client";
import { useState } from "react";
export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <header className="bg-black/10 w-full shadow-sm select-none drag-none">
        <nav className="w-full container mx-auto gap-5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              draggable="false"
              src="/icon.svg"
              alt="Logo"
              className="w-36"
            />
            <h1 className="text-center font-bold text-3xl tracking-wider text-black/70 break-words">
              Igreja Batista <br />
              Bíblica de Canoas
            </h1>
          </div>

          <ul className="hidden md:flex gap-4 text-xl text-black/70">
            <li className="cursor-pointer border-b-2 border-transparent transition-colors delay-75 ease-in-out hover:border-black/70">
              Home
            </li>
            <li className="cursor-pointer border-b-2 border-transparent transition-colors delay-75 ease-in-out hover:border-black/70">
              Sobre
            </li>
            <li className="cursor-pointer border-b-2 border-transparent transition-colors delay-75 ease-in-out hover:border-black/70">
              Contato
            </li>
            <li className="cursor-pointer border-b-2 border-transparent transition-colors delay-75 ease-in-out hover:border-black/70">
              Membros
            </li>
          </ul>

          <button
            className="md:hidden p-2"
            onClick={() => setSidebarOpen(true)}
            aria-label="Abrir menu"
          >
            <img draggable="false" src="/menu.svg" className="w-12 h-12 cursor-pointer hover:scale-110 transition"/>
          </button>
        </nav>
      </header>

      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex">
          <aside className="bg-white w-64 p-6 flex flex-col gap-4">
            <button
              className="self-end mb-4 cursor-pointer hover:scale-125 transition"
              onClick={() => setSidebarOpen(false)}
              aria-label="Fechar menu"
            >
              X
            </button>
            <ul className="flex flex-col gap-4 text-xl text-black/70">
              <li className="cursor-pointer border-b-2 border-transparent transition-colors delay-75 ease-in-out hover:border-black/70">
                Home
              </li>
              <li className="cursor-pointer border-b-2 border-transparent transition-colors delay-75 ease-in-out hover:border-black/70">
                Sobre
              </li>
              <li className="cursor-pointer border-b-2 border-transparent transition-colors delay-75 ease-in-out hover:border-black/70">
                Contato
              </li>
              <li className="cursor-pointer border-b-2 border-transparent transition-colors delay-75 ease-in-out hover:border-black/70">
                Membros
              </li>
            </ul>
          </aside>

          <div className="flex-1" onClick={() => setSidebarOpen(false)} />
        </div>
      )}
    </>
  );
}
