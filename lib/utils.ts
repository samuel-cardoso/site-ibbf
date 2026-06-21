import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const NAVBAR_HEIGHT = 100;

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

export function smoothScrollTo(href: string, offset?: number) {
  const targetId = href.replace("#", "");
  const element = document.getElementById(targetId);

  if (element) {
    requestAnimationFrame(() => {
      const scrollOffset = offset ?? getNavbarHeight();
      const currentScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      const elementRect = element.getBoundingClientRect();
      const elementPosition = elementRect.top;
      const elementAbsolutePosition = elementPosition + currentScrollY;
      const targetPosition = elementAbsolutePosition - scrollOffset;

      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: "smooth"
      });

      if (window.history && window.history.pushState) {
        window.history.pushState(null, "", href);
        window.dispatchEvent(new HashChangeEvent("hashchange"));
      }
    });
  }
}

export function maskPhone(value: string): string {
  const numbers = value.replace(/\D/g, "");

  if (numbers.length <= 2) {
    return numbers;
  } else if (numbers.length <= 6) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
  } else if (numbers.length <= 10) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
  } else {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  }
}

export function unmaskPhone(value: string): string {
  return value.replace(/\D/g, "");
}
