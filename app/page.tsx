import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Schedule from "@/components/home/Schedule";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";
import ScrollToTop from "@/components/home/ScrollToTop";
import HashScrollHandler from "@/components/home/HashScrollHandler";

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