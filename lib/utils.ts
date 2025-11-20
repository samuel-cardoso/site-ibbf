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
