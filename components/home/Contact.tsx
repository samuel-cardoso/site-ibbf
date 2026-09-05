import { MapPin, Mail, Clock } from "lucide-react";
import { useTranslations } from "next-intl";
import GoogleMap from "./GoogleMap";
import AnimatedSection from "@/components/ui/animated-section";

const Contact = () => {
  const t = useTranslations("Contact");

  const contactInfo = [
    {
      icon: MapPin,
      title: t("addressTitle"),
      content: t("addressLine1"),
      subContent: t("addressLine2")
    },
    {
      icon: Mail,
      title: t("emailTitle"),
      content: t("emailContent"),
      subContent: t("emailSubContent")
    },
    {
      icon: Clock,
      title: t("hoursTitle"),
      content: t("hoursContent"),
      subContent: t("hoursSubContent")
    }
  ];

  return (
    <section id="contato" className="py-6 md:py-34 bg-background m-0">
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
              title={t("mapTitle")}
            />
          </div>
        </div>
      </div>
      </AnimatedSection>
    </section>
  );
};

export default Contact;
