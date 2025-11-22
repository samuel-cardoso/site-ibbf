import { Calendar, Clock, Users, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Schedule = () => {
  const events = [
    {
      icon: BookOpen,
      title: "Escola Bíblica Dominical",
      day: "Domingos",
      time: "09:00",
      description: "Estudo bíblico para todas as idades"
    },
    {
      icon: Users,
      title: "Culto Matutino",
      day: "Domingos",
      time: "10:30",
      description: "Culto de adoração e pregação"
    },
    {
      icon: Users,
      title: "Culto Vespertino",
      day: "Domingos",
      time: "18:00",
      description: "Culto de louvor e mensagem"
    },
    {
      icon: BookOpen,
      title: "Estudo Bíblico",
      day: "Quartas-feiras",
      time: "19:30",
      description: "Estudo aprofundado das Escrituras"
    },
    {
      icon: Users,
      title: "Reunião de Oração",
      day: "Sextas-feiras",
      time: "19:30",
      description: "Momento de intercessão e súplicas"
    },
    {
      icon: Users,
      title: "Jovens",
      day: "Sábados",
      time: "19:00",
      description: "Reunião da mocidade"
    }
  ];

  return (
    <section id="programacao" className="py-6 md:py-20 bg-secondary m-0">
      <div className="container mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossa Programação
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos diversos momentos de comunhão, adoração e ensino bíblico. 
            Você é bem-vindo em todos eles!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <event.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="font-heading text-xl">{event.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="font-body flex items-center gap-4 text-base">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {event.day}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {event.time}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-body text-muted-foreground">
                  {event.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
