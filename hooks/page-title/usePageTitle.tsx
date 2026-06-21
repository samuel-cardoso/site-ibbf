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

    updateHash();
    setVisibleSection("");

    const handleHashChange = () => {
      updateHash();
    };

    let observer: IntersectionObserver | null = null;
    let handleScroll: (() => void) | null = null;

    if (pathname === "/") {
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

      checkVisibleSection();

      const setupObserver = () => {
        const observerOptions = {
          root: null,
          rootMargin: `-${100}px 0px -50% 0px`,
          threshold: [0, 0.1, 0.3, 0.5, 1],
        };

        const visibleSections: Map<string, number> = new Map();

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
          entries.forEach((entry) => {
            const id = entry.target.id;
            if (!id) return;

            if (entry.isIntersecting) {
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

          if (visibleSections.size > 0) {
            const mostVisible = Array.from(visibleSections.entries()).sort(
              (a, b) => b[1] - a[1]
            )[0];
            setVisibleSection(mostVisible[0]);
          }
        };

        observer = new IntersectionObserver(observerCallback, observerOptions);

        const sections = ["inicio", "sobre", "programacao", "contato"];
        sections.forEach((sectionId) => {
          const element = document.getElementById(sectionId);
          if (element) {
            observer!.observe(element);
          }
        });
      };

      requestAnimationFrame(() => {
        setTimeout(() => {
          setupObserver();
          checkVisibleSection();
        }, 100);
      });

      handleScroll = () => {
        checkVisibleSection();
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    window.addEventListener("hashchange", handleHashChange);
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

    if (currentHash && hashMap[currentHash]) {
      return hashMap[currentHash];
    }

    if (path === "/" && currentVisibleSection && hashMap[currentVisibleSection]) {
      return hashMap[currentVisibleSection];
    }

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
