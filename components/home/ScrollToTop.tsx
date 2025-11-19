"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Observa a seção Hero para detectar quando sair dela
    const heroSection = document.getElementById("inicio");
    
    if (!heroSection) return;

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Quando menos de 10% da seção estiver visível
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // Se a seção Hero não estiver visível, mostra o botão
        setIsVisible(!entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(heroSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    
    // Atualiza o hash na URL para o topo
    if (window.history && window.history.pushState) {
      window.history.pushState(null, "", "#inicio");
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    }
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full bg-primary hover:bg-primary-light text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Voltar ao topo"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
};

export default ScrollToTop;

