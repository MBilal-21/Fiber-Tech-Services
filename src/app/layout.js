import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToUpBtn";
import Loading from "@/components/Loading"; // Import Loading component
import { Suspense } from "react"; // Import Suspense

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fiber Tech Services",
  description: "Fiber Tech Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollToTop />
        <Navbar />
        
        {/* Wrap ClientLayout in Suspense to show a loading screen */}
        <Suspense fallback={<Loading />}>
          <main className="overflow-x-hidden">{children}</main>
        </Suspense>

        <Footer />
      </body>
    </html>
  );
}
