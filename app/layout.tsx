import { PageTitle } from "@/components/PageTitle";
import { Crimson_Text, Roboto, Roboto_Mono, Great_Vibes } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import type { Metadata } from "next";
import "./globals.css";

const crimsonText = Crimson_Text({
  variable: "--font-crimson-text",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "1ª Igreja Batista Bíblica Fundamentalista de Canoas",
    template: "%s | 1ª Igreja Batista Bíblica Fundamentalista de Canoas"
  },
  description: "Igreja Batista Bíblica Fundamentalista localizada em Canoas, RS. Venha conhecer nossa comunidade e participar de nossos cultos e eventos. Escola Bíblica Dominical, Culto de Adoração e Reunião de Oração.",
  keywords: ["igreja", "batista", "bíblica", "fundamentalista", "Canoas", "RS", "culto", "adoração", "escola bíblica dominical", "reunião de oração"],
  authors: [{ name: "1ª Igreja Batista Bíblica Fundamentalista de Canoas" }],
  creator: "1ª Igreja Batista Bíblica Fundamentalista de Canoas",
  publisher: "1ª Igreja Batista Bíblica Fundamentalista de Canoas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "1ª Igreja Batista Bíblica Fundamentalista de Canoas",
    title: "1ª Igreja Batista Bíblica Fundamentalista de Canoas",
    description: "Igreja Batista Bíblica Fundamentalista localizada em Canoas, RS. Venha conhecer nossa comunidade e participar de nossos cultos e eventos.",
  },
  twitter: {
    card: "summary_large_image",
    title: "1ª Igreja Batista Bíblica Fundamentalista de Canoas",
    description: "Igreja Batista Bíblica Fundamentalista localizada em Canoas, RS.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br scroll-smooth">
      <body
        className={`${crimsonText.variable} ${roboto.variable} ${robotoMono.variable} ${greatVibes.variable} antialiased`}
      >
        <GoogleAnalytics />
        <Toaster />
        <PageTitle />
        {children}
      </body>
    </html>
  );
}
