import type { Metadata } from "next";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";
import { Lexend } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const DMSans = Lexend({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mofadj Consult - Top Project Management Consulting",
  description: "project management consulting, procurement and logistics, quantity survey works, MS project training, plan, schedule, monitor and control projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${DMSans.className} antialiased`}>
        <Toaster />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
