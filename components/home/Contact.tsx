import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import GoogleMap from "./GoogleMap";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua da Igreja, 123 - Centro",
      subContent: "São Paulo - SP, CEP 01234-567"
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 98765-4321",
      subContent: "Ligue ou mande mensagem"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@ibfundamental.com.br",
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
    <section id="contato" className="py-20 bg-background m-0">
      <div className="container mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Fale Conosco
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos aqui para servir você. Entre em contato conosco!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                  <info.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {info.title}
                </h3>
                <p className="font-body text-foreground font-medium mb-1">
                  {info.content}
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  {info.subContent}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <GoogleMap 
          address="R. Benjamin Franklin, 73 - Harmonia, Canoas - RS, 92310-380"
          height="500px"  
        />
      </div>
    </section>
  );
};

export default Contact;
