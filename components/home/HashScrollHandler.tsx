"use client"

import { useEffect } from "react";
import { smoothScrollTo } from "@/lib/utils";

/**
 * Componente que faz scroll para a seção quando a página carrega com hash na URL
 * Exemplo: /#sobre -> faz scroll para a seção #sobre
 */
export default function HashScrollHandler() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const hash = window.location.hash;
    if (!hash) return;

    // Função para fazer o scroll após garantir que tudo está carregado
    const performScroll = () => {
      // Aguarda múltiplos frames para garantir que o layout está estável
      // Isso é especialmente importante no mobile onde o layout pode mudar após o carregamento
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const element = document.getElementById(hash.replace("#", ""));
          if (element) {
            smoothScrollTo(hash);
          } else {
            // Se o elemento ainda não existe, tenta novamente após um delay maior
            setTimeout(() => {
              smoothScrollTo(hash);
            }, 300);
          }
        });
      });
    };

    // Se a página já está carregada, faz o scroll imediatamente
    if (document.readyState === "complete") {
      performScroll();
    } else {
      // Aguarda o carregamento completo da página
      window.addEventListener("load", performScroll, { once: true });
      
      // Também tenta após um timeout como fallback
      const timer = setTimeout(performScroll, 500);

      return () => {
        clearTimeout(timer);
        window.removeEventListener("load", performScroll);
      };
    }
  }, []);

  return null;
}

