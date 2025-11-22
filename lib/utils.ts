import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Altura padrão da navbar (fallback caso não seja possível calcular dinamicamente)
export const NAVBAR_HEIGHT = 100;

/**
 * Calcula a altura real do navbar dinamicamente
 * @returns Altura do navbar em pixels
 */
export function getNavbarHeight(): number {
  if (typeof window === "undefined") {
    return NAVBAR_HEIGHT;
  }
  
  const navbar = document.querySelector("nav");
  if (navbar) {
    return navbar.offsetHeight;
  }
  
  return NAVBAR_HEIGHT;
}

/**
 * Função utilitária para fazer scroll suave até um elemento
 * @param href - O href do link (ex: "#sobre")
 * @param offset - Offset adicional em pixels (padrão: altura dinâmica do navbar)
 */
export function smoothScrollTo(href: string, offset?: number) {
  const targetId = href.replace("#", "");
  const element = document.getElementById(targetId);
  
  if (element) {
    // Pequeno delay para garantir que o layout está estável (especialmente importante no mobile)
    requestAnimationFrame(() => {
      // Usa offset fornecido ou calcula dinamicamente a altura do navbar
      const scrollOffset = offset ?? getNavbarHeight();
      
      // Obtém a posição atual do scroll (compatível com mobile)
      const currentScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      
      // Obtém a posição do elemento relativa ao viewport
      const elementRect = element.getBoundingClientRect();
      const elementPosition = elementRect.top;
      
      // Calcula a posição absoluta do elemento no documento
      const elementAbsolutePosition = elementPosition + currentScrollY;
      
      // Calcula a posição final considerando o offset do navbar
      const targetPosition = elementAbsolutePosition - scrollOffset;

      // Usa scrollTo com comportamento suave
      window.scrollTo({
        top: Math.max(0, targetPosition), // Garante que não seja negativo
        behavior: "smooth"
      });

      // Atualiza o hash na URL sem recarregar a página (para o page title funcionar)
      // Usa history.pushState para não disparar scroll adicional
      if (window.history && window.history.pushState) {
        window.history.pushState(null, "", href);
        // Dispara evento hashchange manualmente para atualizar o título
        window.dispatchEvent(new HashChangeEvent("hashchange"));
      }
    });
  }
}

/**
 * Aplica máscara de telefone/WhatsApp no formato (00) 00000-0000 ou (00) 0000-0000
 * @param value - Valor a ser mascarado
 * @returns Valor com máscara aplicada
 */
export function maskPhone(value: string): string {
  // Remove tudo que não é número
  const numbers = value.replace(/\D/g, "");
  
  // Aplica a máscara conforme o tamanho
  if (numbers.length <= 2) {
    return numbers;
  } else if (numbers.length <= 6) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
  } else if (numbers.length <= 10) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
  } else {
    // Para números com 11 dígitos (celular com 9)
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  }
}

/**
 * Remove máscara de telefone, retornando apenas números
 * @param value - Valor com máscara
 * @returns Apenas números
 */
export function unmaskPhone(value: string): string {
  return value.replace(/\D/g, "");
}
