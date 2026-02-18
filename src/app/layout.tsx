import type { Metadata } from "next";
import { Alegreya, Alegreya_Sans, Alegreya_SC } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const alegreya = Alegreya({
  variable: "--font-alegreya",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const alegreyaSans = Alegreya_Sans({
  variable: "--font-alegreya-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const alegreyaSC = Alegreya_SC({
  variable: "--font-alegreya-sc",
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Decentralized Intelligence Agency — Intelligence, Liberated",
  description:
    "A 501(c)(3) scientific nonprofit dedicated to increasing collective intelligence through open-source research, development, and education.",
  keywords: [
    "decentralized intelligence",
    "collective intelligence",
    "open source",
    "scientific nonprofit",
    "AI research",
    "decentralized systems",
    "knowledge management",
  ],
  authors: [{ name: "Decentralized Intelligence Agency" }],
  openGraph: {
    title: "Decentralized Intelligence Agency — Intelligence, Liberated",
    description:
      "A 501(c)(3) scientific nonprofit dedicated to increasing collective intelligence through open-source research, development, and education.",
    url: "https://decentralizedintelligence.agency",
    siteName: "Decentralized Intelligence Agency",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Decentralized Intelligence Agency — Intelligence, Liberated",
    description:
      "A 501(c)(3) scientific nonprofit. Open-source research, development, and education for collective intelligence.",
  },
  metadataBase: new URL("https://decentralizedintelligence.agency"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${alegreya.variable} ${alegreyaSC.variable} ${alegreyaSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
