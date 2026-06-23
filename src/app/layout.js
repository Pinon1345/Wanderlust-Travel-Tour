import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const josefin = Josefin_Sans({
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
      className={`${josefin.className} h-full antialiased`}
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
