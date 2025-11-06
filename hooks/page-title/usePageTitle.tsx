"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const DEFAULT_TITLE = "1ª Igreja Batista Bíblica Fundamentalista de Canoas";

export function usePageTitle() {
  const pathname = usePathname();
  const [hash, setHash] = useState<string>("");

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

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const getPageTitle = (path: string, currentHash: string) => {
    if (currentHash) {
      const hashMap: Record<string, string> = {
        "#inicio": "Início | " + DEFAULT_TITLE,
        "#sobre": "Sobre | " + DEFAULT_TITLE,
        "#programacao": "Programação | " + DEFAULT_TITLE,
        "#contato": "Contato | " + DEFAULT_TITLE,
      };

      return hashMap[currentHash] || DEFAULT_TITLE;
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

  return getPageTitle(pathname, hash);
}