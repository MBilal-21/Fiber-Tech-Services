import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToUpBtn";
import Loading from "@/components/Loading"; // Import Loading component
import { Suspense } from "react"; // Import Suspense
import Script from "next/script";
import IconWhatsappFill from "@/components/Icons/IconWhatsapp";
import WhatsAppIcon from "@/components/WhatsAppIcon";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Fiber Tech Services</title>
        <meta name="description" content="Fiber Tech Services" />
        <meta
          name="google-site-verification"
          content="GXW489isAHnbMmnIQk2Zk7PhY4HUMtgpBKffVJGbLKI"
        />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" />
      </head>
      <body className={inter.className}>
        <ScrollToTop />
        <Navbar />

        {/* Wrap ClientLayout in Suspense to show a loading screen */}
        <Suspense fallback={<Loading />}>
          <main className="overflow-x-hidden">{children}</main>
        </Suspense>
        {/* <WhatsAppIcon/> */}
        <button
          style={{
            position: "fixed",
            bottom: "90px",
            right: "30px",
            border: "none",
            zIndex: 1000,
            cursor: "pointer",
          }}
        >
          <div className="relative">
            <span className="absolute -top-8 -left-12 w-24 sr-only">
              Contact-us
            </span>
            <a href="https://wa.me/14438126432" target="_blank">
              <IconWhatsappFill fill="#32b646" className="w-12 h-12" />
            </a>
          </div>
        </button>
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
