"use client"

import { useState, useEffect, useRef } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { smoothScrollTo } from "@/lib/utils";
import { motion } from "motion/react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const t = useTranslations("Navbar");
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const isNavigating = useRef(false);
  const navLockTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) return;
      const currentY = window.scrollY;

      if (isNavigating.current) {
        lastScrollY.current = currentY;
        if (navLockTimer.current) clearTimeout(navLockTimer.current);
        navLockTimer.current = setTimeout(() => {
          isNavigating.current = false;
        }, 300);
        return;
      }

      setHidden(currentY > lastScrollY.current && currentY > 80);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (navLockTimer.current) clearTimeout(navLockTimer.current);
    };
  }, []);

  const navLinks = [
    { name: t("home"), href: "#inicio" },
    { name: t("about"), href: "#sobre" },
    { name: t("schedule"), href: "#programacao" },
    { name: t("contact"), href: "#contato" },
    { name: t("believe"), href: "/no-que-cremos" },
    { name: t("agenda"), href: "/agenda" },
    { name: t("invite"), href: "/convite" }
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setHidden(false);
    isNavigating.current = true;
    smoothScrollTo(href);
    setIsOpen(false);
  };

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    setHidden(false);
    isNavigating.current = true;
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
              src="/assets/logo-igreja.png"
              alt="Logo"
              className="object-contain w-14 dark:hidden"
            />
            <img
              src="/assets/logo-igreja-branca.png"
              alt="Logo"
              className="object-contain w-14 hidden dark:block"
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

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => {
              const isActive = isRoute(link.href) && pathname === link.href;
              const activeClass = isActive
                ? "text-primary border-b-2 border-primary pb-0.5"
                : "text-foreground hover:text-primary";
              const separator = index === 4;

              const element = (() => {
                if (isRoute(link.href)) {
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => handleLinkClick(link.href)}
                      className={`font-body text-sm font-medium transition-colors ${activeClass}`}
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
              })();

              return (
                <div key={link.name} className="flex items-center gap-6">
                  {separator && <span className="h-4 w-px bg-border" />}
                  {element}
                </div>
              );
            })}
            <span className="h-4 w-px bg-border" />
            <LanguageSwitcher />
            <ThemeToggle />
            <Button
              asChild
              size="sm"
              className="font-body font-semibold"
            >
              <Link href="/entrar" onClick={() => handleLinkClick("/entrar")}>
                {t("enter")}
              </Link>
            </Button>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link, index) => {
                const isActive = isRoute(link.href) && pathname === link.href;
                const baseClass = "font-body text-sm font-medium transition-colors px-2 py-2 rounded";
                const activeClass = isActive
                  ? "text-primary font-semibold bg-primary/5"
                  : "text-foreground hover:text-primary hover:bg-primary/5";

                if (index === 4) {
                  return (
                    <div key={link.name}>
                      <div className="border-t border-border my-2" />
                      <Link
                        href={link.href}
                        onClick={() => handleLinkClick(link.href)}
                        className={`${baseClass} ${activeClass} block`}
                      >
                        {link.name}
                      </Link>
                    </div>
                  );
                }

                if (isRoute(link.href)) {
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => handleLinkClick(link.href)}
                      className={`${baseClass} ${activeClass} block`}
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
                      className={`${baseClass} text-foreground hover:text-primary hover:bg-primary/5 block`}
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
                    className={`${baseClass} text-foreground hover:text-primary hover:bg-primary/5 block`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="border-t border-border mt-2 pt-3 flex items-center gap-2">
                <LanguageSwitcher />
                <ThemeToggle />
                <Button
                  asChild
                  size="sm"
                  className="font-body font-semibold ml-auto"
                >
                  <Link href="/entrar" onClick={() => handleLinkClick("/entrar")}>
                    {t("enter")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
