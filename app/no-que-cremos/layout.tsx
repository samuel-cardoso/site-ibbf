import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "No que cremos?",
  description: "Conheça os pontos fundamentais da nossa confissão de fé. Confissão de fé batista bíblica fundamentalista com referências bíblicas.",
  keywords: ["confissão de fé", "doutrina", "crenças", "batista", "bíblica", "fundamentalista", "escrituras", "trindade", "cristo"],
  openGraph: {
    title: "No que cremos? | 1ª Igreja Batista Bíblica Fundamentalista de Canoas",
    description: "Conheça os pontos fundamentais da nossa confissão de fé com referências bíblicas.",
    url: "/no-que-cremos",
  },
  twitter: {
    card: "summary",
    title: "No que cremos? | 1ª Igreja Batista Bíblica Fundamentalista de Canoas",
    description: "Conheça os pontos fundamentais da nossa confissão de fé.",
  },
};

export default function NoQueCremosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

