"use client"

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { smoothScrollTo } from "@/lib/utils";
import { motion } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) return;
      const currentY = window.scrollY;
      setHidden(currentY > lastScrollY.current && currentY > 80);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Programação", href: "#programacao" },
    { name: "Contato", href: "#contato" },
    { name: "No que cremos?", href: "/no-que-cremos" },
    { name: "Agenda", href: "/agenda" },
    { name: "Convite", href: "/convite" }
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    smoothScrollTo(href);
    setIsOpen(false);
  };

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
  };

  const isRoute = (href: string) => href.startsWith("/");

  return (
    <motion.nav
      className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border"
      animate={{ y: hidden ? "-100%" : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between ">

          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity group">
            <img
              src="assets/logo-igreja.png"
              alt="Logo"
              className="object-contain w-14"
            />
            <div>
              <h1 className="font-heading text-sm md:text-base lg:text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                1ª Igreja Batista Bíblica
              </h1>
              <p className="font-heading text-ms md:text-lg text-muted-foreground leading-tight">
                Fundamentalista de Canoas
              </p>
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
    </motion.nav>
  );
};

export default Navbar;
