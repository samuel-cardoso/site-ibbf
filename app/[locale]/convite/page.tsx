"use client"

import { useState, useEffect, useMemo } from "react";
import { useTranslations } from "next-intl";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import { Share2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { maskPhone, unmaskPhone } from "@/lib/utils";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

function buildConfirmationSchema(t: ReturnType<typeof useTranslations<"ConvitePage">>) {
  return z.object({
    contact: z.string()
      .trim()
      .refine((val) => {
        const numbers = unmaskPhone(val);
        return numbers.length >= 10 && numbers.length <= 11;
      }, {
        message: t("validation.phoneInvalid")
      }),
    numberOfPeople: z.string()
      .refine((val) => !isNaN(Number(val)) && Number(val) >= 1 && Number(val) <= 50, {
        message: t("validation.peopleRange")
      }),
    names: z.array(z.object({
      name: z.string()
        .trim()
        .min(2, { message: t("validation.nameTooShort") })
        .max(100, { message: t("validation.nameTooLong") })
        .refine((val) => !/\d/.test(val), {
          message: t("validation.nameHasNumbers")
        })
    })).min(1, { message: t("validation.atLeastOneName") })
  });
}

type ConfirmationFormData = z.infer<ReturnType<typeof buildConfirmationSchema>>;

export default function InvitePage() {
  const t = useTranslations("ConvitePage");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pageUrl, setPageUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPageUrl(window.location.href);
    }
  }, []);

  const confirmationSchema = useMemo(() => buildConfirmationSchema(t), [t]);

  const form = useForm<ConfirmationFormData>({
    resolver: zodResolver(confirmationSchema),
    defaultValues: {
      contact: "",
      numberOfPeople: "1",
      names: [{ name: "" }]
    }
  });

  const numberOfPeople = form.watch("numberOfPeople");

  useEffect(() => {
    const numPeople = parseInt(numberOfPeople) || 1;
    const currentNames = form.getValues("names") || [];

    if (numPeople > currentNames.length) {
      const newNames = [...currentNames];
      for (let i = currentNames.length; i < numPeople; i++) {
        newNames.push({ name: "" });
      }
      form.setValue("names", newNames);
    } else if (numPeople < currentNames.length) {
      form.setValue("names", currentNames.slice(0, numPeople));
    }
  }, [numberOfPeople, form]);

  const handleWhatsAppShare = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(t("shareMessage") + " " + pageUrl)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(pageUrl).then(() => {
      toast.success(t("toastCopiedTitle"), {
        description: t("toastCopiedDescription"),
      });
    }).catch(() => {
      toast.error(t("toastCopyErrorTitle"), {
        description: t("toastCopyErrorDescription"),
      });
    });
  };

  const onSubmit = async (data: ConfirmationFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-confirmation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contact: unmaskPhone(data.contact),
          numberOfPeople: data.numberOfPeople,
          names: data.names.map(n => n.name),
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        const errorMessage = responseData.error || t("toastErrorTitle");
        throw new Error(errorMessage);
      }

      const firstName = data.names[0]?.name || t("defaultVisitorName");
      toast.success(t("toastSuccessTitle"), {
        description: t("toastSuccessDescription", { name: firstName, count: data.numberOfPeople }),
      });

      form.reset({
        contact: "",
        numberOfPeople: "1",
        names: [{ name: "" }]
      });
    } catch (error: any) {
      console.error("Erro ao enviar confirmação:", error);
      toast.error(t("toastErrorTitle"), {
        description: t("toastErrorDescription"),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative min-h-[calc(100vh-8rem)] pt-32 pb-16 px-6 bg-gradient-to-br from-background via-secondary to-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-8">

            <h1 className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary mb-6 leading-relaxed">
              {t("headline")}
            </h1>

            <p className="font-heading text-xl md:text-2xl lg:text-3xl text-foreground italic">
              {t("subheadline")}
            </p>

            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto my-8"></div>

            <div className="max-w-2xl mx-auto space-y-6">
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                {t("intro1")}
              </p>

              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                {t("intro2")}
              </p>

              <div className="mt-8 pt-8 border-t border-primary/20 space-y-4">
                <div>
                  <p className="font-body text-base text-foreground leading-relaxed">
                    <strong className="font-semibold">{t("addressLabel")}</strong>
                  </p>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    {t("addressLine1")}<br />
                    {t("addressLine2")}
                  </p>
                </div>

                <div>
                  <p className="font-body text-base text-foreground leading-relaxed">
                    <strong className="font-semibold">{t("scheduleLabel")}</strong>
                  </p>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    {t("scheduleLine1")}<br />
                    {t("scheduleLine2")}<br />
                    {t("scheduleLine3")}<br />
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <div className="max-w-2xl mx-auto bg-card rounded-lg p-8 border-2 border-primary/20 shadow-lg">
                <div className="text-center mb-6">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="font-script text-4xl md:text-5xl text-primary mb-3">
                    {t("formTitle")}
                  </h2>
                  <p className="font-body text-muted-foreground">
                    {t("formSubtitle")}
                  </p>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="contact"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-heading">{t("contactLabel")}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder={t("contactPlaceholder")}
                              {...field}
                              onChange={(e) => {
                                const masked = maskPhone(e.target.value);
                                field.onChange(masked);
                              }}
                              value={field.value || ""}
                              className="font-body"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="numberOfPeople"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-heading">{t("peopleLabel")}</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              min="1"
                              max="50"
                              placeholder="1"
                              {...field}
                              className="font-body"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="space-y-4">
                      {form.watch("names")?.map((_, index) => (
                        <FormField
                          key={index}
                          control={form.control}
                          name={`names.${index}.name`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-heading">
                                {t("nameLabel", { index: index + 1 })} {index === 0 && t("responsibleSuffix")}
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder={t("namePlaceholder", { index: index + 1 })}
                                  {...field}
                                  onChange={(e) => {
                                    const valueWithoutNumbers = e.target.value.replace(/\d/g, "");
                                    field.onChange(valueWithoutNumbers);
                                  }}
                                  className="font-body"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>

                    <Button
                      type="submit"
                      className="w-full font-body font-semibold cursor-pointer"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? t("submittingButton") : t("submitButton")}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>

            <div className="mt-16">
              <p className="font-body text-lg text-foreground mb-8 max-w-xl mx-auto">
                {t("shareText")}
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  onClick={handleWhatsAppShare}
                  size="lg"
                  className="font-body font-semibold bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2 cursor-pointer"
                >
                  <Share2 className="h-5 w-5" />
                  {t("whatsappButton")}
                </Button>

                <Button
                  onClick={handleCopyLink}
                  size="lg"
                  variant="outline"
                  className="font-body font-semibold gap-2 cursor-pointer"
                >
                  <Share2 className="h-5 w-5" />
                  {t("copyLinkButton")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
