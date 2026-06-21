import { supabase } from "@/lib/supabase";
import { Card, CardContent } from "@/components/ui/card";
import { Music } from "lucide-react";

type ServiceHymn = {
  id: string;
  number: number | null;
  title: string;
  order: number;
};

const Hymns = async () => {
  const now = new Date().toISOString();

  const { data: service } = await supabase
    .from("services")
    .select("id, label, starts_at")
    .gt("starts_at", now)
    .order("starts_at", { ascending: true })
    .limit(1)
    .single();

  if (!service) return null;

  const { data: hymns } = await supabase
    .from("service_hymns")
    .select("id, number, title, order")
    .eq("service_id", service.id)
    .order("order", { ascending: true });

  if (!hymns || hymns.length === 0) return null;

  return (
    <section id="hinos" className="py-6 md:py-34 bg-background m-0">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Hinos do Próximo Culto
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            {service.label}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hymns.map((hymn: ServiceHymn) => (
            <Card key={hymn.id} className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Music className="h-6 w-6 text-primary" />
                </div>
                <div>
                  {hymn.number && (
                    <p className="font-body text-sm text-muted-foreground mb-0.5">
                      Hino {hymn.number}
                    </p>
                  )}
                  <p className="font-heading text-lg font-semibold text-foreground">
                    {hymn.title}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hymns;
