import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Decentralized Intelligence Agency (DIA)",
    template: "%s | DIA",
  },
  description:
    "Advancing collective intelligence through decentralized collaboration and scientific rigor. The DIA is a 501(c)(3) non-profit research organization.",
  keywords: [
    "collective intelligence",
    "AI research",
    "decentralized systems",
    "scientific research",
    "non-profit",
    "artificial intelligence",
    "human-AI collaboration",
  ],
  authors: [{ name: "Decentralized Intelligence Agency" }],
  creator: "Decentralized Intelligence Agency",
  publisher: "Decentralized Intelligence Agency",
  metadataBase: new URL("https://dia.org"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dia.org",
    siteName: "Decentralized Intelligence Agency",
    title: "Decentralized Intelligence Agency (DIA)",
    description:
      "Advancing collective intelligence through decentralized collaboration and scientific rigor.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Decentralized Intelligence Agency (DIA)",
    description:
      "Advancing collective intelligence through decentralized collaboration and scientific rigor.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
