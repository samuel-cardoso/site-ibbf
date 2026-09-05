import { PageTitle } from "@/components/PageTitle";
import { Crimson_Text, Roboto, Roboto_Mono, Great_Vibes } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ThemeProvider";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import StructuredData from "@/components/StructuredData";
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
    images: [
      {
        url: "/assets/logo-web.png",
        width: 1200,
        height: 630,
        alt: "Logo da 1ª Igreja Batista Bíblica Fundamentalista de Canoas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "1ª Igreja Batista Bíblica Fundamentalista de Canoas",
    description: "Igreja Batista Bíblica Fundamentalista localizada em Canoas, RS.",
    images: ["/assets/logo-web.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.png", sizes: "120x120", type: "image/png" },
      { url: "/assets/logo-web.png", sizes: "300x300", type: "image/png" },
    ],
    apple: [
      { url: "/icon.png", sizes: "120x120", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`${crimsonText.variable} ${roboto.variable} ${robotoMono.variable} ${greatVibes.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <StructuredData />
          <GoogleAnalytics />
          <Toaster />
          <PageTitle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
