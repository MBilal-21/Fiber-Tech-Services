import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"
import ScrollToTop from "@/components/ScrollToUpBtn";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fiber Tech Services",
  description: "Fiber Tech Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollToTop/>
        <Navbar />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
