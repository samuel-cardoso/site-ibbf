import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

const SITE_NAME = "1ª Igreja Batista Bíblica Fundamentalista de Canoas";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.Entrar" });
  const fullTitle = `${t("title")} | ${SITE_NAME}`;

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: fullTitle,
      description: t("description"),
      url: `/${locale}/entrar`,
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description: t("description"),
    },
  };
}

export default async function EntrarLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return children;
}
