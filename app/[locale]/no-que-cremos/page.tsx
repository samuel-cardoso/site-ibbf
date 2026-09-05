"use client"

import { useLocale, useTranslations } from "next-intl";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getConfissaoDeFe } from "@/lib/confissao-de-fe";
import { BookOpen } from "lucide-react";

export default function NoQueCremosPage() {
  const t = useTranslations("NoQueCremos");
  const locale = useLocale();
  const confissaoDeFe = getConfissaoDeFe(locale);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <section className="relative pt-32 pb-16 px-6 bg-gradient-to-br from-background via-secondary to-background flex-1">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-8 mb-12">

            <p className="font-heading text-2xl md:text-3xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mt-14 max-md:mt-4">
              {t("intro")}
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 md:p-8 border-2 border-primary/20 shadow-lg">
            <Accordion type="single" collapsible className="w-full">
              {confissaoDeFe.map((section, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-b border-primary/20 last:border-b-0"
                >
                  <AccordionTrigger className="font-heading text-left text-lg md:text-xl hover:no-underline py-6">
                    {section.title}
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6">
                    <div className="font-body text-base md:text-lg text-foreground leading-relaxed space-y-4">
                      <p className="mb-6">
                        {section.content}
                      </p>
                      
                      {section.references && (
                        <div className="mt-6 pt-4 border-t border-primary/20">
                          <p className="text-sm font-semibold text-primary mb-2">
                            {t("referencesLabel")}
                          </p>
                          <div className="text-sm text-muted-foreground leading-relaxed">
                            {section.references.split('\n').map((ref, refIndex) => (
                              <p key={refIndex} className="mb-1">
                                {ref.trim()}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {confissaoDeFe.length === 0 && (
            <div className="text-center py-12">
              <p className="font-body text-muted-foreground">
                {t("empty")}
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

