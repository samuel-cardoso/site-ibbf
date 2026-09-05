import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Schedule from "@/components/home/Schedule";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";
import ScrollToTop from "@/components/home/ScrollToTop";
import HashScrollHandler from "@/components/home/HashScrollHandler";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

const SITE_NAME = "1ª Igreja Batista Bíblica Fundamentalista de Canoas";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.Home" });

  return {
    title: SITE_NAME,
    description: t("description"),
    keywords: t.raw("keywords"),
    openGraph: {
      title: SITE_NAME,
      description: t("description"),
      url: `/${locale}`,
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen flex flex-col bg-background space-y-10">
      <HashScrollHandler />
      <Navbar />
      <Hero />
      <About />
      <Schedule />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
