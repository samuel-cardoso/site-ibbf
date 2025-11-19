"use client";

import Navbar from "@/components/home/Navbar";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="font-heading text-6xl md:text-8xl font-bold text-primary mb-6">
            404
          </h1>
          <p className="font-body text-xl md:text-2xl text-foreground/80 mb-8">
            Oops! Essa página não existe.
          </p>
          <p className="font-body text-base text-muted-foreground mb-8">
            A página que você está procurando não foi encontrada ou foi movida.
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-light text-primary-foreground font-body font-semibold"
            asChild
          >
            <a href="/">Voltar para o Início</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
