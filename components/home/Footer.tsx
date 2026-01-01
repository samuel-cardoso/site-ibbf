"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { smoothScrollTo } from "@/lib/utils";
import { TikTokIcon, ThreadsIcon } from "@/lib/consts";

const Footer = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const footerLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Programação", href: "#programacao" },
    { name: "Contato", href: "#contato" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    smoothScrollTo(href); // Usa altura dinâmica do navbar
  };

  return (
    <footer className="bg-foreground text-background py-12 m-0">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">

          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="assets/logo-igreja-branca.png" 
                alt="Logo" 
                className="object-contain w-10"
              />
              <div>
                <h3 className="font-heading text-base md:text-lg font-bold text-background leading-tight">
                  1ª Igreja Batista Bíblica
                </h3>
                <p className="font-heading text-sm md:text-base text-background/80 leading-tight">
                  Fundamentalista de Canoas
                </p>
              </div>
            </div>
            <p className="font-body text-sm text-background/80">
              Uma igreja comprometida com a pregação fiel da Palavra de Deus e a 
              comunhão dos santos.
            </p>
          </div>


          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Links Rápidos</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 font-body text-sm">
              {footerLinks.map((link) => {
                if (isHomePage) {
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="text-background/80 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  );
                }
                return (
                  <Link
                    key={link.name}
                    href={`/${link.href}`}
                    className="text-background/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                );
              })}
              {/* Link Convite na segunda coluna */}
              {isHomePage ? (
                <Link
                  href="/convite"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Convite
                </Link>
              ) : (
                <Link
                  href="/convite"
                  className="text-background/80 hover:text-primary transition-colors"
                >
                  Convite
                </Link>
              )}
              {/* Link LGPD */}
              <Link
                href="/ldpg"
                className="text-background/80 hover:text-primary transition-colors"
              >
                LGPD
              </Link>
              {/* Link No que cremos */}
              <Link
                href="/no-que-cremos"
                className="text-background/80 hover:text-primary transition-colors"
              >
                No que cremos?
              </Link>
              {/* Link Agenda */}
              <Link
                href="/agenda"
                className="text-background/80 hover:text-primary transition-colors"
              >
                Agenda
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Redes Sociais</h4>
            <p className="font-body text-sm text-background/80 mb-4">
              Acompanhe nossas redes sociais e fique por dentro de tudo que acontece!
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61584577330169" 
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
                target="_blank"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/ibbfcanoas" 
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
                target="_blank"
              >
                <Instagram className="h-5 w-5" />
              </a>
              {/* <a 
                href="https://www.youtube.com/@ibbfcanoas" 
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="YouTube"
                target="_blank"
              >
                <Youtube className="h-5 w-5" />
              </a> */}
              {/* <a 
                href="#" 
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a> */}
              {/* <a 
                href="https://www.tiktok.com/@ibbfcanoas" 
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="TikTok"
                target="_blank"
              >
                <TikTokIcon className="h-5 w-5" />
              </a> */}
              {/* <a 
                href="https://www.threads.com/@ibbfcanoas" 
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="Threads"
                target="_blank"
              >
                <ThreadsIcon className="h-5 w-5" />
              </a> */}
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="font-body text-sm text-background/60">
            © {new Date().getFullYear()} 1ª Igreja Batista Bíblica Fundamentalista de Canoas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
