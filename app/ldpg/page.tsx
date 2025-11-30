"use client"

import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";

export default function LDPGPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-4 pt-32 pb-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="w-full h-[calc(100vh-12.6rem)] max-md:h-[calc(100vh-14rem)] min-h-[420px]">
            <iframe
              src="/privacidade.pdf"
              className="w-full h-full border-0"
              title="Política de Privacidade"
            />
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="font-body text-sm text-muted-foreground">
            Se o PDF não estiver visível, você pode{" "}
            <a
              href="/privacidade.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            > 
              abrir em uma nova aba
            </a>
            .
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

