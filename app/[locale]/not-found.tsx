"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Navbar from "@/components/home/Navbar";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const t = useTranslations("NotFound");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="font-heading text-6xl md:text-8xl font-bold text-primary mb-6">
            404
          </h1>
          <p className="font-body text-xl md:text-2xl text-foreground/80 mb-8">
            {t("title")}
          </p>
          <p className="font-body text-base text-muted-foreground mb-8">
            {t("message")}
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-light text-primary-foreground font-body font-semibold"
            asChild
          >
            <Link href="/">{t("backHome")}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
