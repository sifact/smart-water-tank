import dynamic from "next/dynamic";

import "./globals.css";
import type { Metadata } from "next";

import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
const DynamicNavbar = dynamic(() => import("../components/navbar"), {
  ssr: false,
});

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
        {/* <UserAuthContextProvider> */}
        <Toaster />

        <DynamicNavbar />

        {children}
        <Footer />
        {/* </UserAuthContextProvider> */}
      </body>
    </html>
  );
}
