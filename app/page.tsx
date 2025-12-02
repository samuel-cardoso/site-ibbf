import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Schedule from "@/components/home/Schedule";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";
import ScrollToTop from "@/components/home/ScrollToTop";
import HashScrollHandler from "@/components/home/HashScrollHandler";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Início",
  description: "1ª Igreja Batista Bíblica Fundamentalista de Canoas. Escola Bíblica Dominical aos domingos às 9h, Culto de Adoração aos domingos às 19h30 e Reunião de Oração às quartas-feiras às 19h30. R. Benjamin Franklin, 73 - Harmonia, Canoas - RS.",
  keywords: ["igreja", "batista", "bíblica", "fundamentalista", "Canoas", "RS", "culto", "adoração", "escola bíblica dominical", "reunião de oração", "Harmonia"],
  openGraph: {
    title: "Início | 1ª Igreja Batista Bíblica Fundamentalista de Canoas",
    description: "Igreja Batista Bíblica Fundamentalista localizada em Canoas, RS. Venha conhecer nossa comunidade e participar de nossos cultos e eventos.",
    url: "/",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 space-y-10">
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