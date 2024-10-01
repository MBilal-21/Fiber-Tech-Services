"use client";
import "animate.css";
import Image from "next/image";
import { Button } from "@headlessui/react";
import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/20/solid";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

import ImageSlider from "@/components/test-slide";
import CompanyStatistic from "@/components/CompanyStatistic";
import PricingPlan from "@/components/PricingPlan";
import QuoteForm from "@/components/QuoteForm";
import { useEffect, useState } from "react";
import clsx from "clsx";
export default function HomePage() {
  const [servicesList, setServicesList] = useState([]);
  const [getServiceLoading, setGetServiceLoading] = useState(true);
  const [getServiceError, setGetServiceError] = useState(null);
  
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    service_id: "",
  });
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});
  const [isShaking, setIsShaking] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const [sentError, setSentError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/service/select`);
        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }
        const data = await response.json();
        
        setServicesList(data);
        console.log(data);
      } catch (error) {
        setGetServiceError(error.message);
      } finally {
        setGetServiceLoading(false);
      }
    };

    fetchServices();
    // const intervalId = setInterval(fetchServices, 5000);  // Fetch every 5 seconds

    // Clean up the interval on component unmount
    // return () => clearInterval(intervalId);
  }, []);

 



  const validate = () => {
    const errors = {};

    if (!formData.first_name.trim()) {
      errors.first_name = "First name is required";
    }

    if (!formData.last_name.trim()) {
      errors.last_name = "Last name is required";
    }

    if (!formData.email) {
      errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }

    if (!formData.service_id || formData.service_id === "--Choose A Service--") {
      errors.service_id = "Please select a service";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);

      try {
       
        
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_KEY}/get-quote`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log("Form submitted successfully:", data);
          setSentSuccess(true);
          setTimeout(() => setSentSuccess(false), 4000);

          setSentError(null);
          setFormData({ first_name: "", last_name: "", email: "", service_id: "" });
          setLoading(false);

        } else {
          setSentError("Failed to submit the form. Please try again.");
          setTimeout(() => setSentError(null), 4000);

          setSentSuccess(false);
          setLoading(false);

        }
      } catch (error) {
        setSentError("An unexpected error occurred. Please try again.");
        setTimeout(() => setSentError(null), 4000);
        setSentSuccess(false);
        setLoading(false);

      }
    } else {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

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
              <Link href={"/contact"}>
                <Button className="block rounded bg-custom-blue px-8 py-3 font-medium text-white transition hover:bg-indigo-700">
                  Let gets Started <span aria-hidden="true">&rarr;</span>
                </Button>
              </Link>
            </div>
            <div className="column-6 backdrop-blur-sm animate__animated animate__lightSpeedInRight">
              <form onSubmit={handleSubmit} className="from-bg mt-6 md:mt-0">
                <div className="border-b border-custom-blue pb-4">
                  <h2 className="text-center text-3xl font-semibold leading-7 text-white">
                    Get A Quote
                  </h2>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first_name"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        id="first-name"
                        name="first_name"
                        type="text"
                        autoComplete="given-name"
                        placeholder="First Name"
                        value={formData.first_name}
                        onChange={handleChange}
                        className={clsx(
                          "block bg-gray-900 w-full rounded-md border-0 py-1.5 text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                          errors.first_name && "border-red-500 "
                        )}
                      />
                      {errors.first_name && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.first_name}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last_name"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        id="last-name"
                        name="last_name"
                        type="text"
                        placeholder="Last Name"
                        autoComplete="family-name"
                        value={formData.last_name}
                        onChange={handleChange}
                        className={clsx(
                          "block bg-gray-900 w-full rounded-md border-0 py-1.5 text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                          errors.last_name && "border-red-500 "
                        )}
                      />
                      {errors.last_name && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.last_name}
                        </p>
                      )}
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
                        value={formData.email}
                        onChange={handleChange}
                        className={clsx(
                          "block bg-gray-900 w-full rounded-md border-0 py-1.5 text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                          errors.email && "border-red-500 "
                        )}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="service_id"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      Services
                    </label>
                    <div className="mt-2">
                      <select
                        id="service_id"
                        name="service_id"
                        value={formData.service_id}
                        onChange={handleChange}
                        className={clsx(
                          "block bg-gray-900 w-full rounded-md border-0 py-1.5 text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6",
                          errors.service_id && "border-red-500 "
                        )}
                      >
                        <option>--Choose A Service--</option>
                        {getServiceLoading ? <option value={-1}>loading services..</option>:
                        servicesList.map((s)=><option key={s.id} value={s.id}>{s.title}</option>)}
                        {getServiceError && <option>Other</option>}
                        {/* <option>Web Development</option>
                        <option>Web App Development</option>
                        <option>App Development</option>
                        <option>Information Security</option>
                        <option>Digital Marketting</option>
                        <option>Graphic Designing</option> */}
                      </select>
                      {errors.service_id && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.service_id}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-center w-full">
                  <button
                    type="submit"
                    disabled = {loading}
                    className={`${loading &&"opacity-50 cursor-not-allowed"} w-full px-4 py-2 flex justify-center font-bold text-white bg-custom-blue rounded hover:bg-blue-700`}
                  >
                    Send
                    <PaperAirplaneIcon className="h-6 w-6 text-gray-50 ml-2" />
                  </button>
                </div>

                {sentSuccess && (
                  <p className="mt-4 text-center text-green-500">
                    Form submitted successfully!
                  </p>
                )}
                {sentError && (
                  <p className="mt-4 text-center text-red-500">{sentError}</p>
                )}
              </form>
            </div>
          </div>
          <div className="homeFormBack block absolute bottom-0 right-0  sm:max-w-2xl w-full sm:h-full">
            <Image
              className="img"
              width={672}
              height={463}
              src="/Assets/fiber-tech-service-home-bg.png"
              alt="Fiber-tech-services-bg"
            />
          </div>
        </div>
      </section>
      {/* cover section end */}

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
              className=" animate__fadeInUp animate__delay-2s animate__animated border-2 border-custom-blue/80 rounded-xl p-6 h-full flex flex-col items-center"
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
                  alt="Digital Consulting"
                  style={{
                    filter:
                      " brightness(0) saturate(100%) invert(33%) sepia(14%) saturate(3486%) hue-rotate(178deg) brightness(97%) contrast(93%)",
                  }}
                />
              </div>
              <div>
                <h4 className="text-center">
                  <Link
                    href="/services"
                    className="leading-8 text-lg font-semibold hover:text-custom-blue transition-all duration-1000"
                  >
                    Digital Consulting
                  </Link>
                </h4>
                <p className="text-gray-800 text-start">
                  Digital consulting encompasses a diverse array of services,
                  including website design and development, advertising, social
                  media marketing, content creation, and email marketing. These
                  services empower companies to establish a strong online
                  presence, effectively engage their target audience, and drive
                  significant business growth.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/4 px-2 py-3">
            <div
              className="animate__delay-2s animate__fadeInUp animate__animated border-2 border-custom-blue/80 rounded-xl p-6 h-full flex flex-col items-center"
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
                  alt="Design & Development"
                  style={{
                    filter:
                      " brightness(0) saturate(100%) invert(33%) sepia(14%) saturate(3486%) hue-rotate(178deg) brightness(97%) contrast(93%)",
                  }}
                />
              </div>
              <div>
                <h4 className="text-center">
                  <Link
                    href="/services"
                    className="leading-8 text-lg font-semibold hover:text-custom-blue transition-all duration-1000"
                  >
                    Design &amp; Development
                  </Link>
                </h4>
                <p className="text-gray-800 text-start">
                  Design & Development is a collaborative process that requires
                  seamless communication and coordination between design and
                  development teams. The focus is on creating a final product
                  that not only meets client expectations but also delivers an
                  outstanding user experience, ensuring both functionality and
                  visual appeal.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/4 px-2 py-3">
            <div
              className="animate__delay-2s animate__fadeInUp animate__animated border-2 border-custom-blue/80 rounded-xl p-6 h-full flex flex-col items-center"
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
                  alt="app-development"
                  style={{
                    filter:
                      " brightness(0) saturate(100%) invert(33%) sepia(14%) saturate(3486%) hue-rotate(178deg) brightness(97%) contrast(93%)",
                  }}
                />
              </div>
              <div>
                <h4 className="text-center">
                  <Link
                    href="/services"
                    className="leading-8 text-lg font-semibold hover:text-custom-blue transition-all duration-1000"
                  >
                    Mobile App Solutions
                  </Link>
                </h4>
                <p className="text-gray-800 text-start">
                  Mobile app solutions aim to provide users with a convenient
                  and accessible way to interact with a company{"’"}s products
                  or services. These solutions are essential for enhancing
                  customer engagement, increasing brand visibility, and driving
                  revenue growth by offering a user-friendly mobile experience.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/4 px-2 py-3">
            <div
              className="animate__delay-2s animate__fadeInUp animate__animated border-2 border-custom-blue/80 rounded-xl p-6 h-full flex flex-col items-center"
              style={{ visibility: "visible", animationName: "fadeInUp" }}
            >
              <div style={{ width: "64px", height: "64px" }}>
                <Image
                  src={"/Assets/icons/png/logo.png"}
                  width={64}
                  height={64}
                  className="w-full h-auto"
                  alt="icon"
                  style={{
                    filter:
                      " brightness(0) saturate(100%) invert(33%) sepia(14%) saturate(3486%) hue-rotate(178deg) brightness(97%) contrast(93%)",
                  }}
                />
              </div>
              <div>
                <h4 className="text-center">
                  <Link
                    href="/services"
                    className="leading-8 text-lg font-semibold hover:text-custom-blue transition-all duration-1000"
                  >
                    UX/UI Design Strategy
                  </Link>
                </h4>
                <p className="text-gray-800 text-start">
                  UX/UI design strategy is dedicated to crafting products that
                  are intuitive, visually appealing, and provide a seamless user
                  experience. The ultimate goal is to ensure that users find the
                  product easy to navigate and enjoyable to use, leading to
                  higher satisfaction and continued engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-12">
          <Link
            href={"/services"}
            className="block w-max rounded-full bg-custom-blue border-2 border-custom-blue px-8 py-3 font-medium text-white transition hover:bg-transparent hover:text-gray-900"
            type="submit"
          >
            View All Services
          </Link>
        </div>
      </section>
      {/* Services area end */}

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
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button className="block rounded bg-custom-blue px-8 py-3 font-medium text-white transition hover:bg-indigo-700">
                {" "}
                Learn More <span aria-hidden="true">&rarr;</span>{" "}
              </button>
              <div className="flex gap-4 grow">
                <PhoneIcon
                  className="h-12 w-12 text-custom-blue border-2 border-gray-500  "
                  style={{ borderRadius: "50%", padding: "5px" }}
                />
                <div>
                  <p>Hotline</p>
                  <a
                    className="text-gray-500 hover:text-custom-blue transition-all ease-in-out font-bold  duration-300"
                   href="tel:+1 (307) 203-3450"
                  >
                    +1 (307) 203-3450
                  </a>
                </div>
              </div>
            </div>

            {/* ---------------------------------------- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 for-active gap-4 mt-6">
              {/* --------------------------------------- */}
              <div className="p-2 hover:shadow-2xl">
                <div className="p-4">
                  <div className="icon">
                    <Image
                      src="/Assets/fiber-tech-it-consultant.png"
                      alt="fiber-tech-it-consultant"
                      width={60}
                      height={60}
                      layout="intrinsic"
                      style={{
                        filter:
                          " brightness(0) saturate(100%) invert(33%) sepia(14%) saturate(3486%) hue-rotate(178deg) brightness(97%) contrast(93%)",
                      }}
                    />
                  </div>
                  <h4 className="pt-4">
                    <Link
                      href="/services"
                      className="leading-8 text-lg font-semibold hover:text-custom-blue transition-all duration-1000"
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
                <div className="p-4">
                  <div className="icon">
                    <Image
                      src="/Assets/fiber-tech-bussiness-growth.png"
                      alt="fiber-tech-bussiness-growth"
                      layout="intrinsic"
                      width={60}
                      height={60}
                      style={{
                        filter:
                          " brightness(0) saturate(100%) invert(33%) sepia(14%) saturate(3486%) hue-rotate(178deg) brightness(97%) contrast(93%)",
                      }}
                    />
                  </div>
                  <h4 className="pt-4">
                    <Link
                      href="/services"
                      className="leading-8 text-lg font-semibold hover:text-custom-blue transition-all duration-1000"
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

          <div className="about-images p-6 m-auto">
            <div className="top-part">
              <Image
                className=" animate__fadeInRight animate__delay-2s animate__animated"
                src="/Assets/fiber-tech-service-about1.jpg"
                alt="fiber-tech-service-about1"
                width={410}
                height={495}
                style={{ visibility: "visible", animationName: " fadeInRight" }}
              />
              <Image
                className=" animate__zoomIn animate__delay-2s  animate__animated"
                src="/Assets/design-images/fiber-tech-service-about-logo.png"
                alt="fiber-tech-service-about-logo"
                width={167}
                height={184}
                style={{ visibility: "visible", animationName: "zoomIn" }}
              />
            </div>
            <div className="bottom-part">
              <Image
                className=" animate__fadeInDown animate__delay-2s animate__animated"
                src="/Assets/design-images/fiber-tech-service-about-dots.png"
                alt="fiber-tech-service-about-dots"
                width={187}
                height={86}
                style={{ visibility: "visible", animationName: "fadeInDown" }}
              />
              <Image
                className=" animate__fadeInDown animate__delay-2s animate__animated"
                src="/Assets/fiber-tech-service-about2.jpg"
                alt="About"
                width={410}
                height={360}
                style={{ visibility: "visible", animationName: "fadeInDown" }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* About Company section end */}

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
          <Image
            src="/Assets/work-process-line.png"
            alt="fiber-tech-serce-work-line"
            width={1500}
            height={64}
            layout="responsive"
          />
        </div>
        <div className="mx-auto  max-w-7xl  px-6  lg:px-8">
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/5 px-2 mt-8 overflow-hidden">
              <div
                className="work-process-item h-full  animate__fadeInUp animate__delay-2s animate__animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="number">01</div>
                <div className="content h-full">
                  <h4 className="leading-8 text-2xl font-semibold mb-2">
                    Discover
                  </h4>
                  <p className="text-gray-600">
                    We emphasize planning get everything documented and nothing
                    is assumed.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/5 px-2 sm:mt-4 md:mt-2 overflow-hidden">
              <div
                className="work-process-item h-full animate__fadeInDown animate__delay-2s animate__animated"
                style={{ visibility: "visible", animationName: "fadeInDown" }}
              >
                <div className="number">02</div>
                <div className="content h-full">
                  <h4 className="leading-8 text-2xl font-semibold mb-2">
                    Planning
                  </h4>
                  <p className="text-gray-600">
                    Creating a roadmap or blueprint for achieving a specific
                    goal or objective. It involves defining the desired outcome,
                    identifying the steps needed to achieve it, and organizing
                    and prioritizing those steps
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/5 px-2 mt-8 overflow-hidden">
              <div
                className="work-process-item h-full animate__fadeInUp animate__delay-2s animate__animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="number">03</div>
                <div className="content h-full">
                  <h4 className="leading-8 text-2xl font-semibold mb-2">
                    Design &amp; Dev
                  </h4>
                  <p className="text-gray-600">
                    It{"’"}s a collaborative process that involves close
                    communication and coordination between the design and
                    development teams to ensure that the end product meets the
                    needs of the client and delivers a positive user experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/5 px-2 overflow-hidden">
              <div
                className="work-process-item h-full wow animate__fadeInDown animate__delay-2s animate__animated"
                style={{ visibility: "visible", animationName: "fadeInDown" }}
              >
                <div className="number">04</div>
                <div className="content h-full">
                  <h4 className="leading-8 text-2xl font-semibold mb-2">
                    Testing
                  </h4>
                  <p className="text-gray-600">
                    Testing is the process of evaluating a product or system to
                    determine if it meets the specified requirements and quality
                    standards. It is a critical step in the product development
                    process and helps to identify and resolve any defects or
                    issues before the product is released to the public.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/5 px-2 mt-8 overflow-hidden">
              <div
                className="work-process-item mt-50  animate__fadeInUp animate__delay-2s animate__animated h-full"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="number">05</div>
                <div className="content h-full">
                  <h4 className="leading-8 text-2xl font-semibold mb-2">
                    Project Deliver
                  </h4>
                  <p className="text-gray-600">
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
                <Image
                  src="/Assets/testi-img/testimonial.jpg"
                  alt="Testimonial"
                  width={490}
                  height={647}
                />
                <div className="testi-image-over text-white">
                  <h3>We Have More 3248+ Reviews From Global Clients</h3>
                  <Image
                    src="/Assets/testi-img/signature.png"
                    alt="Signature"
                    width={184}
                    height={85}
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(2921%) hue-rotate(179deg) brightness(121%) contrast(106%)",
                    }}
                  />
                </div>
                <div className="dot-shapes">
                  <Image
                    src="/Assets/testi-img/testimonial-dots.png"
                    alt="Dots"
                    width={187}
                    height={86}
                  />
                  <Image
                    src="/Assets/testi-img/testimonial-dots.png"
                    alt="Dots"
                    width={187}
                    height={86}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial section section end */}

      {/* looking for quote form */}
      <QuoteForm />
    </div>
  );
}
