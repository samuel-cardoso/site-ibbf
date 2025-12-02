import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de Privacidade e Proteção de Dados da 1ª Igreja Batista Bíblica Fundamentalista de Canoas. Conheça como protegemos seus dados pessoais.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LDPGLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

