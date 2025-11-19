import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Função utilitária para fazer scroll suave até um elemento
 * @param href - O href do link (ex: "#sobre")
 * @param offset - Offset adicional em pixels (padrão: 80px para compensar a navbar)
 */
export function smoothScrollTo(href: string, offset: number = 80) {
  const targetId = href.replace("#", "");
  const element = document.getElementById(targetId);
  
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    // Atualiza o hash na URL sem recarregar a página (para o page title funcionar)
    // Usa history.pushState para não disparar scroll adicional
    if (window.history && window.history.pushState) {
      window.history.pushState(null, "", href);
      // Dispara evento hashchange manualmente para atualizar o título
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    }
  }
}
