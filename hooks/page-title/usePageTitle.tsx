"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const DEFAULT_TITLE = "1ª Igreja Batista Bíblica Fundamentalista de Canoas";

interface VisibleSection {
  id: string;
  ratio: number;
}

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

    const updateHash = () => {
      const currentHash = getHash();
      setHash(currentHash);
    };

    // Atualiza o hash inicial
    updateHash();
    setVisibleSection(""); // Reset quando mudar de página

    const handleHashChange = () => {
      updateHash();
    };

    // Detecta qual seção está visível usando Intersection Observer
    let observer: IntersectionObserver | null = null;
    let handleScroll: (() => void) | null = null;

    if (pathname === "/") {
      // Função para verificar qual seção está mais visível no viewport
      const checkVisibleSection = () => {
        const sections = ["inicio", "sobre", "programacao", "contato"];
        const viewportHeight = window.innerHeight;
        const navbarHeight = 100;
        let mostVisible: VisibleSection | null = null;

        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (!element) continue;

          const rect = element.getBoundingClientRect();
          const visibleTop = Math.max(rect.top, navbarHeight);
          const visibleBottom = Math.min(rect.bottom, viewportHeight);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          const ratio = visibleHeight / rect.height;

          if (ratio > 0.3) {
            if (!mostVisible || ratio > mostVisible.ratio) {
              mostVisible = { id: sectionId, ratio };
            }
          }
        }

        if (mostVisible !== null) {
          setVisibleSection(`#${mostVisible.id}`);
        }
      };

      // Verifica imediatamente
      checkVisibleSection();

      // Aguarda um pouco para garantir que os elementos estejam no DOM
      const setupObserver = () => {
        const observerOptions = {
          root: null,
          rootMargin: `-${100}px 0px -50% 0px`, // Considera a navbar fixa
          threshold: [0, 0.1, 0.3, 0.5, 1],
        };

        const visibleSections: Map<string, number> = new Map();

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
          entries.forEach((entry) => {
            const id = entry.target.id;
            if (!id) return;

            if (entry.isIntersecting) {
              // Calcula a porcentagem visível
              const rect = entry.boundingClientRect;
              const viewportHeight = window.innerHeight;
              const navbarHeight = 100;
              const visibleTop = Math.max(rect.top, navbarHeight);
              const visibleBottom = Math.min(rect.bottom, viewportHeight);
              const visibleHeight = Math.max(0, visibleBottom - visibleTop);
              const visibleRatio = visibleHeight / rect.height;
              
              if (visibleRatio > 0.3) {
                visibleSections.set(`#${id}`, visibleRatio);
              }
            } else {
              visibleSections.delete(`#${id}`);
            }
          });

          // Encontra a seção mais visível
          if (visibleSections.size > 0) {
            const mostVisible = Array.from(visibleSections.entries()).sort(
              (a, b) => b[1] - a[1]
            )[0];
            setVisibleSection(mostVisible[0]);
          }
        };

        observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observa todas as seções principais
        const sections = ["inicio", "sobre", "programacao", "contato"];
        sections.forEach((sectionId) => {
          const element = document.getElementById(sectionId);
          if (element) {
            observer!.observe(element);
          }
        });
      };

      // Aguarda o próximo frame para garantir que o DOM está pronto
      requestAnimationFrame(() => {
        setTimeout(() => {
          setupObserver();
          checkVisibleSection(); // Verifica novamente após setup
        }, 100);
      });

      // Também verifica no scroll
      handleScroll = () => {
        checkVisibleSection();
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    window.addEventListener("hashchange", handleHashChange);
    // Também escuta mudanças no scroll para atualizar o hash
    window.addEventListener("scroll", handleHashChange, { passive: true });

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleHashChange);
      if (handleScroll) {
        window.removeEventListener("scroll", handleScroll);
      }
      if (observer) {
        observer.disconnect();
      }
    };
  }, [pathname]);

  const getPageTitle = (path: string, currentHash: string, currentVisibleSection: string) => {
    const hashMap: Record<string, string> = {
      "#inicio": "Início | " + DEFAULT_TITLE,
      "#sobre": "Sobre | " + DEFAULT_TITLE,
      "#programacao": "Programação | " + DEFAULT_TITLE,
      "#contato": "Contato | " + DEFAULT_TITLE
    };

    // Prioriza o hash da URL se existir
    if (currentHash && hashMap[currentHash]) {
      return hashMap[currentHash];
    }

    // Se não houver hash, usa a seção visível (apenas na home page)
    if (path === "/" && currentVisibleSection && hashMap[currentVisibleSection]) {
      return hashMap[currentVisibleSection];
    }

    // Quando houver novas páginas nesta aplicação, será necessário alterar as informações abaixo para que fiquem de acordo com as atualizações.
    const titleMap: Record<string, string> = {
      "/": "Início | " + DEFAULT_TITLE,
      "/sobre": "Sobre | " + DEFAULT_TITLE,
      "/programacao": "Programação | " + DEFAULT_TITLE,
      "/contato": "Contato | " + DEFAULT_TITLE,
      "/convite": "Convite | " + DEFAULT_TITLE,
      "/no-que-cremos": "No que cremos? | " + DEFAULT_TITLE,
    };

    return titleMap[path] || DEFAULT_TITLE;
  };

  return getPageTitle(pathname, hash, visibleSection);
}