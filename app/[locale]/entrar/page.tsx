"use client"

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Construction } from "lucide-react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";

export default function EntrarPage() {
  const t = useTranslations("EntrarPage");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <section className="relative min-h-[calc(100vh-8rem)] pt-32 pb-16 px-6 flex-1 flex items-center justify-center bg-gradient-to-br from-background via-secondary to-background">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container mx-auto max-w-2xl"
        >
          <div className="bg-card rounded-lg p-8 md:p-12 border-2 border-primary/20 shadow-lg text-center">
            <motion.div
              className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mx-auto mb-6"
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
            >
              <Construction className="h-10 w-10 text-primary" />
            </motion.div>

            <h1 className="font-script text-4xl sm:text-5xl md:text-6xl text-primary mb-4 leading-relaxed">
              {t("title")}
            </h1>

            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto my-6" />

            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t("message")}
            </p>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
