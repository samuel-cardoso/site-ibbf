import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agenda",
  description: "Confira nossa agenda de eventos, cultos e atividades da 1ª Igreja Batista Bíblica Fundamentalista de Canoas. Participe dos nossos encontros e celebrações.",
  keywords: ["agenda", "eventos", "cultos", "atividades", "programação", "igreja", "Canoas", "RS", "calendário"],
  openGraph: {
    title: "Agenda | 1ª Igreja Batista Bíblica Fundamentalista de Canoas",
    description: "Confira nossa agenda de eventos, cultos e atividades. Participe dos nossos encontros e celebrações.",
    url: "/agenda",
  },
  twitter: {
    card: "summary",
    title: "Agenda | 1ª Igreja Batista Bíblica Fundamentalista de Canoas",
    description: "Confira nossa agenda de eventos, cultos e atividades.",
  },
};

export default function AgendaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

