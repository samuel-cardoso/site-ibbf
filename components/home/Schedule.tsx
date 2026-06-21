import { Calendar, Clock, GraduationCap, Heart, Church } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/lib/supabase";

type Hymn = { id: string; number: number | null; title: string; order: number };
type ServiceData = { hymns: Hymn[]; date: string | null };

async function fetchNextService(labelFragment: string): Promise<ServiceData> {
  const now = new Date().toISOString();

  const { data: service } = await supabase
    .from("services")
    .select("id, starts_at")
    .gt("starts_at", now)
    .ilike("label", `%${labelFragment}%`)
    .order("starts_at", { ascending: true })
    .limit(1)
    .single();

  if (!service) return { hymns: [], date: null };

  const { data: hymns } = await supabase
    .from("service_hymns")
    .select("id, number, title, order")
    .eq("service_id", service.id)
    .order("order", { ascending: true });

  return {
    hymns: hymns ?? [],
    date: service.starts_at,
  };
}

function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    timeZone: "America/Sao_Paulo",
  });
}

const Schedule = async () => {
  const [ebd, adoracao, oracao] = await Promise.all([
    fetchNextService("Escola Bíblica"),
    fetchNextService("Culto de Adoração"),
    fetchNextService("Culto de Oração"),
  ]);

  const events = [
    {
      icon: GraduationCap,
      title: "Escola Bíblica Dominical",
      day: "Domingos",
      time: "09:00",
      description: "Estudo bíblico para todas as idades.",
      ...ebd,
    },
    {
      icon: Church,
      title: "Culto de Adoração",
      day: "Domingos",
      time: "19:30",
      description: "Culto de adoração e pregação.",
      ...adoracao,
    },
    {
      icon: Heart,
      title: "Culto de Oração",
      day: "Quartas-feiras",
      time: "19:30",
      description: "Culto de oração e pregação.",
      ...oracao,
    },
  ];

  return (
    <section id="programacao" className="py-6 md:py-34 bg-secondary m-0">
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
                  <CardTitle className="font-heading text-xl">{event.title}</CardTitle>
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
                <p className="font-body text-muted-foreground">{event.description}</p>
                {event.hymns.length > 0 && (
                  <div className="mt-4 pt-4 border-t">
                    <p className="font-body text-sm font-semibold text-foreground mb-1">
                      Hinos e Cânticos
                    </p>
                    {event.date && (
                      <p className="font-body text-xs text-muted-foreground mb-2">
                        {formatDate(event.date)}
                      </p>
                    )}
                    <ul className="space-y-1">
                      {event.hymns.map((hymn) => (
                        <li
                          key={hymn.id}
                          className="font-body text-sm text-muted-foreground flex items-baseline gap-2"
                        >
                          {hymn.number && (
                            <span className="text-xs font-medium text-primary shrink-0">
                              {hymn.number}
                            </span>
                          )}
                          <span>{hymn.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
