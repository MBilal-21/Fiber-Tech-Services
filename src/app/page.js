"use client";
import "animate.css";
import Image from "next/image";
// import ScrollAnimationComponent from "@/components/Testui";
import { Button } from "@headlessui/react";
import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/20/solid";
export default function HomePage() {
  return (
    <div>
      {/* cover section start */}
      <section className="bg-custom-dark home">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          {/* main cover content */}
          <div className="mx-auto max-w-7xl py-16 sm:py-30 lg:py-40 flex justify-between flex-col md:flex-row text-white">
            <div className="column-6 animate-fadeInUp">
              <h1 className="text-4xl font-bold tracking-tight text-white-900  sm:text-6xl">
                Affordable IT & <br /> Technology{" "}
                <br className="hidden md:inline" /> Solutions
              </h1>
              <p className="mt-6 text-lg leading-8 text-white-600">
                Scale Your Business with FTS DevOps and Software Development{" "}
                <br />
                Services.
              </p>
              <Button className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
                Let gets Started <span aria-hidden="true">&rarr;</span>
              </Button>
            </div>
            <div className="column-6 backdrop-blur-sm animate__animated animate__lightSpeedInRight">
              <form className="from-bg mt-6 md:mt-0">
                {/* className="space-y-12" */}
                <div>
                  <div className="border-b border-custom-blue pb-4">
                    <h2 className="text-center text-3xl font-semibold leading-7 text-custom-green">
                      Get A Qoute
                    </h2>
                  </div>

                  <div>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium leading-6 text-white"
                        >
                          First name
                        </label>
                        <div className="mt-2">
                          <input
                            id="first-name"
                            name="first-name"
                            type="text"
                            autoComplete="given-name"
                            placeholder="First Name"
                            className="block bg-transparent w-full rounded-md border-0 py-1.5 text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium leading-6 text-white"
                        >
                          Last name
                        </label>
                        <div className="mt-2">
                          <input
                            id="last-name"
                            name="last-name"
                            type="text"
                            placeholder="Last Name"
                            autoComplete="family-name"
                            className="block bg-transparent w-full rounded-md border-0 py-1.5 text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium leading-6 text-white"
                        >
                          Email address
                        </label>
                        <div className="mt-2">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="example@example.com"
                            className="block bg-transparent w-full rounded-md border-0 py-1.5 text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label
                          htmlFor="Services"
                          className="block text-sm font-medium leading-6 text-white"
                        >
                          Services
                        </label>
                        <div className="mt-2">
                          <select
                            id="Services"
                            name="Services"
                            autoComplete="Services-name"
                            className="block bg-gray-900 w-full rounded-md border-0 py-1.5 text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                          >
                            <option className=" py-1.5">
                              --Choose A Service--
                            </option>
                            <option className=" py-1.5">Web Development</option>
                            <option className=" py-1.5">App Development</option>
                            <option className=" py-1.5">
                              Graphic Designing
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-center w-full">
                  <button
                    type="submit"
                    className="w-full  mx-12 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="homeFormBack block absolute bottom-0 right-0  sm:max-w-2xl w-full sm:h-full">
            <img src="/Assets/Untitled1.png" alt="Fiber-tech-services-bg" />
          </div>
        </div>
      </section>
      {/* cover section end */}

      {/* Global Partners section start */}

      <section className="bg-white">
        <div className="py-12  md:container md:mx-auto px-4 text-center">
          <div>
            <h2 className=" py-2 text-lg font-bold text-custom-blue">
              Global Partners
            </h2>
            <p className="text-gray-900 font-bold text-2xl md:text-5xl pb-4">
              World Wide Technology Partners
            </p>
          </div>
          {/*  */}
          <div>
            <div className="flex flex-wrap justify-center partner-images gap-4">
              <Link
                href="/contact"
                className="parter-link w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
              >
                <Image
                  className="partner-image  hover:scale-110"
                  src={"/Assets/fiber-tech-partner-1.png"}
                  width={150}
                  height={150}
                  alt="fiber-tech-serivices"
                />
              </Link>
              <Link
                href="/contact"
                className="parter-link w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
              >
                <Image
                  className="partner-image hover:scale-110"
                  src={"/Assets/fiber-tech-partner-2.png"}
                  width={150}
                  height={150}
                  alt="fiber-tech-serivices"
                />
              </Link>
              <Link
                href="/contact"
                className="parter-link w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
              >
                <Image
                  className="partner-image hover:scale-110"
                  src={"/Assets/fiber-tech-partner-3.png"}
                  width={150}
                  height={150}
                  alt="fiber-tech-serivices"
                />
              </Link>
              <Link
                href="/contact"
                className="parter-link w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
              >
                <Image
                  className="partner-image hover:scale-110"
                  src={"/Assets/fiber-tech-partner-4.png"}
                  width={150}
                  height={150}
                  alt="fiber-tech-serivices"
                />
              </Link>
              <Link
                href="/contact"
                className="parter-link w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
              >
                <Image
                  className="partner-image hover:scale-110"
                  src={"/Assets/fiber-tech-partner-5.png"}
                  width={150}
                  height={150}
                  alt="fiber-tech-serivices"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Global Partners section end */}

      {/* About Company section start */}
      <section className="about-company ">
        <div className="py-12  md:container md:mx-auto px-4 grid md:grid-cols-2 gap-4 place-content-between">
          <div>
            <h2 className=" py-2 text-lg font-bold text-custom-blue">
              About Company
            </h2>
            <p className="text-gray-900 font-bold text-2xl md:text-5xl pb-4">
              Small Enough to Care Big <br />
              Enough to Success
            </p>
            <p className="text-gray-500 pb-4">
              FTS is small enough to provide personalized attention and care to
              its clients, but also has the resources and capabilities to be
              successful in their operations. The balance of being approachable
              and capable can make for a positive customer experience.
            </p>
            {/* ----------------------------------------- */}
            <div className="grid grid-cols-2 gap-4">
              <button className="button">
                {" "}
                Learn More <span aria-hidden="true">&rarr;</span>{" "}
              </button>
              <div className="flex gap-4">
                <PhoneIcon
                  className="h-12 w-12 text-custom-blue border-2 border-gray-500  "
                  style={{ borderRadius: "50%", padding: "5px" }}
                />
                <div>
                  <p>Hotline</p>
                  <a
                    className="text-gray-500 hover:text-custom-blue transition-all ease-in-out font-bold  duration-300"
                    href="callto:+923498606006"
                  >
                    888 572 9311
                  </a>
                  {/* <a href="tel:888 572 9311">888 572 9311</a> */}
                </div>
              </div>
            </div>

            {/* ---------------------------------------- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 for-active gap-4 mt-6">
              {/* --------------------------------------- */}
              <div className="p-2 text-justify hover:shadow-2xl">
                <div className="service-item active">
                  <div className="icon">
                    <img src="Assets/fiber-tech-it-consultant.png" alt="fiber-tech-it-consultant" />
                  </div>
                  <h4>
                    <Link href="/service-details" className="leading-8 text-lg font-semibold hover:text-custom-green transition-all duration-1000">IT Consulting</Link>
                  </h4>
                  <p className="text-gray-500">
                    IT Consulting is a professional service that provides advice
                    and expertise to organizations on various aspects of
                    information technology. The objective of IT consultancy is
                    to help companies optimize their technology systems and
                    processes to improve efficiency, reduce costs, and drive
                    business growth. IT consultants assess the current
                    technology infrastructure, identify areas for improvement,
                    and provide recommendations and solutions that align with
                    the company's goals and objectives.
                  </p>
                </div>
              </div>
              {/* ---------------------------- */}
              <div className="p-2 text-justify hover:shadow-2xl">
                <div className="service-item">
                  <div className="icon">
                    <img src="Assets/fiber-tech-bussiness-growth.png" alt="fiber-tech-bussiness-growth" />
                  </div>
                  <h4>
                    <Link href="/service-details" className="leading-8 text-lg font-semibold hover:text-custom-green transition-all duration-1000">Business Growth</Link>
                  </h4>
                  <p className="text-gray-500">
                    {" "}
                    Business Growth refers to an increase in the size, revenue,
                    or market share of a company over time. This can be achieved
                    through various strategies, such as expanding product lines,
                    entering new markets, increasing marketing efforts,
                    improving operational efficiency, and acquiring other
                    businesses. Effective business growth can lead to increased
                    profitability, competitiveness, and long-term sustainability
                    for a company.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-images p-6 m-auto">
            <div className="top-part">
              <img
                className="wow fadeInRight delay-0-3s animated"
                src="/Assets/fiber-tech-service-about1.jpg"
                alt="fiber-tech-service-about1"
                style={{ visibility: "visible", animationName: " fadeInRight" }}
              />
              <img
                className="wow zoomIn delay-0-5s animated"
                src="/Assets/design-images/fiber-tech-service-about-logo.png"
                alt="fiber-tech-service-about-logo"
                style={{ visibility: "visible", animationName: "zoomIn" }}
              />
            </div>
            <div className="bottom-part">
              <img
                className="wow fadeInDown delay-0-5s animated"
                src="/Assets/design-images/fiber-tech-service-about-dots.png"
                alt="fiber-tech-service-about-dots"
                style={{ visibility: "visible", animationName: "fadeInDown" }}
              />
              <img
                className="wow fadeInDown delay-0-3s animated"
                src="/Assets/fiber-tech-service-about2.jpg"
                alt="About"
                style={{ visibility: "visible", animationName: "fadeInDown" }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* About Company section end */}

      {/* <ScrollAnimationComponent /> */}
    </div>
  );
}
