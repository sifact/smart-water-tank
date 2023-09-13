import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import { UserAuthContextProvider } from "@/context/UserAuthConext";
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
        <UserAuthContextProvider>
        <Toaster />
        <Navbar />
        {children}
        <Footer />
        </UserAuthContextProvider>
        
      </body>
    </html>
  );
}
