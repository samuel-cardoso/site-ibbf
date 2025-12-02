import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convite",
  description: "Você está convidado para celebrar conosco a presença de Deus na 1ª Igreja Batista Bíblica Fundamentalista de Canoas. Venha experimentar a comunhão, adoração e o ensino da Palavra.",
  keywords: ["convite", "igreja", "culto", "adoração", "comunhão", "Canoas", "RS"],
  openGraph: {
    title: "Convite | 1ª Igreja Batista Bíblica Fundamentalista de Canoas",
    description: "Você está convidado para celebrar conosco a presença de Deus. Venha experimentar a comunhão, adoração e o ensino da Palavra.",
    url: "/convite",
  },
  twitter: {
    card: "summary",
    title: "Convite | 1ª Igreja Batista Bíblica Fundamentalista de Canoas",
    description: "Você está convidado para celebrar conosco a presença de Deus.",
  },
};

export default function ConviteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

