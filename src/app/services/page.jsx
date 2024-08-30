import CompanyStatistic from "@/components/CompanyStatistic";
import PricingPlan from "@/components/PricingPlan";
import TopPage from "@/components/TopPage";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon, PlusIcon } from "@heroicons/react/24/outline";
import WhatWeProvide from "@/components/ServiceSlider";

const Services = () => {
  return (
    <div>
      <TopPage cureentText={"Services"} />
      {/* service area section start */}
      <section className="services-area-three overflow-hidden py-16 relative z-1">
        <div className="mx-auto  max-w-7xl  px-6  lg:px-8">
          <div className="flex flex-wrap  items-center">
            <div className="w-full lg:w-5/12 ">
              <div
                className="wow fadeInUp delay-0-2s animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div>
                  <span className=" py-2 text-lg font-bold text-custom-blue">
                    Amazing Services
                  </span>
                  <h2 className="text-gray-900 font-bold text-2xl md:text-5xl pb-4">
                    We Provide Best IT Services to Growth you Business
                  </h2>
                </div>
                <p></p>
                <ul className="list-style-one pt-5">
                  <li>Comprehensive UI/UX Assessment</li>
                  <li>Deep Contextual Research and 360° Planning</li>
                  <li>Wireframing &amp; Prototyping</li>
                </ul>
                <Link
                  href="/services"
                  className="theme-btn bg-custom-blue text-gray-900 after:bg-custom-green hover:text-white p-4 "
                >
                  View All Services <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-7/12 ">
              <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 p-4">
                  <div
                    className="group transition-all hover:bg-custom-blue p-6 bg-white shadow-lg mt-16 mb-8 text-center wow fadeInUp delay-0-2s animated"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="icon flex justify-center mb-4">
                      <Image
                        className="group-hover:brightness-[5.5]"
                        src={"/Assets/icons/png/trust.png"}
                        width={64}
                        height={64}
                        alt="trust"
                      />
                    </div>
                    <Link
                      href="/service-details"
                      className="text-gray-900 group-hover:text-white"
                    >
                      <h4 className="font-bold text-xl pb-4">
                        Trusted Partner
                      </h4>
                    </Link>
                    <p className="text-lg text-gray-500 pb-4 group-hover:text-white">
                      With over 20 year of experience 850+ employees flexion
                    </p>
                    <Link
                      className="mx-auto border-2 flex w-max p-2 group-hover:bg-custom-green group-hover:border-transparent transition-all"
                      href="/service-details"
                    >
                      <ChevronRightIcon className="h-6 w-6 text-gray-500  stroke-[2px]" />
                    </Link>
                  </div>
                  <div
                    className="group transition-all hover:bg-custom-blue text-center px-6 py-12 bg-white shadow-lg  wow fadeInUp delay-0-2s animated"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="icon flex justify-center mb-4">
                      <Image
                        className="group-hover:brightness-[5.5]"
                        src={"/Assets/icons/png/social-media.png"}
                        width={64}
                        height={64}
                        alt="social-media"
                      />
                    </div>
                    <Link
                      href="/service-details"
                      className="text-gray-900 group-hover:text-white"
                    >
                      <h4 className="font-bold text-xl pb-4">
                        Digital Marketing
                      </h4>
                    </Link>
                    <p className="text-lg text-gray-500 pb-4 group-hover:text-white">
                      With over 20 year of experience 850+ employees flexion
                    </p>
                    <Link
                      className="mx-auto border-2 flex w-max p-2 group-hover:bg-custom-green group-hover:border-transparent transition-all"
                      href="/service-details"
                    >
                      <ChevronRightIcon className="h-6 w-6 text-gray-500  stroke-[2px]" />
                    </Link>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 p-4">
                  <div
                    className="group transition-all hover:bg-custom-blue px-6 py-12 text-center bg-white shadow-lg mb-8 wow fadeInDown delay-0-2s animated"
                    style={{
                      visibility: "visible",
                      animationName: "fadeInDown",
                    }}
                  >
                    <div className="icon flex justify-center mb-4">
                      <Image
                        className="group-hover:brightness-[5.5]"
                        src={"/Assets/icons/png/technical-support.png"}
                        width={64}
                        height={64}
                        alt="technical-support"
                      />
                    </div>
                    <Link
                      href="/service-details"
                      className="text-gray-900 group-hover:text-white"
                    >
                      <h4 className="font-bold text-xl pb-4">
                        Technical Support
                      </h4>
                    </Link>
                    <p className="text-lg text-gray-500 pb-4 group-hover:text-white">
                      With over 20 year of experience 850+ employees flexion
                    </p>
                    <Link
                      className="mx-auto border-2 flex w-max p-2 group-hover:bg-custom-green group-hover:border-transparent transition-all"
                      href="/service-details"
                    >
                      <ChevronRightIcon className="h-6 w-6 text-gray-500  stroke-[2px]" />
                    </Link>
                  </div>
                  <div
                    className="group transition-all hover:bg-custom-blue p-6 bg-white text-center shadow-lg  wow fadeInDown delay-0-2s animated"
                    style={{
                      visibility: "visible",
                      animationName: "fadeInDown",
                    }}
                  >
                    <div className="icon flex justify-center mb-4">
                      <Image
                        className="group-hover:brightness-[5.5]"
                        src={"/Assets/icons/png/brainstorming.png"}
                        width={64}
                        height={64}
                        alt="brainstorming"
                      />
                    </div>
                    <Link
                      href="/service-details"
                      className="text-gray-900 group-hover:text-white"
                    >
                      <h4 className="font-bold text-xl pb-4">IT Consulting</h4>
                    </Link>
                    <p className="text-lg text-gray-500 pb-4 group-hover:text-white">
                      With over 20 year of experience 850+ employees flexion
                    </p>
                    <Link
                      className="mx-auto border-2 flex w-max p-2 group-hover:bg-custom-green group-hover:border-transparent transition-all"
                      href="/service-details"
                    >
                      <ChevronRightIcon className="h-6 w-6 text-gray-500  stroke-[2px]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="servcies-bg-shape -z-10 relative">
          <Image
            className="w-6/12 h-auto absolute top-0 right-0"
            src="/Assets/services-bg-shape.png"
            width={100}
            height={100}
            alt="Shape"
          />
        </div>
      </section>
      {/* service area section end */}
      {/* company stats section start */}
      <CompanyStatistic />
      {/* company stats section end */}
      {/* what we provide start */}
      <WhatWeProvide />
      {/* what we provide end */}
      {/* pricing plans section start */}
      <PricingPlan />
      {/* pricing plans section end */}
    </div>
  );
};

export default Services;
