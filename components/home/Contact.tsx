import { MapPin, Mail, Clock } from "lucide-react";
import GoogleMap from "./GoogleMap";
import AnimatedSection from "@/components/ui/animated-section";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "R. Benjamin Franklin, 73 - Harmonia",
      subContent: "Canoas - RS, CEP 92310-380"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@ibbfcanoas.com.br",
      subContent: "Responderemos em breve"
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      content: "Segunda a Sexta: 9h às 17h",
      subContent: "Sábado: 9h às 12h"
    }
  ];

  return (
    <section id="contato" className="py-6 md:py-34 bg-background m-0">
      <AnimatedSection>
      <div className="container mx-auto px-4">

        <div className="mb-12 md:mb-16 max-w-2xl">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Fale Conosco
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Estamos aqui para servir você. Entre em contato conosco!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-2 divide-y divide-border border-t border-border">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex gap-4 py-6">
                <info.icon className="h-5 w-5 text-primary mt-1 shrink-0" strokeWidth={1.75} />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                    {info.title}
                  </h3>
                  <p className="font-body text-foreground/90">
                    {info.content}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {info.subContent}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <GoogleMap
              address="R. Benjamin Franklin, 73 - Harmonia, Canoas - RS, 92310-380"
              height="420px"
            />
          </div>
        </div>
      </div>
      </AnimatedSection>
    </section>
  );
};

export default Contact;
