"use client"

import { useTranslations } from "next-intl";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";

export default function LDPGPage() {
  const t = useTranslations("LdpgPage");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <div className="flex-1 container mx-auto px-4 pt-32 pb-8">
        <div className="bg-card rounded-lg shadow-lg overflow-hidden">
          <div className="w-full h-[calc(100vh-12.6rem)] max-md:h-[calc(100vh-14rem)] min-h-[420px]">
            <iframe
              src="/privacidade.pdf"
              className="w-full h-full border-0"
              title={t("iframeTitle")}
            />
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="font-body text-sm text-muted-foreground">
            {t("fallbackText")}{" "}
            <a
              href="/privacidade.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              {t("fallbackLink")}
            </a>
            .
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
