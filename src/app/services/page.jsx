import QuoteForm from "@/components/QuoteForm";
import React from "react";
import Image from "next/image";

const OurServives = () => {
  return (
    <>
    <div className="mx-auto  max-w-7xl  px-6  lg:px-8">
      <div className="text-center py-12 ">
        <h2 className=" py-2 text-lg font-bold text-custom-blue">Our Core Services</h2>
        <h2 className="text-gray-900 font-bold text-2xl md:text-5xl pb-4">
          {" "}
          What We Offer
        </h2>
       
      </div>
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full md:w-1/2 xl:w-1/3 p-4 ">
          <div>
            <Image src="/Assets/services-images/product-design.jpg" width={2000} height={2000} alt="-" className="w-full h-auto border-2 border-custom-blue rounded-2xl"/>
          </div>
          <div className="text-center pt-4 font-bold text-lg">Product Designing</div>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4 ">
          <div>
            <Image src="/Assets/services-images/product-design.jpg" width={2000} height={2000} alt="-" className="w-full h-auto border-2 border-custom-blue rounded-2xl"/>
          </div>
          <div className="text-center pt-4 font-bold text-lg">Product Designing</div>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4 ">
          <div>
            <Image src="/Assets/services-images/product-design.jpg" width={2000} height={2000} alt="-" className="w-full h-auto border-2 border-custom-blue rounded-2xl"/>
          </div>
          <div className="text-center pt-4 font-bold text-lg">Product Designing</div>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4 ">
          <div>
            <Image src="/Assets/services-images/product-design.jpg" width={2000} height={2000} alt="-" className="w-full h-auto border-2 border-custom-blue rounded-2xl"/>
          </div>
          <div className="text-center pt-4 font-bold text-lg">Product Designing</div>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4 ">
          <div>
            <Image src="/Assets/services-images/product-design.jpg" width={2000} height={2000} alt="-" className="w-full h-auto border-2 border-custom-blue rounded-2xl"/>
          </div>
          <div className="text-center pt-4 font-bold text-lg">Product Designing</div>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4 ">
          <div>
            <Image src="/Assets/services-images/product-design.jpg" width={2000} height={2000} alt="-" className="w-full h-auto border-2 border-custom-blue rounded-2xl"/>
          </div>
          <div className="text-center pt-4 font-bold text-lg">Product Designing</div>
        </div>

      </div>
    </div>
      {/* looking for quote form */}
      <QuoteForm/>
    </>
  );
};

export default OurServives;
