"use client"

import { useState, useEffect } from "react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";

export default function CalendarPage() {
	const calendarId = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR;
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);

		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	const baseUrl = `https://calendar.google.com/calendar/embed?src=${calendarId}&ctz=America%2FSao_Paulo`;

	const calendarUrl = isMobile 
		? `${baseUrl}&mode=AGENDA`
		: baseUrl;
		  
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 px-4 md:px-6 bg-gradient-to-br from-background via-secondary to-background flex-1">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6 md:space-y-8 mb-8 md:mb-12">
            <p className="font-heading text-xl md:text-2xl lg:text-3xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mt-8 md:mt-14">
              Confira abaixo nossa agenda completa de cultos, eventos especiais e atividades da igreja.
            </p>
          </div>

          <div className="bg-card rounded-lg p-3 md:p-6 lg:p-8 border-2 border-primary/20 shadow-lg">
            <div className="w-full overflow-hidden h-[400px] md:h-[500px] lg:h-[600px]">
              <iframe
                src={calendarUrl}
                style={{
                  border: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: "0.5rem"
                }}
                frameBorder="0"
                scrolling="no"
                title="Agenda de Eventos"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

