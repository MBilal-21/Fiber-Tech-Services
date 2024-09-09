import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToUpBtn";
import Loading from "@/components/Loading"; // Import Loading component
import { Suspense } from "react"; // Import Suspense
import Head from "next/head";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fiber Tech Services",
  description: "Fiber Tech Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="GXW489isAHnbMmnIQk2Zk7PhY4HUMtgpBKffVJGbLKI"
        />
      </Head>
      <body className={inter.className}>
        <ScrollToTop />
        <Navbar />

        {/* Wrap ClientLayout in Suspense to show a loading screen */}
        <Suspense fallback={<Loading />}>
          <main className="overflow-x-hidden">{children}</main>
        </Suspense>

        <Footer />

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7ZQMEKKJ1L"
          strategy="afterInteractive"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-7ZQMEKKJ1L');`}
        </Script>
      </body>
    </html>
  );
}
