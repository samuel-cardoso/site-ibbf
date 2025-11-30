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
      <style dangerouslySetInnerHTML={{__html: `
        .hero-image-responsive {
          left: 55%;
          top: 50%;
          transform: translate(-50%, -50%) scale(1.4);
          object-position: 50% 40%;
        }

        @media (min-width: 768px) {
          .hero-image-responsive {
            left: 51.3%;
            transform: translate(-50%, -50%) translateX(0%) rotate(0.1deg) scale(1.1);
            object-position: 50% 25%;
          }
        }
        .hero-overlay {
          background: rgba(0, 0, 0, 0.8);
        }
        @media (min-width: 768px) {
          .hero-overlay {
            background: rgba(0, 0, 0, 0.7);
          }
        }
      `}} />
      <div className="absolute w-full h-full overflow-hidden object-fill">
        <img 
          src="/assets/hero-church.jpg"
          alt="Interior da igreja"
          className="hero-image-responsive absolute w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      <div className="relative z-10 text-center px-5 sm:px-6 max-w-5xl mx-auto w-full py-8 sm:py-0">
        <div className="mb-5 sm:mb-6 md:mb-4">
          <p className="font-heading text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-primary-foreground/98 mb-3 sm:mb-3 md:mb-4 tracking-wide">
            <span className="relative inline-block">
              Bem-vindo à
            </span>
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight px-2 sm:px-2">
            <span className="block">1ª Igreja Batista Bíblica</span>
            <span className="block mt-2 sm:mt-0">Fundamentalista de Canoas</span>
          </h1>
        </div>
        <p className="font-body text-lg sm:text-xl md:text-xl lg:text-2xl text-primary-foreground/95 mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-2 leading-relaxed">
          Junte-se a nós em nossa jornada de fé, tradição e comunhão
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-0">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-light text-primary-foreground font-body font-semibold text-base sm:text-lg h-12 sm:h-12 w-full sm:w-auto min-w-[200px] shadow-lg"
            asChild
          >
            <a href="#sobre" onClick={(e) => handleSmoothScroll(e, "#sobre")}>Conheça-nos</a>
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-primary-foreground hover:bg-primary-foreground hover:text-foreground font-body font-semibold text-base sm:text-lg h-12 sm:h-12 w-full sm:w-auto min-w-[200px] bg-white/95 sm:bg-background shadow-lg"
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
