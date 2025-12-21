import type { Metadata } from "next";
import { Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  weight: "700",
  variable: "--font-ibm-plex-mono",
});

const hankenGrotesk = Hanken_Grotesk({
  weight: "600",
  variable: "--font-henken-grotesk",
});

export const metadata: Metadata = {
  title: "Rajesh",
  description: "Portfolio of Rajesh Potharam",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hankenGrotesk.variable} ${ibmPlexMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
