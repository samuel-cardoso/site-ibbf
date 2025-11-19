"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const DEFAULT_TITLE = "1ª Igreja Batista Bíblica Fundamentalista de Canoas";

export function usePageTitle() {
  const pathname = usePathname();
  const [hash, setHash] = useState<string>("");
  const [visibleSection, setVisibleSection] = useState<string>("");

  useEffect(() => {
    const getHash = () => {
      if (typeof window !== "undefined") {
        return window.location.hash || "";
      }
      return "";
    };

    setHash(getHash());

    const handleHashChange = () => {
      const currentHash = getHash();
      setHash(currentHash);
    };

    // Detecta qual seção está visível usando Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -50% 0px", // Considera a navbar fixa
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id) {
            setVisibleSection(`#${id}`);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observa todas as seções principais
    const sections = ["inicio", "sobre", "programacao", "contato"];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    window.addEventListener("hashchange", handleHashChange);
    // Também escuta mudanças no scroll para detectar seções visíveis
    window.addEventListener("scroll", handleHashChange, { passive: true });

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleHashChange);
      observer.disconnect();
    };
  }, []);

  const getPageTitle = (path: string, currentHash: string, currentVisibleSection: string) => {
    // Prioriza o hash da URL, depois a seção visível, depois o path
    const activeHash = currentHash || currentVisibleSection;

    if (activeHash) {
      const hashMap: Record<string, string> = {
        "#inicio": "Início | " + DEFAULT_TITLE,
        "#sobre": "Sobre | " + DEFAULT_TITLE,
        "#programacao": "Programação | " + DEFAULT_TITLE,
        "#contato": "Contato | " + DEFAULT_TITLE,
      };

      return hashMap[activeHash] || DEFAULT_TITLE;
    }

    // Quando houver novas páginas nesta aplicação, será necessário alterar as informações abaixo para que fiquem de acordo com as atualizações.
    const titleMap: Record<string, string> = {
      "/": "Início | " + DEFAULT_TITLE,
      "/sobre": "Sobre | " + DEFAULT_TITLE,
      "/programacao": "Programação | " + DEFAULT_TITLE,
      "/contato": "Contato | " + DEFAULT_TITLE,
    };

    return titleMap[path] || DEFAULT_TITLE;
  };

  return getPageTitle(pathname, hash, visibleSection);
}