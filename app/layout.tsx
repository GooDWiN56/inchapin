import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import CustomScrollbar from "@/components/CustomScrollbar";
import Header from "@/components/Header";
import { ProximaNova } from "@/styles/fonts/ProximaNova";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "INCHAPIN",
  description: "Дом бизнес-класса для ценителей роскоши",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${ProximaNova.className}`}>
        <CustomScrollbar>{children}</CustomScrollbar>
      </body>
    </html>
  );
}
