import { PageTitle } from "@/components/PageTitle";
import { Crimson_Text, Roboto, Roboto_Mono, Great_Vibes } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
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
        <Toaster />
        <PageTitle />
        {children}
      </body>
    </html>
  );
}
