import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/app/providers";
import ThemeProvider from "@/theme/ThemeContext";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Celebratio - Event Booking",
  description: "Book top-rated event services with ease!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Providers>
        <ThemeProvider>
          <body className={`${geistSans.variable} ${geistMono.variable} flex h-screen w-screen`}>
            <Sidebar />
            <div className=" flex flex-col md:ml-40 lg:ml-64">
              <Header />
              <div className="flex-1 w-screen md:max-w-[calc(100vw-10rem)] lg:max-w-[calc(100vw-16rem)]">
  {children}
</div>

            </div>
            <BottomNav />
          </body>
        </ThemeProvider>
      </Providers>
    </html>
  );
}
