import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emmanuel Asolo - AI/ML Engineer",
  description:
    "Machine Learning & AI Engineer specializing in deep learning, computer vision, and scalable AI solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="bg-[#0F141D]">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
