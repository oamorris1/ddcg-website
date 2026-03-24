import type { Metadata } from "next";
import { Inter_Tight, DM_Sans } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter-tight",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digital Dynamics Consultants Group | Scale. Transform. Lead.",
  description:
    "Full-service consulting firm specializing in marketing, AI content creation, digital transformation, software engineering, and logistics.",
  openGraph: {
    title: "Digital Dynamics Consultants Group",
    description: "Scale Faster. Build Smarter. Lead the Market.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${interTight.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
