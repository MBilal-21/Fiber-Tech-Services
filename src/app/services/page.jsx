import QuoteForm from "@/components/QuoteForm";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Digital Marketing And Customized It Solutions Services In USA",
  description:
    "Get the best marketing, IT, and customized solutions services in the USA. Drive business growth with expert digital marketing, tailored IT support, and unique strategies.",
    alternates: {
      canonical: "https://fibertechservices.net/services", // Add your canonical URL here
    },
};

const services = [
  {
    name: "Web Development Services",
    subServices: [
      {
        imageSrc: "/Assets/services-images/web-development-by-fiber-tech.webp",
        imageAlt: "Custom Web Development",
        name: "Custom Web Development",
        link: "/services/custom-web-development",
      },
      {
        imageSrc: "/Assets/services-images/custom-web-app-development0.webp",
        imageAlt: "Custom Web App Development",
        name: "Custom Web App Development",
        link: "services/custom-web-app-development",
      },
      {
        imageSrc: "/Assets/services-images/wordpress.svg",
        imageAlt: "WordPress Website Development",
        name: "WordPress Website Development",
        link: "/services/wordpress-website-development",
      },
    ],
  },
  {
    name: "Information Technology Services",
    subServices: [
      {
        imageSrc: "/Assets/services-images/cyber-security-services.webp",
        imageAlt: "Cyber Security Services",
        name: "Cyber Security ",
        link: "/services/cyber-security",
      },
    ],
  },
  {
    name: "Digital Marketing Services",
    subServices: [
      {
        imageSrc: "/Assets/services-images/email-marketting.svg",
        imageAlt: "Email Marketing Services",
        name: "Email Marketing ",
        link: "/services/email-marketing",
      },
      {
        imageSrc: "/Assets/services-images/sms-marketing-services.webp",
        imageAlt: "SMS Marketing Services",
        name: "SMS Marketing ",
        link: "/services/sms-marketing",
      },
      {
        imageSrc: "/Assets/services-images/ppc-adds-services.webp",
        imageAlt: "PPC Ads ",
        name: "PPC (Pay Per Click) Ads",
        link: "/services/ppc-ads",
      },
      {
        imageSrc: "/Assets/services-images/seo.webp",
        imageAlt: "Search Engine Optimization (SEO) Services",
        name: "Search Engine Optimization (SEO) ",
        link: "/services/search-engine-optimization",
      },
      {
        imageSrc: "/Assets/services-images/Social-Media-Management.svg",
        imageAlt: "Social Media Marketing",

        name: "Social Media Marketing",
        link: "/services/social-media-marketing",
      },
    ],
  },
  {
    name: "Creative Design Services",
    subServices: [
      {
        imageSrc: "/Assets/services-images/Graphic-Designer.svg",
        imageAlt: "Graphic Designing Services",
        name: "Graphic Designing",
        link: "/services/graphic-designing",
      },
    ],
  },
];

const OurServives = () => {
  return (
    <>
      <div className="mx-auto  max-w-7xl  px-6  lg:px-8">
        <div className="text-center py-12 ">
          <h2 className=" py-2 text-lg font-bold text-custom-blue">
            Our Core Services
          </h2>
          <h2 className="text-gray-900 font-bold text-2xl md:text-5xl pb-4">
            {" "}
            What We Offer
          </h2>
        </div>
        {services.map((serve, i) => {
          return (
            <div key={i}>
              <div className="text-center">
                <h2 className="text-gray-900 font-bold text-2xl md:text-4xl pb-4">
                  {" "}
                  {serve.name}
                </h2>
              </div>
              <div className="flex flex-wrap justify-center items-center">
                {serve.subServices.map((s, index) => {
                  return (
                    <div
                      key={index + "" + i}
                      className="w-full md:w-1/2 xl:w-1/3 p-4 "
                    >
                      <div
                        className="w-full border-2 border-custom-blue rounded-2xl"
                        style={{ height: "300px", overflow: "hidden" }}
                      >
                        <Link href={s.link} className="group">
                          {" "}
                          <Image
                            src={
                              s.imageSrc ||
                              "/Assets/services-images/product-design.jpg"
                            }
                            width={2000}
                            height={2000}
                            alt={s.imageAlt}
                            className="w-full h-full object-cover group-hover:scale-110 transition-all"
                          />
                        </Link>
                      </div>
                      <Link
                        href={"/services/custom-web-development"}
                        className="group"
                      >
                        {" "}
                        <div className="text-center pt-4 font-bold text-lg text-custom-blue">
                          {s.name}
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      {/* looking for quote form */}
      <QuoteForm />
    </>
  );
};

export default OurServives;

// {/* <div className="w-full md:w-1/2 xl:w-1/3 p-4 ">
//           <div>
//           <Link href={"/services/custom-web-development-app-service"} > <Image src="/Assets/services-images/product-design.jpg" width={2000} height={2000} alt="-" className="w-full h-auto border-2 border-custom-blue rounded-2xl"/></Link>
//           </div>
//          <Link href={"/services/custom-web-development-app-service"}> <div className="text-center pt-4 font-bold text-lg">Custom Web App Development</div></Link>
//         </div> */}
//         {/* <div className="w-full md:w-1/2 xl:w-1/3 p-4 ">
//           <div>
//             <Image src="/Assets/services-images/product-design.jpg" width={2000} height={2000} alt="-" className="w-full h-auto border-2 border-custom-blue rounded-2xl"/>
//           </div>
//           <div className="text-center pt-4 font-bold text-lg">Product Designing</div>
//         </div>
//         <div className="w-full md:w-1/2 xl:w-1/3 p-4 ">
//           <div>
//             <Image src="/Assets/services-images/product-design.jpg" width={2000} height={2000} alt="-" className="w-full h-auto border-2 border-custom-blue rounded-2xl"/>
//           </div>
//           <div className="text-center pt-4 font-bold text-lg">Product Designing</div>
//         </div>
//         <div className="w-full md:w-1/2 xl:w-1/3 p-4 ">
//           <div>
//             <Image src="/Assets/services-images/product-design.jpg" width={2000} height={2000} alt="-" className="w-full h-auto border-2 border-custom-blue rounded-2xl"/>
//           </div>
//           <div className="text-center pt-4 font-bold text-lg">Product Designing</div>
//         </div>
//         <div className="w-full md:w-1/2 xl:w-1/3 p-4 ">
//           <div>
//             <Image src="/Assets/services-images/product-design.jpg" width={2000} height={2000} alt="-" className="w-full h-auto border-2 border-custom-blue rounded-2xl"/>
//           </div>
//           <div className="text-center pt-4 font-bold text-lg">Product Designing</div>
//         </div> */}
