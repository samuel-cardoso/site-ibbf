"use client"

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Cross } from "lucide-react";
import { smoothScrollTo } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Programação", href: "#programacao" },
    { name: "Contato", href: "#contato" },
    { name: "Convite", href: "/convite" }
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    smoothScrollTo(href, 80); // 80px é a altura da navbar (h-20)
    setIsOpen(false); // Fecha o menu mobile se estiver aberto
  };

  const handleLinkClick = (href: string) => {
    setIsOpen(false); // Fecha o menu mobile
  };

  const isRoute = (href: string) => href.startsWith("/");

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <Cross className="h-8 w-8 text-primary" strokeWidth={2.5} />
            <div>
              <h1 className="font-heading text-2xl font-bold text-foreground">
                Igreja Batista
              </h1>
              <p className="text-xs text-muted-foreground font-body">Fundamental</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              if (isRoute(link.href)) {
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className="font-body text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                );
              }
              // Links de seção - se não estiver na home, navega para /#secao
              if (!isHomePage) {
                return (
                  <Link
                    key={link.name}
                    href={`/${link.href}`}
                    onClick={() => handleLinkClick(link.href)}
                    className="font-body text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                );
              }
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="font-body text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                if (isRoute(link.href)) {
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => handleLinkClick(link.href)}
                      className="font-body text-sm font-medium text-foreground hover:text-primary transition-colors px-2 py-2"
                    >
                      {link.name}
                    </Link>
                  );
                }
                // Links de seção - se não estiver na home, navega para /#secao
                if (!isHomePage) {
                  return (
                    <Link
                      key={link.name}
                      href={`/${link.href}`}
                      onClick={() => handleLinkClick(link.href)}
                      className="font-body text-sm font-medium text-foreground hover:text-primary transition-colors px-2 py-2"
                    >
                      {link.name}
                    </Link>
                  );
                }
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="font-body text-sm font-medium text-foreground hover:text-primary transition-colors px-2 py-2"
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
