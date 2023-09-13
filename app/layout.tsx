import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smart Water Tank Controller",
  description: "Smart Water Tank Controller",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //className={inter.className}
  return (
    <html lang="en">
      <body>
        <Toaster />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
