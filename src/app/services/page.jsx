import QuoteForm from "@/components/QuoteForm";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    name: "Web Development",
    subServices: [
      {
        imageSrc: "/Assets/services-images/web-development-by-fiber-tech.webp",
        imageAlt: "Custom Web Development",
        name: "Custom Web Development",
        link: "/services/custom-web-development-service",
      },
      {
        imageSrc: "/Assets/services-images/custom-web-app-development0.webp",
        imageAlt: "Custom Web App Development",
        name: "Custom Web App Development",
        link: "/services/custom-web-development-app-service",
      },
    ],
  },
  {
    name: "Information Technology",
    subServices: [
      {
        imageSrc: "/Assets/services-images/cyber-security-services.webp",
        imageAlt: "Cyber Security Services",
        name: "Cyber Security Services",
        link: "/services/cyber-security-services",
      },
    ],
  },
  {
    name: "Digital Marketing Services",
    subServices: [
      {
        imageSrc: "/Assets/services-images/email-marketting.svg",
        imageAlt: "Email Marketing Services",
        name: "Email Marketing Services",
        link: "/services/email-marketing-services",
      },
      {
        imageSrc: "/Assets/services-images/sms-marketing-services.webp",
        imageAlt: "SMS Marketing Services",
        name: "SMS Marketing Services",
        link: "/services/sms-marketing-services",
      },
      {
        imageSrc: "/Assets/services-images/ppc-adds-services.webp",
        imageAlt: "PPC Ads Services",
        name: "PPC Ads Services",
        link: "/services/ppc-sds-services",
      },
      {
        imageSrc: "/Assets/services-images/seo.webp",
        imageAlt: "Search Engine Optimization (SEO) Services",
        name: "Search Engine Optimization (SEO) Services",
        link: "/services/search-engine-optimization-services",
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
                {serve.subServices.map((s,index)=>{

               return <div key={index +"" +i} className="w-full md:w-1/2 xl:w-1/3 p-4 ">
                  <div className="w-full border-2 border-custom-blue rounded-2xl" style={{height:"300px", overflow:"hidden"}}>
                    <Link href={s.link} className="group">
                      {" "}
                      <Image
                        src={s.imageSrc || "/Assets/services-images/product-design.jpg"}
                        width={2000}
                        height={2000}
                        alt={s.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-all"
                        
                      />
                    </Link>
                  </div>
                  <Link
                    href={"/services/custom-web-development-service"}
                    className="group"
                  >
                    {" "}
                    <div className="text-center pt-4 font-bold text-lg text-custom-blue">
                      {s.name}
                    </div>
                  </Link>
                </div> })}
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
