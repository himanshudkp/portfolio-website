import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import CommandPalette from "@/components/CommandPalette";
import CommandPaletteIndicator from "@/components/CommandPaletteIndicator";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export const metadata: Metadata = {
  title: "Portfolio | Himanshu Pandey",
  description:
    "A personal portfolio website developed using React, Next.js, TypeScript and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.className} ${ovo.className} antialiased`}>
        <ThemeProvider>
          <CommandPalette />
          <CommandPaletteIndicator />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
