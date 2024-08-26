"use client";
import "animate.css";
import Image from "next/image";
// import ScrollAnimationComponent from "@/components/Testui";
import { Button } from "@headlessui/react";
import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/20/solid";
import ImageSlider from "@/components/test-slide";
import { PlayIcon } from "@heroicons/react/24/outline";

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
              <div className="p-2 text-justify hover:shadow-2xl">
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
              <div className="p-2 text-justify hover:shadow-2xl">
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
      <section className=" bg-custom-dark text-white pt-16 ">
        <div className="flex flex-wrap justify-center  md:container md:mx-auto px-4">
          <div className="md:w-1/2 lg:w-1/3 px-2 py-3">
            <div
              className=" animate__fadeInUp animate__delay-2s animate__animated"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <span className=" py-2 text-lg font-bold text-custom-blue">
                Latest Services
              </span>
              <h2 className="text-white font-bold text-2xl md:text-5xl pb-4">
                We Provide Best IT Services
              </h2>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/3 px-2 py-3">
            <div
              className=" animate__fadeInUp animate__delay-2s animate__animated  md:flex gap-2"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <div className="icon">
                <i className="flaticon-networking">hello</i>
              </div>
              <div className="content">
                <h4>
                  <Link
                    href="/service-details"
                    className="leading-8 text-lg font-semibold hover:text-custom-green transition-all duration-1000"
                  >
                    Digital Consulting
                  </Link>
                </h4>
                <p className="text-gray-200">
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
          <div className="md:w-1/2 lg:w-1/3 px-2 py-3">
            <div
              className="animate__delay-2s animate__fadeInUp animate__animated  md:flex gap-2"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <div className="icon">
                <i className="flaticon-coding">hello</i>
              </div>
              <div className="content">
                <h4>
                  <Link
                    href="/service-details"
                    className="leading-8 text-lg font-semibold hover:text-custom-green transition-all duration-1000"
                  >
                    Design &amp; Development
                  </Link>
                </h4>
                <p className="text-gray-200">
                  Design &amp; Development is a collaborative process that
                  involves close communication and coordination between the
                  design and development teams to ensure that the end product
                  meets the needs of the client and delivers a positive user
                  experience.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/3 px-2 py-3">
            <div
              className="animate__delay-2s animate__fadeInUp animate__animated md:flex gap-2"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <div className="icon">
                <i className="flaticon-app-development">hello</i>
              </div>
              <div className="content">
                <h4>
                  <Link
                    href="/service-details"
                    className="leading-8 text-lg font-semibold hover:text-custom-green transition-all duration-1000"
                  >
                    Mobile App Solutions
                  </Link>
                </h4>
                <p className="text-gray-200">
                  The goal of a mobile app solution is to provide a convenient
                  and accessible way for users to interact with a company's
                  products or services. This can help businesses improve
                  customer engagement, increase brand awareness, and drive
                  revenue growth.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/3 px-2 py-3">
            <div
              className="animate__delay-2s animate__fadeInUp animate__animated md:flex gap-2"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <div className="icon">
                <i className="flaticon-logo">hello</i>
              </div>
              <div className="content">
                <h4>
                  <Link
                    href="/service-details"
                    className="leading-8 text-lg font-semibold hover:text-custom-green transition-all duration-1000"
                  >
                    UX/UI Design Strategy
                  </Link>
                </h4>
                <p className="text-gray-200">
                  The goal of UX/UI design strategy is to create a product that
                  is easy to use, visually appealing, and provides a positive
                  user experience.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/3 px-2 py-3">
            <div
              className="animate__fadeInUp animate__delay-2s animate__animated md:flex gap-2"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <div className="icon">
                <i className="flaticon-seo">hello</i>
              </div>
              <div className="content">
                <h4>
                  <Link
                    href="/service-details"
                    className="leading-8 text-lg font-semibold hover:text-custom-green transition-all duration-1000"
                  >
                    SEO Optimization
                  </Link>
                </h4>
                <p className="text-gray-200">
                  The goal of SEO optimization is to increase the quantity and
                  quality of organic traffic to a website, making it easier for
                  users to find the site and increasing the chances of
                  attracting potential customers.
                </p>
              </div>
            </div>
          </div>
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
        <div className="md:container md:mx-auto px-4 ">
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
      <section className="statistics-area  mx-auto  max-w-9xl mt-4 px-6 lg:px-8">
        <div className="statistics-inner bgs-cover text-white  bg-[url('/Assets/fiber-tech-services-statistics.jpg')] bg-no-repeat bg-cover  p-8 ">
          <div className="flex flex-wrap items-center xl:items-start  mx-auto  max-w-7xl ">
            <div className="w-full lg:w-1/2 xl:w-5/12 p-2">
              <div
                className="statistics-content mb-55 wow fadeInUp delay-0-2s animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="section-title mb-30">
                  <span className="sub-title  py-2 text-lg font-bold text-gray-50">
                    Company Statistics
                  </span>
                  <h2 className="text-gray-50 font-bold text-2xl md:text-5xl py-5">
                    Learn About Our Company Statistics
                  </h2>
                </div>
                <div className="w-max">
                  <Link
                    href="/about"
                    className="read-more footer-btn font-semibold"
                  >
                    Learn More <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-7/12 p-2">
              <div className="flex flex-wrap items-center justify-center">
                <div className="w-1/2 sm:w-auto xl:w-1/4 p-2">
                  <div
                    className="counter-item counter-text-wrap wow fadeInDown delay-0-3s counted animated  text-center"
                    style={{
                      visibility: "visible",
                      animationName: "fadeInDown",
                    }}
                  >
                    <i className="flaticon-target"></i>
                    <span
                      className="count-text plus text-gray-50 font-bold text-2xl md:text-3xl "
                      data-speed="3000"
                      data-stop="2563"
                    >
                      2563
                    </span>
                    <span className="counter-title">Project Complete</span>
                  </div>
                </div>
                <div className="w-1/2 sm:w-auto xl:w-1/4 p-2">
                  <div
                    className="counter-item counter-text-wrap wow fadeInUp delay-0-3s counted animated  text-center"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <i className="flaticon-target-audience"></i>
                    <span
                      className="count-text percent text-gray-50 font-bold text-2xl md:text-3xl "
                      data-speed="3000"
                      data-stop="98.9"
                    >
                      98.9
                    </span>
                    <span className="counter-title">Clients Happy</span>
                  </div>
                </div>
                <div className="w-1/2 sm:w-auto xl:w-1/4 p-2">
                  <div
                    className="counter-item counter-text-wrap wow fadeInDown delay-0-3s counted animated  text-center"
                    style={{
                      visibility: "visible",
                      animationName: "fadeInDown",
                    }}
                  >
                    <i className="flaticon-customer-experience"></i>
                    <span
                      className="count-text plus text-gray-50 font-bold text-2xl md:text-3xl "
                      data-speed="3000"
                      data-stop="35.6"
                    >
                      35.6
                    </span>
                    <span className="counter-title">Years Experience</span>
                  </div>
                </div>
                <div className="w-1/2 sm:w-auto xl:w-1/4 p-2">
                  <div
                    className="counter-item counter-text-wrap wow fadeInUp delay-0-3s counted animated text-center"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <i className="flaticon-medal"></i>
                    <span
                      className="count-text k-plus text-gray-50 font-bold text-2xl md:text-3xl "
                      data-speed="3000"
                      data-stop="63"
                    >
                      63
                    </span>
                    <span className="counter-title">Award Winning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* company statistic section end */}
      {/* pricing plan section end */}
      <section className="price-plan-area  relative overflow-hidden">
        <div className="pt-24 md:container md:mx-auto px-4">
          <div
            className="section-title text-center wow fadeInUp delay-0-2s animated"
            style={{ visibility: "visible", animationName: "fadeInUp" }}
          >
            <span className="sub-title py-2 text-lg font-bold text-custom-blue">
              Amazing Pricing Plan
            </span>
            <h2 className="text-gray-900 font-bold text-2xl md:text-5xl pt-2 pb-8">
              Affordable Pricing Packages
            </h2>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 xl:w-1/3 p-2">
              <div
                className="pricing-plan-item wow fadeInUp delay-0-2s animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <span className="badge">Best Package</span>
                <h4 className="title leading-8 text-lg font-bold ">
                  Basic Plan
                </h4>
                <span className="price-count py-2 text-sm font-semibold text-custom-blue">
                  5 Services Included
                </span>
                <p className="price text-gray-900 font-semibold text-2xl md:text-4xl pb-4 text-center">
                  99.99
                </p>
                <Link
                  href="/contact"
                  className="theme-btn bg-custom-green text-gray-50 after:bg-custom-blue hover:text-black"
                >
                  Choose Package <span aria-hidden="true">&rarr;</span>
                </Link>
                <h5 className="leading-6 text-lg font-bold">
                  This Plan Included :
                </h5>
                <ul className="text-gray-600">
                  <li>
                    <PlayIcon className="h-6 w-6 pr-2 text-gray-600" />
                    Premium Quality Supports (24/7)
                  </li>
                  <li>
                    <PlayIcon className="h-6 w-6 pr-2 text-gray-600" />
                    IT Consultations (Business Growth)
                  </li>
                  <li>
                    <PlayIcon className="h-6 w-6 pr-2 text-gray-600" />
                    Web Design &amp; Development
                  </li>
                  <li>
                    <PlayIcon className="h-6 w-6 pr-2 text-gray-600" />
                    Search Engine Optimization (SEO )
                  </li>
                  <li>
                    <PlayIcon className="h-6 w-6 pr-2 text-gray-600" />
                    User &amp; Market Research
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-2">
              <div
                className="pricing-plan-item wow fadeInUp delay-0-4s animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <span className="badge">Best Package</span>
                <h4 className="title leading-8 text-lg font-bold">
                  standard Plan
                </h4>
                <span className="price-count py-2 text-sm font-semibold text-custom-blue">
                  7 Services Included
                </span>
                <p className="price text-gray-900 font-bold text-2xl md:text-4xl pb-4 text-center">
                  149.99
                </p>
                <Link
                  href="/contact"
                  className="theme-btn bg-custom-green text-gray-50 after:bg-custom-blue hover:text-black"
                >
                  Choose Package <span aria-hidden="true">&rarr;</span>
                </Link>
                <h5 className="leading-6 text-lg font-bold">
                  This Plan Included :
                </h5>
                <ul className="text-gray-600">
                  <li>
                    <PlayIcon className="h-6 w-6 pr-2 text-gray-600" />
                    Premium Quality Supports (24/7)
                  </li>
                  <li>
                    <PlayIcon className="h-6 w-6 pr-2 text-gray-600" />
                    IT Consultations (Business Growth)
                  </li>
                  <li>
                    <PlayIcon className="h-6 w-6 pr-2 text-gray-600" />
                    Web Design &amp; Development
                  </li>
                  <li>
                    <PlayIcon className="h-6 w-6 pr-2 text-gray-600" />
                    Search Engine Optimization (SEO )
                  </li>
                  <li>
                    <PlayIcon className="h-6 w-6 pr-2 text-gray-600" />
                    User &amp; Market Research
                  </li>
                  <li>
                    <PlayIcon className="h-6 w-6 pr-2 text-gray-600" />
                    UX/UI Strategy (Design &amp; Develop)
                  </li>
                  <li>
                    <PlayIcon className="h-6 w-6 pr-2 text-gray-600" />
                    Product Engineering
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-2">
              <div
                className="pricing-plan-item wow fadeInUp delay-0-6s animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <span className="badge">Best Package</span>
                <h4 className="title leading-8 text-lg font-bold">
                  Golden Package
                </h4>
                <span className="price-count py-2 text-sm font-semibold text-custom-blue">
                  7 Services Included
                </span>
                <p className="price text-gray-900 font-bold text-2xl md:text-4xl pb-4 text-center">
                  249.99
                </p>
                <Link
                  href="/contact"
                  className="theme-btn bg-custom-green text-gray-50 after:bg-custom-blue hover:text-black"
                >
                  Choose Package <span aria-hidden="true">&rarr;</span>
                </Link>
                <h5 className="leading-6 text-lg font-bold">
                  This Plan Included :
                </h5>
                <ul className="text-gray-600">
                  <li>
                    <PlayIcon className="h-6 w-6 pr-2 text-gray-600" />
                    Premium Quality Supports (24/7)
                  </li>
                  <li>
                    <PlayIcon className="h-6 w-6 pr-2 text-gray-600" />
                    IT Consultations (Business Growth)
                  </li>
                  <li>
                    <PlayIcon className="h-6 w-6 pr-2 text-gray-600" />
                    Web Design &amp; Development
                  </li>
                  <li>
                    <PlayIcon className="h-6 w-6 pr-2 text-gray-600" />
                    Search Engine Optimization (SEO )
                  </li>
                  <li>
                    <PlayIcon className="h-6 w-6 pr-2 text-gray-600" />
                    User &amp; Market Research
                  </li>
                  <li>
                    <PlayIcon className="h-6 w-6 pr-2 text-gray-600" />
                    UX/UI Strategy (Design &amp; Develop)
                  </li>
                  <li>
                    <PlayIcon className="h-6 w-6 pr-2 text-gray-600" />
                    Product Engineering
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="price-shapes z-2">
          <img
            className="shape one wow fadeInLeft delay-0-5s animated"
            src="/Assets/design-images/price-left.png"
            alt="Shape"
            style={{ visibility: "visible", animationName: "fadeInLeft" }}
          />
          <img
            className="shape two"
            src="/Assets/design-images/price-right.png"
            alt="Shape"
          />
        </div>
      </section>

      {/* pricing plan section end */}

      {/* Testimonial section section start */}
      <section className="testimonials-area py-16">
        <div className="md:container mx-auto px-6 md:px-0">
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
      {/* <section className="testimonials-area py-130 rpy-100 rel z-1">
        <div className="md:container mx-auto px-6 md:px-0">
          <div className="flex flex-wrap items-center justify-between">
            <div className="xl:w-5/12 lg:w-1/2">
              <div
                className="testimonial-left-part rmb-85 wow fadeInLeft delay-0-2s animated"
                style={{ visibility: "visible", animationName: "fadeInLeft" }}
              >
                <div className="section-title mb-45">
                  <span className="sub-title mb-15">Our Testimonials</span>
                  <h2>What Our Clients Say About Solutions</h2>
                </div>
                <div>
                  <ImageSlider />
                </div>
                <div className="testi-image-slider slick-initialized slick-slider">
                  <div className="slick-list draggable">
                    <div
                      className="slick-track"
                      style={{
                        opacity: 1,
                        width: "240px",
                        transform: "translate3d(0px, 0px, 0px)",
                      }}
                    >
                      <div
                        className="testi-image-item slick-slide slick-current slick-active"
                        tabindex="0"
                        style={{ width: "74px" }}
                        data-slick-index="0"
                        aria-hidden="false"
                      >
                        <img
                          src="assets/images/testimonials/testi-author1.jpg"
                          alt="Author"
                        />
                      </div>
                      <div
                        className="testi-image-item slick-slide slick-active"
                        tabindex="0"
                        style={{ width: "74px" }}
                        data-slick-index="1"
                        aria-hidden="false"
                      >
                        <img
                          src="assets/images/testimonials/testi-author2.jpg"
                          alt="Author"
                        />
                      </div>
                      <div
                        className="testi-image-item slick-slide slick-active"
                        tabindex="0"
                        style={{ width: "74px" }}
                        data-slick-index="2"
                        aria-hidden="false"
                      >
                        <img
                          src="assets/images/testimonials/testi-author3.jpg"
                          alt="Author"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testi-content-slider slick-initialized slick-slider">
                  <div className="slick-list draggable">
                    <div
                      className="slick-track"
                      style={{
                        opacity: 1,
                        width: "1320px",
                        transform: "translate3d(0px, 0px, 0px)",
                      }}
                    >
                      <div
                        className="testi-content-item slick-slide slick-current slick-active"
                        data-slick-index="0"
                        aria-hidden="false"
                        tabindex="0"
                        style={{ width: "440px" }}
                      >
                        <p>
                          As a Top Website Development Company and Top Mobile
                          Application Development Company in USA. They have
                          experts in each technology and they have experience in
                          working with different industries all over the World.
                        </p>
                        <div className="author">
                          <span className="h4">Waleed</span>
                          <span>CEO &amp; Founder</span>
                        </div>
                      </div>
                      <div
                        className="testi-content-item slick-slide"
                        data-slick-index="1"
                        aria-hidden="true"
                        tabindex="-1"
                        style={{ width: "440px" }}
                      >
                        <p>
                          They work on all trending mobile app technologies
                          which include Native Android App Development, Native
                          IOS App Development, React Native App Development,
                          Ionic App Development, Hybrid App Development and
                          Flutter App Development.
                        </p>
                        <div className="author">
                          <span className="h4">Andrew D. Bricker</span>
                          <span>VP</span>
                        </div>
                      </div>
                      <div
                        className="testi-content-item slick-slide"
                        data-slick-index="2"
                        aria-hidden="true"
                        tabindex="-1"
                        style={{ width: "440px" }}
                      >
                        <p>
                          I’m a client located in Canada. I gotta say this
                          company is a GEM! You will not regret hiring them. The
                          put client first and money second. Do not underpay
                          them. Do not look elsewhere.
                        </p>
                        <div className="author">
                          <span className="h4"></span>
                          <span>CEO &amp; Founder</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
            <div className="w-1/2">
              <div
                className="testimonial-right-part wow fadeInRight delay-0-2s animated"
                style={{ visibility: "visible", animationName: "fadeInRight" }}
              >
                <img
                  src="assets/images/testimonials/testimonial.jpg"
                  alt="Testimonial"
                />
                <div className="testi-image-over">
                  <h3>We Have More 3248+ Reviews From Global Clients</h3>
                  <img
                    src="assets/images/testimonials/signature.png"
                    alt="Signature"
                  />
                </div>
                <div className="dot-shapes">
                  <img
                    src="assets/images/testimonials/testimonial-dots.png"
                    alt="Dots"
                  />
                  <img
                    src="assets/images/testimonials/testimonial-dots.png"
                    alt="Dots"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Testimonial section section end */}

      {/* <ScrollAnimationComponent /> */}
    </div>
  );
}
