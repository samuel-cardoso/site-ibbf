"use client"

import { useState } from "react";
import { Menu, X, Cross, Lock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Programação", href: "#programacao" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Cross className="h-8 w-8 text-primary" strokeWidth={2.5} />
            <div>
              <h1 className="font-heading text-2xl font-bold text-foreground">
                Igreja Batista
              </h1>
              <p className="text-xs text-muted-foreground font-body">Fundamental</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-body text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="default" 
                  size="sm"
                  className="font-body font-semibold"
                >
                  <Lock className="h-4 w-4 mr-2" />
                  Entrar
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader className="text-center">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-primary via-primary-light to-primary flex items-center justify-center animate-pulse">
                    <Sparkles className="h-8 w-8 text-primary-foreground animate-fade-in" />
                  </div>
                  <DialogTitle className="text-2xl font-heading">Em Breve</DialogTitle>
                  <DialogDescription className="text-base pt-2 font-body">
                    Estamos preparando algo especial para você! O sistema de login estará disponível em breve.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex items-center justify-center pt-4">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="h-2 w-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="h-2 w-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-body text-sm font-medium text-foreground hover:text-primary transition-colors px-2 py-2"
                >
                  {link.name}
                </a>
              ))}
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="default" 
                    size="sm"
                    className="font-body font-semibold w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    <Lock className="h-4 w-4 mr-2" />
                    Entrar
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader className="text-center">
                    <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-primary via-primary-light to-primary flex items-center justify-center animate-pulse">
                      <Sparkles className="h-8 w-8 text-primary-foreground animate-fade-in" />
                    </div>
                    <DialogTitle className="text-2xl font-heading">Em Breve</DialogTitle>
                    <DialogDescription className="text-base pt-2 font-body">
                      Estamos preparando algo especial para você! O sistema de login estará disponível em breve.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex items-center justify-center pt-4">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="h-2 w-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="h-2 w-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
