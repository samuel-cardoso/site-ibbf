"use client"

import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { smoothScrollTo } from "@/lib/utils";
import { TikTokIcon, ThreadsIcon } from "@/lib/consts";

const Footer = () => {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Navbar");
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const footerLinks = [
    { name: tNav("home"), href: "#inicio" },
    { name: tNav("about"), href: "#sobre" },
    { name: tNav("schedule"), href: "#programacao" },
    { name: tNav("contact"), href: "#contato" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    smoothScrollTo(href);
  };

  return (
    <footer className="bg-footer text-footer-foreground py-12 m-0">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">

          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/assets/logo-igreja-branca.png"
                alt="Logo"
                className="object-contain w-10"
              />
              <div>
                <h3 className="font-heading text-base md:text-lg font-bold text-footer-foreground leading-tight">
                  1ª Igreja Batista Bíblica
                </h3>
                <p className="font-heading text-sm md:text-base text-footer-foreground/80 leading-tight">
                  Fundamentalista de Canoas
                </p>
              </div>
            </div>
            <p className="font-body text-sm text-footer-foreground/80">
              {t("blurb")}
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">{t("quickLinks")}</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 font-body text-sm">
              {footerLinks.map((link) => {
                if (isHomePage) {
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="text-footer-foreground/80 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  );
                }
                return (
                  <Link
                    key={link.name}
                    href={`/${link.href}`}
                    className="text-footer-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                href="/convite"
                className="text-footer-foreground/80 hover:text-primary transition-colors"
              >
                {tNav("invite")}
              </Link>
              <Link
                href="/ldpg"
                className="text-footer-foreground/80 hover:text-primary transition-colors"
              >
                {t("lgpd")}
              </Link>
              <Link
                href="/no-que-cremos"
                className="text-footer-foreground/80 hover:text-primary transition-colors"
              >
                {tNav("believe")}
              </Link>
              <Link
                href="/agenda"
                className="text-footer-foreground/80 hover:text-primary transition-colors"
              >
                {tNav("agenda")}
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">{t("socialMedia")}</h4>
            <p className="font-body text-sm text-footer-foreground/80 mb-4">
              {t("socialMediaText")}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61584577330169"
                className="w-10 h-10 bg-footer-foreground/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
                target="_blank"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/ibbfcanoas"
                className="w-10 h-10 bg-footer-foreground/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
                target="_blank"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@ibbfcanoas"
                className="w-10 h-10 bg-footer-foreground/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="YouTube"
                target="_blank"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@ibbfcanoas"
                className="w-10 h-10 bg-footer-foreground/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="TikTok"
                target="_blank"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.threads.com/@ibbfcanoas"
                className="w-10 h-10 bg-footer-foreground/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="Threads"
                target="_blank"
              >
                <ThreadsIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-footer-foreground/20 pt-8 text-center">
          <p className="font-body text-sm text-footer-foreground/60">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
