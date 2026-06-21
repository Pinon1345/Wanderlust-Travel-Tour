import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Wanderlust Travel Tour",
  description: "Wanderlust Travel & Tour offers unforgettable travel experiences, customized tour packages, hotel bookings, and adventure trips. Explore breathtaking destinations worldwide with affordable and reliable travel services.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-black">

        <Navbar></Navbar>

        <main>
          {children}
        </main>

        <Footer></Footer>

      </body>
    </html>
  );
}
