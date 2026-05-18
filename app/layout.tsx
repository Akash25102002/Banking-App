import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Serif, Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  weight: "400",
  subsets: ["latin"],
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is a tool for visualizing and analyzing the performance of machine learning models. It provides a simple and intuitive interface for exploring model performance metrics, such as accuracy, precision, recall, and F1 score. Horizon also allows users to compare the performance of different models and identify areas for improvement. Whether you're a data scientist, machine learning engineer, or researcher, Horizon can help you gain insights into your models and make informed decisions about how to improve them.",
  icons: {
    icon: '/icons/logo.svg'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ibmPlexSerif.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
