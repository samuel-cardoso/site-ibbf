"use client"

import { useEffect } from "react";
import { smoothScrollTo } from "@/lib/utils";

/**
 * Componente que faz scroll para a seção quando a página carrega com hash na URL
 * Exemplo: /#sobre -> faz scroll para a seção #sobre
 */
export default function HashScrollHandler() {
  useEffect(() => {
    // Aguarda um pouco para garantir que o DOM está totalmente carregado
    const timer = setTimeout(() => {
      if (typeof window !== "undefined") {
        const hash = window.location.hash;
        if (hash) {
          // Faz scroll para a seção
          smoothScrollTo(hash, 80);
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return null;
}

