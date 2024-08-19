"use client";
import Image from "next/image";
import ScrollAnimationComponent from "@/components/Testui";
import { Button } from "@headlessui/react";
import Link from "next/link";
export default function HomePage() {
  return (
    <div>
      <div className="bg-custom-dark home">
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
            <div className="column-6 ">
              <form className="from-bg mt-6 md:mt-0">
                {/* className="space-y-12" */}
                <div>
                  <div className="border-b border-gray-900/10 ">
                    <h2 className="text-center text-3xl font-semibold leading-7 text-white">
                      Get A Qoute
                    </h2>
                  </div>

                  <div className="border-b border-gray-900/10 ">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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

                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <button
                    type="button"
                    className="text-sm font-semibold leading-6 text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="homeFormBack hidden md:block absolute right-0 bottom-0 max-w-2xl w-full h-full pb-[calc(100%*700/800)] md:pb-[calc(100%*600/800)] lg:pb-[calc(100%*500/800)]">
            <Image
              src="/Assets/Untitled (1).png"
              alt="Fiber-tech-services"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>

      {/* Global Partners World Wide Technology Partners */}

      <div className="bg-white">
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
            <div className="flex flex-wrap justify-center items-center gap-4 partner-images">
              <Link href="/contact" className="parter-link">
                <Image
                  className="partner-image  hover:scale-110"
                  src={"/Assets/fiber-tech-partner-1.png"}
                  width={150}
                  height={150}
                  alt="fiber-tech-serivices"
                />
              </Link>
              <Link href="/contact" className="parter-link">
                <Image
                  className="partner-image hover:scale-110"
                  src={"/Assets/fiber-tech-partner-2.png"}
                  width={150}
                  height={150}
                  alt="fiber-tech-serivices"
                />
              </Link>
              <Link href="/contact" className="parter-link">
                <Image
                  className="partner-image hover:scale-110"
                  src={"/Assets/fiber-tech-partner-3.png"}
                  width={150}
                  height={150}
                  alt="fiber-tech-serivices"
                />
              </Link>
              <Link href="/contact" className="parter-link">
                <Image
                  className="partner-image hover:scale-110"
                  src={"/Assets/fiber-tech-partner-4.png"}
                  width={150}
                  height={150}
                  alt="fiber-tech-serivices"
                />
              </Link>
              <Link href="/contact" className="parter-link">
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
      </div>

      {/* About Company */}
      <div className="about-company ">
        <div className="py-12  md:container md:mx-auto px-4 grid grid-cols-2 gap-4 place-content-between">
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
          </div>

          <div className="about-images">
            <div className="top-part">
              <img
                className="wow fadeInRight delay-0-3s animated"
                src="/Assets/fiber-tech-service-about1.jpg"
                alt="About"
                style={{ visibility: "visible", animationName: " fadeInRight" }}
              />
              <img
                className="wow zoomIn delay-0-5s animated"
                src="/Assets/fiber-tech-service-about-logo.png"
                alt="About"
                style={{ visibility: "visible", animationName: "zoomIn" }}
              />
            </div>
            <div className="bottom-part">
              <img
                className="wow fadeInDown delay-0-5s animated"
                src="/Assets/fiber-tech-service-about-dots.png"
                alt="About"
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
      </div>
      <ScrollAnimationComponent />
    </div>
  );
}
