import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToUpBtn";
import Loading from "@/components/Loading"; // Import Loading component
import { Suspense } from "react"; // Import Suspense
import Script from "next/script";
// import IconWhatsappFill from "@/components/Icons/IconWhatsapp";
import WhatsAppIcon from "@/components/WhatsAppIcon";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Marketing, IT And Customized Solutions Services In USA",
  description:
    "Boost your business with Fiber Tech digital marketing and IT services in USA. From web development to SEO, we offer customized solutions to drive growth and success.",
  alternates: {
    canonical: "https://fibertechservices.net", // Add your canonical URL here
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Fiber Tech Services LLC",
    image:
      "https://fibertechservices.net/_next/image?url=%2FAssets%2Ffiber-tech-service-about2.jpg&w=640&q=75",
    "@id": "https://fibertechservices.net/",
    url: "https://fibertechservices.net/",
    telephone: "+1 (307) 203-3450",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "30 N Gould St, Ste 20128",
      addressLocality: "Sheridan",
      addressRegion: "WY",
      postalCode: "WY 82801",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 44.7977766,
      longitude: -106.9549483,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: "https://fibertechservices.net/",
  };

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="GXW489isAHnbMmnIQk2Zk7PhY4HUMtgpBKffVJGbLKI"
        />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ScrollToTop />
        <Navbar />

        {/* Wrap ClientLayout in Suspense to show a loading screen */}
        <Suspense fallback={<Loading className={"h-screen"} />}>
          <main className="overflow-x-hidden">{children}</main>
        </Suspense>
        <WhatsAppIcon />

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
