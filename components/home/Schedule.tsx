import { BookOpen, HandHeart, Church } from "lucide-react";
import { getTranslations, getLocale } from "next-intl/server";
import { supabase } from "@/lib/supabase";
import AnimatedSection from "@/components/ui/animated-section";

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

function formatDate(isoDate: string, locale: string): string {
  return new Date(isoDate).toLocaleDateString(locale === "en" ? "en-US" : "pt-BR", {
    day: "numeric",
    month: "long",
    timeZone: "America/Sao_Paulo",
  });
}

const Schedule = async () => {
  const t = await getTranslations("Schedule");
  const locale = await getLocale();

  const [ebd, adoracao, oracao] = await Promise.all([
    fetchNextService("Escola Bíblica"),
    fetchNextService("Culto de Adoração"),
    fetchNextService("Culto de Oração"),
  ]);

  const events = [
    {
      icon: BookOpen,
      title: t("ebdTitle"),
      day: t("ebdDay"),
      time: "09:00",
      description: t("ebdDescription"),
      hymnsLabel: t("ebdHymnsLabel"),
      ...ebd,
    },
    {
      icon: Church,
      title: t("worshipTitle"),
      day: t("worshipDay"),
      time: "19:30",
      description: t("worshipDescription"),
      hymnsLabel: t("worshipHymnsLabel"),
      ...adoracao,
    },
    {
      icon: HandHeart,
      title: t("prayerTitle"),
      day: t("prayerDay"),
      time: "19:30",
      description: t("prayerDescription"),
      hymnsLabel: t("prayerHymnsLabel"),
      ...oracao,
    },
  ];

  return (
    <section id="programacao" className="py-6 md:py-34 bg-secondary m-0">
      <AnimatedSection>
      <div className="container mx-auto px-4">
        <div className="mb-12 md:mb-16 max-w-2xl">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("title")}
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border border border-border rounded-lg overflow-hidden">
          {events.map((event, index) => (
            <div key={index} className="bg-background p-6 md:p-8 flex flex-col">
              <div className="flex items-center gap-2 text-primary mb-4">
                <event.icon className="h-5 w-5" strokeWidth={1.75} />
                <span className="font-body text-xs font-semibold uppercase tracking-wider">
                  {event.day} · {event.time}
                </span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                {event.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm">
                {event.description}
              </p>
              {event.hymns.length > 0 && (
                <div className="mt-5 pt-5 border-t border-border">
                  <div className="flex items-baseline gap-2 mb-2">
                    <p className="font-body text-sm font-semibold text-foreground">
                      {event.hymnsLabel}
                    </p>
                    {event.date && (
                      <p className="font-body text-xs text-muted-foreground">
                        · {formatDate(event.date, locale)}
                      </p>
                    )}
                  </div>
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
            </div>
          ))}
        </div>
        <p className="font-body text-sm text-muted-foreground text-center mt-8">
          {t("footnote")}
        </p>
      </div>
      </AnimatedSection>
    </section>
  );
};

export default Schedule;
