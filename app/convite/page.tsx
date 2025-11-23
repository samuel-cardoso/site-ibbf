"use client"

import { useState, useEffect } from "react";
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

const confirmationSchema = z.object({
  contact: z.string()
    .trim()
    .refine((val) => {
      const numbers = unmaskPhone(val);
      return numbers.length >= 10 && numbers.length <= 11;
    }, {
      message: "Telefone deve ter 10 ou 11 dígitos"
    }),
  numberOfPeople: z.string()
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 1 && Number(val) <= 50, {
      message: "Número de pessoas deve ser entre 1 e 50"
    }),
  names: z.array(z.object({
    name: z.string()
      .trim()
      .min(2, { message: "Nome deve ter pelo menos 2 caracteres" })
      .max(100, { message: "Nome deve ter no máximo 100 caracteres" })
      .refine((val) => !/\d/.test(val), {
        message: "Nome não pode conter números"
      })
  })).min(1, { message: "Pelo menos um nome é obrigatório" })
});

type ConfirmationFormData = z.infer<typeof confirmationSchema>;

export default function InvitePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pageUrl, setPageUrl] = useState("");

  useEffect(() => {
    // Garante que window está disponível (apenas no cliente)
    if (typeof window !== "undefined") {
      setPageUrl(window.location.href);
    }
  }, []);

  const form = useForm<ConfirmationFormData>({
    resolver: zodResolver(confirmationSchema),
    defaultValues: {
      contact: "",
      numberOfPeople: "1",
      names: [{ name: "" }]
    }
  });

  const numberOfPeople = form.watch("numberOfPeople");

  // Atualiza os campos de nome quando o número de pessoas muda
  useEffect(() => {
    const numPeople = parseInt(numberOfPeople) || 1;
    const currentNames = form.getValues("names") || [];
    
    if (numPeople > currentNames.length) {
      // Adiciona campos se aumentou
      const newNames = [...currentNames];
      for (let i = currentNames.length; i < numPeople; i++) {
        newNames.push({ name: "" });
      }
      form.setValue("names", newNames);
    } else if (numPeople < currentNames.length) {
      // Remove campos se diminuiu
      form.setValue("names", currentNames.slice(0, numPeople));
    }
  }, [numberOfPeople, form]);

  const shareMessage = "Você está convidado para celebrar conosco a presença de Deus na 1ª Igreja Batista Bíblica Fundamentalista de Canoas! Venha experimentar a comunhão, adoração e o ensino da Palavra.";

  const handleWhatsAppShare = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareMessage + " " + pageUrl)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(pageUrl).then(() => {
      toast.success("Link copiado!", {
        description: "O link do convite foi copiado para a área de transferência.",
      });
    }).catch(() => {
      toast.error("Erro", {
        description: "Não foi possível copiar o link.",
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
          contact: unmaskPhone(data.contact), // Remove máscara antes de enviar
          numberOfPeople: data.numberOfPeople,
          names: data.names.map(n => n.name),
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        const errorMessage = responseData.error || "Erro ao enviar confirmação";
        throw new Error(errorMessage);
      }

      const firstName = data.names[0]?.name || "Visitante";
      toast.success("Confirmação recebida!", {
        description: `Obrigado, ${firstName}! Sua presença foi confirmada para ${data.numberOfPeople} pessoa(s).`,
      });
      
      form.reset({
        contact: "",
        numberOfPeople: "1",
        names: [{ name: "" }]
      });
    } catch (error: any) {
      console.error("Erro ao enviar confirmação:", error);
      toast.error("Erro ao confirmar presença", {
        description: "Ocorreu um erro ao processar sua confirmação. Por favor, tente novamente.",
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
              Você está convidado
            </h1>
            
            <p className="font-heading text-xl md:text-2xl lg:text-3xl text-foreground italic">
              Para celebrar conosco a presença de Deus
            </p>
            
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto my-8"></div>
            
            <div className="max-w-2xl mx-auto space-y-6">
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                É com grande alegria que convidamos você e sua família para participar de nossos cultos e eventos especiais.
              </p>
              
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Venha experimentar a comunhão, adoração e o ensino da Palavra de Deus em um ambiente acolhedor e cheio do amor de Cristo.
              </p>

              <div className="mt-8 pt-8 border-t border-primary/20 space-y-4">
                <div>
                  <p className="font-body text-base text-foreground leading-relaxed">
                    <strong className="font-semibold">Nosso endereço:</strong>
                  </p>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    R. Benjamin Franklin, 73 - Harmonia<br />
                    Canoas - RS, 92310-380
                  </p>
                </div>

                <div>
                  <p className="font-body text-base text-foreground leading-relaxed">
                    <strong className="font-semibold">Nossos horários:</strong>
                  </p>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    Escola Bíblica Dominical - Domingo às 9h<br />
                    Culto de Adoração - Domingo às 19h30<br />
                    Reunião de Oração - Quarta-feira às 19h30<br />
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
                    Confirme sua presença
                  </h2>
                  <p className="font-body text-muted-foreground">
                    Ficaremos muito felizes em recebê-lo!
                  </p>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="contact"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-heading">Telefone ou WhatsApp</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="(00) 00000-0000" 
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
                          <FormLabel className="font-heading">Número de pessoas</FormLabel>
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

                    {/* Campos dinâmicos de nomes */}
                    <div className="space-y-4">
                      {form.watch("names")?.map((_, index) => (
                        <FormField
                          key={index}
                          control={form.control}
                          name={`names.${index}.name`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-heading">
                                Nome {index + 1} {index === 0 && "(Responsável)"}
                              </FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder={`Digite o nome da pessoa ${index + 1}`}
                                  {...field}
                                  onChange={(e) => {
                                    // Remove números do input
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
                      {isSubmitting ? "Enviando..." : "Confirmar Presença"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-16">
              <p className="font-body text-lg text-foreground mb-8 max-w-xl mx-auto">
                Convide seus amigos e familiares para conhecer nossa comunidade
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  onClick={handleWhatsAppShare}
                  size="lg"
                  className="font-body font-semibold bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2 cursor-pointer"
                >
                  <Share2 className="h-5 w-5" />
                  Compartilhar no WhatsApp
                </Button>
                
                <Button
                  onClick={handleCopyLink}
                  size="lg"
                  variant="outline"
                  className="font-body font-semibold gap-2 cursor-pointer"
                >
                  <Share2 className="h-5 w-5" />
                  Copiar Link
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

