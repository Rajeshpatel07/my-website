import type { Metadata } from "next";
import { Oswald, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/preloader";

const ibmPlexMono = IBM_Plex_Mono({
  weight: "700",
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "Rajesh Potharam | Full Stack Developer",
  description: "Portfolio of Rajesh Potharam, a Full Stack Developer specializing in high-performance applications using TypeScript, React, Next.js, and C++.",
  keywords: ["Rajesh Potharam", "Full Stack Developer", "Software Engineer", "React", "Next.js", "TypeScript", "C++", "Portfolio"],
  authors: [{ name: "Rajesh Potharam" }],
  creator: "Rajesh Potharam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rajeshpatel.xyz",
    title: "Rajesh Potharam | Full Stack Developer",
    description: "Portfolio of Rajesh Potharam, a Full Stack Developer specializing in high-performance applications.",
    siteName: "Rajesh Potharam Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajesh Potharam | Full Stack Developer",
    description: "Portfolio of Rajesh Potharam, a Full Stack Developer specializing in high-performance applications.",
    creator: "@rajeshp04252589",
  },
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
        className={`${oswald.variable} ${ibmPlexMono.variable} antialiased`}
      >
        <Preloader />
        {children}
      </body>
    </html>
  );
}
