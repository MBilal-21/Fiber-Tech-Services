"use client";
import "animate.css";
import Image from "next/image";
import { Button } from "@headlessui/react";
import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/20/solid";
import ImageSlider from "@/components/test-slide";
import CompanyStatistic from "@/components/CompanyStatistic";
import PricingPlan from "@/components/PricingPlan";

export default function HomePage() {
  return (
    <div>
      {/* cover section start */}
      <section className="bg-custom-dark home">
        <div className="relative isolate px-6 mt-4  lg:px-8">
          {/* main cover content */}
          <div className="mx-auto max-w-7xl py-16 sm:py-30 lg:py-38 flex justify-between flex-col md:flex-row text-white">
            <div className="column-6 animate-fadeInUp">
              <h1 className="text-4xl font-bold tracking-tight text-white-900  sm:text-6xl">
                Affordable IT & <br /> Technology{" "}
                <br className="hidden md:inline" /> Solutions
              </h1>
              <p className="mt-6 mb-2 text-lg leading-8 text-white-600">
                Scale Your Business with FTS DevOps and Software Development{" "}
                <br />
                Services.
              </p>
              <Button className="block rounded bg-indigo-500 px-8 py-3 font-medium text-white transition hover:bg-indigo-600">
                Let gets Started <span aria-hidden="true">&rarr;</span>
              </Button>
            </div>
            <div className="column-6 backdrop-blur-sm animate__animated animate__lightSpeedInRight">
              <form className="from-bg mt-6 md:mt-0">
                {/* className="space-y-12" */}
                <div>
                  <div className="border-b border-custom-blue pb-4">
                    <h2 className="text-center text-3xl font-semibold leading-7 text-white">
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
                            className="block bg-gray-900/40 w-full rounded-md border-0 py-1.5 text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
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

      {/* About Company section start */}
      <section className="about-company ">
        <div className="py-12  mx-auto  max-w-7xl  px-6  lg:px-8 grid md:grid-cols-2 gap-4 place-content-between">
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
                    href="callto:888 572 9311"
                  >
                    888 572 9311
                  </a>
                </div>
              </div>
            </div>

            {/* ---------------------------------------- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 for-active gap-4 mt-6">
              {/* --------------------------------------- */}
              <div className="p-2 hover:shadow-2xl">
                <div className="service-item active">
                  <div className="icon">
                    <Image
                      src="/Assets/fiber-tech-it-consultant.png"
                      alt="fiber-tech-it-consultant"
                      width={60}
                      height={60}
                      layout="intrinsic"
                    />
                  </div>
                  <h4>
                    <Link
                      href="/service-details"
                      className="leading-8 text-lg font-semibold hover:text-custom-green transition-all duration-1000"
                    >
                      IT Consulting
                    </Link>
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
                    the company goals and objectives.
                  </p>
                </div>
              </div>
              {/* ---------------------------- */}
              <div className="p-2 hover:shadow-2xl">
                <div className="service-item">
                  <div className="icon">
                    <Image
                      src="/Assets/fiber-tech-bussiness-growth.png"
                      alt="fiber-tech-bussiness-growth"
                      layout="intrinsic"
                      width={60}
                      height={60}
                    />
                    {/* <img src="Assets/fiber-tech-bussiness-growth.png" alt="fiber-tech-bussiness-growth" /> */}
                  </div>
                  <h4>
                    <Link
                      href="/service-details"
                      className="leading-8 text-lg font-semibold hover:text-custom-green transition-all duration-1000"
                    >
                      Business Growth
                    </Link>
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

          {/* <div className="about-images py-6 m-auto">
            <div className="flex justify-center items-center gap-4">
              <Image 
                src="/Assets/fiber-tech-service-about1.jpg"
                alt="fiber-tech-service-about1"
                layout="intrinsic"
                width={410}
                height={495}
                style={{ visibility: "visible", animationName: " fadeInRight" }}/>
              <Image  
                src="/Assets/design-images/fiber-tech-service-about-logo.png"
                alt="fiber-tech-service-about-logo"
                layout="intrinsic"
                width={176}
                height={184}
                style={{ visibility: "visible", animationName: "zoomIn" }}/>
            </div>
            <div className="flex justify-center items-center gap-4">
            <Image  
                src="/Assets/design-images/fiber-tech-service-about-dots.png"
                alt="fiber-tech-service-about-dots"
                style={{ visibility: "visible", animationName: "fadeInDown" }}
                width={187}
                height={86}
                layout="intrinsic"
                />
            <Image   
                className="-mt-16"
                src="/Assets/fiber-tech-service-about2.jpg"
                alt="fiber-tech-service-about2"
                style={{ visibility: "visible", animationName: "fadeInDown" }}
                width={410}
                height={310}
                layout="intrinsic"
                />
            </div>
          </div> */}
          <div className="about-images p-6 m-auto">
            <div className="top-part">
              <img
                className=" animate__fadeInRight animate__delay-2s animate__animated"
                src="/Assets/fiber-tech-service-about1.jpg"
                alt="fiber-tech-service-about1"
                style={{ visibility: "visible", animationName: " fadeInRight" }}
              />
              <img
                className=" animate__zoomIn animate__delay-2s  animate__animated"
                src="/Assets/design-images/fiber-tech-service-about-logo.png"
                alt="fiber-tech-service-about-logo"
                style={{ visibility: "visible", animationName: "zoomIn" }}
              />
            </div>
            <div className="bottom-part">
              <img
                className=" animate__fadeInDown animate__delay-2s animate__animated"
                src="/Assets/design-images/fiber-tech-service-about-dots.png"
                alt="fiber-tech-service-about-dots"
                style={{ visibility: "visible", animationName: "fadeInDown" }}
              />
              <img
                className=" animate__fadeInDown animate__delay-2s animate__animated"
                src="/Assets/fiber-tech-service-about2.jpg"
                alt="About"
                style={{ visibility: "visible", animationName: "fadeInDown" }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* About Company section end */}

      {/* Services area start */}
      <section className=" bg-white pt-16 ">
        <div
          className="section-title text-center py-16  animate__fadeInUp animate__delay-2s animate__animated"
          style={{ visibility: "visible", animationName: "fadeInUp" }}
        >
          <span className="sub-title py-2 text-lg font-bold text-custom-blue">
            Latest Services
          </span>
          <h2 className="text-gray-900 font-bold text-2xl md:text-5xl py-4">
            We Provide Best IT Services
          </h2>
        </div>
        <div className="flex flex-wrap justify-center  mx-auto  max-w-7xl  px-6  lg:px-8">
          <div className="md:w-1/2 lg:w-1/4 px-2 py-3">
            <div
              className=" animate__fadeInUp animate__delay-2s animate__animated border-2 border-custom-blue rounded p-6 h-full flex flex-col items-center"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <div
                className="icon px-2"
                style={{ width: "64px", height: "64px" }}
              >
                <Image
                  src={"/Assets/icons/png/001-networking.png"}
                  width={64}
                  height={64}
                  alt="icon"
                />
              </div>
              <div>
                <h4 className="text-center">
                  <Link
                    href="/service-details"
                    className="leading-8 text-lg font-semibold hover:text-custom-green transition-all duration-1000"
                  >
                    Digital Consulting
                  </Link>
                </h4>
                <p className="text-gray-800 text-justify">
                  Digital consulting covers a wide range of services, including
                  website design and development, advertising, social media
                  marketing, content creation, and email marketing. By providing
                  these services, digital consultants help companies build a
                  strong online presence, reach and engage their target
                  audience, and drive business growth.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/4 px-2 py-3">
            <div
              className="animate__delay-2s animate__fadeInUp animate__animated border-2 border-custom-blue rounded p-6 h-full flex flex-col items-center"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <div
                className="icon px-2"
                style={{ width: "64px", height: "64px" }}
              >
                <Image
                  src={"/Assets/icons/png/002-coding.png"}
                  width={64}
                  height={64}
                  alt="icon"
                />
              </div>
              <div>
                <h4 className="text-center">
                  <Link
                    href="/service-details"
                    className="leading-8 text-lg font-semibold hover:text-custom-green transition-all duration-1000"
                  >
                    Design &amp; Development
                  </Link>
                </h4>
                <p className="text-gray-800 text-justify">
                  Design &amp; Development is a collaborative process that
                  involves close communication and coordination between the
                  design and development teams to ensure that the end product
                  meets the needs of the client and delivers a positive user
                  experience.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/4 px-2 py-3">
            <div
              className="animate__delay-2s animate__fadeInUp animate__animated border-2 border-custom-blue rounded p-6 h-full flex flex-col items-center"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <div
                className="icon px-2"
                style={{ width: "64px", height: "64px" }}
              >
                <Image
                  src={"/Assets/icons/png/003-app-development.png"}
                  width={64}
                  height={64}
                />
              </div>
              <div>
                <h4 className="text-center">
                  <Link
                    href="/service-details"
                    className="leading-8 text-lg font-semibold hover:text-custom-green transition-all duration-1000"
                  >
                    Mobile App Solutions
                  </Link>
                </h4>
                <p className="text-gray-800 text-justify">
                  The goal of a mobile app solution is to provide a convenient
                  and accessible way for users to interact with a company{"'"} s
                  products or services. This can help businesses improve
                  customer engagement, increase brand awareness, and drive
                  revenue growth.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/4 px-2 py-3">
            <div
              className="animate__delay-2s animate__fadeInUp animate__animated border-2 border-custom-blue rounded p-6 h-full flex flex-col items-center"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <div  style={{ width: "64px", height: "64px" }}>
                <Image
                  src={"/Assets/icons/png/logo.png"}
                  width={64}
                  height={64}
                  class="w-full h-auto"
                  // style={{filter: "invert(33%) sepia(50%) saturate(600%) hue-rotate(220deg) brightness(95%) contrast(90%)"}}
                />
             
              </div>
              <div>
                <h4 className="text-center">
                  <Link
                    href="/service-details"
                    className="leading-8 text-lg font-semibold hover:text-custom-green transition-all duration-1000"
                  >
                    UX/UI Design Strategy
                  </Link>
                </h4>
                <p className="text-gray-800 text-justify">
                  The goal of UX/UI design strategy is to create a product that
                  is easy to use, visually appealing, and provides a positive
                  user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-12">
          <Link
          href={"/services"}
            className="block w-max rounded-full bg-indigo-500 border-2 border-indigo-500 px-8 py-3 font-medium text-white transition hover:bg-transparent hover:text-gray-900"
            type="submit"
          >
            View All Services
          </Link>
        </div>
      </section>
      {/* Services area end */}

      {/* Work process section start */}

      <section className="work-process-area">
        <div
          className="section-title text-center py-16  animate__fadeInUp animate__delay-2s animate__animated"
          style={{ visibility: "visible", animationName: "fadeInUp" }}
        >
          <span className="sub-title py-2 text-lg font-bold text-custom-blue">
            Working Process
          </span>
          <h2 className="text-gray-900 font-bold text-2xl md:text-5xl py-4">
            Industry Best Practices to the Core
          </h2>
        </div>
        <div className="work-process-line text-center">
          <img
            src="/Assets/work-process-line.png"
            alt="fiber-tech-serce-work-line"
          />
        </div>
        <div className="mx-auto  max-w-7xl  px-6  lg:px-8">
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/5 px-2 mt-8">
              <div
                className="work-process-item  animate__fadeInUp animate__delay-2s animate__animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="number">01</div>
                <div className="content">
                  <h4 className="leading-8 text-2xl font-semibold mb-2">
                    Discover
                  </h4>
                  <p className="text-gray-500">
                    We emphasize planning get everything documented and nothing
                    is assumed.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/5 px-2 sm:mt-4 md:mt-2">
              <div
                className="work-process-item animate__fadeInDown animate__delay-2s animate__animated"
                style={{ visibility: "visible", animationName: "fadeInDown" }}
              >
                <div className="number">02</div>
                <div className="content">
                  <h4 className="leading-8 text-2xl font-semibold mb-2">
                    Planning
                  </h4>
                  <p className="text-gray-500">
                    Creating a roadmap or blueprint for achieving a specific
                    goal or objective. It involves defining the desired outcome,
                    identifying the steps needed to achieve it, and organizing
                    and prioritizing those steps
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/5 px-2 mt-8">
              <div
                className="work-process-item  animate__fadeInUp animate__delay-2s animate__animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="number">03</div>
                <div className="content">
                  <h4 className="leading-8 text-2xl font-semibold mb-2">
                    Design &amp; Dev
                  </h4>
                  <p className="text-gray-500">
                    It’s a collaborative process that involves close
                    communication and coordination between the design and
                    development teams to ensure that the end product meets the
                    needs of the client and delivers a positive user experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/5 px-2">
              <div
                className="work-process-item wow animate__fadeInDown animate__delay-2s animate__animated"
                style={{ visibility: "visible", animationName: "fadeInDown" }}
              >
                <div className="number">04</div>
                <div className="content">
                  <h4 className="leading-8 text-2xl font-semibold mb-2">
                    Testing
                  </h4>
                  <p className="text-gray-500">
                    Testing is the process of evaluating a product or system to
                    determine if it meets the specified requirements and quality
                    standards. It is a critical step in the product development
                    process and helps to identify and resolve any defects or
                    issues before the product is released to the public.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/5 px-2 mt-8">
              <div
                className="work-process-item mt-50  animate__fadeInUp animate__delay-2s animate__animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="number">05</div>
                <div className="content">
                  <h4 className="leading-8 text-2xl font-semibold mb-2">
                    Project Deliver
                  </h4>
                  <p className="text-gray-500">
                    Project delivery is an important aspect of the project
                    lifecycle and plays a critical role in ensuring that the
                    project is completed on time, within budget, and to the
                    satisfaction of all stakeholders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Work process section end */}

      {/* company statistic section start */}
      <CompanyStatistic />
      {/* company statistic section end */}
      {/* pricing plan section end */}
      <PricingPlan />

      {/* pricing plan section end */}
      {/* Global Partners section start */}

      <section className="bg-white">
        <div className="py-12  mx-auto  max-w-7xl  px-6  lg:px-8 text-center">
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

      {/* Testimonial section section start */}
      <section className="testimonials-area py-16">
        <div className="mx-auto  max-w-7xl  px-6  lg:px-8">
          <div className="flex flex-wrap items-center justify-center lg:justify-between">
            <div className="w-full xl:w-5/12 lg:w-1/2">
              <div
                className=" fadeInLeft delay-0-2s animated"
                style={{ visibility: "visible", animationName: "fadeInLeft" }}
              >
                <div className="">
                  <span className="py-2 text-lg font-bold text-custom-blue">
                    Our Testimonials
                  </span>
                  <h2 className="text-gray-900 font-bold text-2xl md:text-5xl pb-4">
                    What Our Clients Say About Solutions
                  </h2>
                </div>
                <div className="py-16">
                  <ImageSlider />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div
                className="testimonial-right-part wow fadeInRight delay-0-2s animated"
                style={{ visibility: "visible", animationName: "fadeInRight" }}
              >
                <img
                  src="/Assets/testi-img/testimonial.jpg"
                  alt="Testimonial"
                />
                <div className="testi-image-over">
                  <h3>We Have More 3248+ Reviews From Global Clients</h3>
                  <img src="/Assets/testi-img/signature.png" alt="Signature" />
                </div>
                <div className="dot-shapes">
                  <img
                    src="/Assets/testi-img/testimonial-dots.png"
                    alt="Dots"
                  />
                  <img
                    src="/Assets/testi-img/testimonial-dots.png"
                    alt="Dots"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial section section end */}

      {/* <ScrollAnimationComponent /> */}
    </div>
  );
}
