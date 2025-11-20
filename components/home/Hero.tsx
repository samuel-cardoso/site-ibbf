"use client";

import { Button } from "@/components/ui/button";
import { smoothScrollTo } from "@/lib/utils";

const Hero = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    smoothScrollTo(href); // Usa altura dinâmica do navbar
  };
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center m-0">

      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/hero-church.jpg')" }}
      >
        <div className="absolute inset-0 bg-hero-overlay/70" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
          Bem-vindo à Igreja Batista Fundamental
        </h1>
        <p className="font-body text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Junte-se a nós em nossa jornada de fé, tradição e comunhão
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-light text-primary-foreground font-body font-semibold"
            asChild
          >
            <a href="#sobre" onClick={(e) => handleSmoothScroll(e, "#sobre")}>Conheça-nos</a>
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-primary-foreground hover:bg-primary-foreground hover:text-foreground font-body font-semibold"
            asChild
          >
            <a href="#contato" onClick={(e) => handleSmoothScroll(e, "#contato")}>Fale Conosco</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
