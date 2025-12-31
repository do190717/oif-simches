import type { Metadata } from "next";
import { Rubik, Assistant } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin", "hebrew"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-rubik",
});

const assistant = Assistant({
  subsets: ["latin", "hebrew"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-assistant",
});

export const metadata: Metadata = {
  title: "אויף שימחעס - מודעות והזמנות מעוצבות",
  description: "צור מודעות והזמנות מקצועיות לכל אירוע - בר/בת מצווה, חתונות, אירועי בית כנסת ועוד",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${rubik.variable} ${assistant.variable} font-assistant`}>
        {children}
      </body>
    </html>
  );
}