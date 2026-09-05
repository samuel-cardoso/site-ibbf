"use client";

import { useTranslations } from "next-intl";
import { smoothScrollTo } from "@/lib/utils";
import AnimatedSection from "@/components/ui/animated-section";

const About = () => {
  const t = useTranslations("About");
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    smoothScrollTo(href);
  };
  return (
    <section id="sobre" className="py-6 md:py-34 m-0 bg-background">
      <AnimatedSection>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t("title")}
            </h2>
            <div className="space-y-4 font-body text-lg text-foreground/80">
              <p>{t("paragraph1")}</p>
              <p>{t("paragraph2")}</p>
              <p>{t("paragraph3")}</p>
            </div>
            <div className="mt-8">
              <a
                href="#programacao"
                onClick={(e) => handleSmoothScroll(e, "#programacao")}
                className="inline-block font-body font-semibold text-primary hover:text-primary-light transition-colors"
              >
                {t("ctaLink")}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <img
                src={"/assets/church-building.jpg"}
                alt={t("imageAlt")}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      </AnimatedSection>
    </section>
  );
};

export default About;
