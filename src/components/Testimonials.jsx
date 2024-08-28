"use client";
import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    image: "/Assets/about/testimonials/testi-author1.jpg",
    title: "Excellent Works",
    rating: 4.5,
    text: "As a Top Website Development Company and Top Mobile Application Development Company in USA. They have experts in each technology and they have experience in working with different industries all over the World.",
    author: "Andrew D. Bricker",
    designation: "CEO & Founder",
  },
  {
    id: 2,
    title: "Excellent Works",
    rating: 4.5,
    text: "They work on all trending mobile app technologies which include Native Android App Development, Native IOS App Development, React Native App Development, Ionic App Development, Hybrid App Development and Flutter App Development.",
    author: "Jose T. McMichael",
    designation: "Senior Manager",
  },
  {
    id: 3,
    image: "/Assets/about/testimonials/testi-author4.jpg",
    title: "Excellent Works",
    rating: 4.5,
    text: "I’m a client located in Canada. I gotta say this company is a GEM! You will not regret hiring them. They put clients first and money second. Do not underpay them. Do not look elsewhere.",
    author: "Andrew D. Bricker",
    designation: "CEO & Founder",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-32 relative z-1 bg-gray-50">
      <div className="md:container mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div className="text-center">
            <h2 className="text-md font-semibold mb-4 text-custom-blue">What Our Clients Say</h2>
            <span className="text-gray-800 font-bold text-3xl lg:text-5xl">Clients Feedback</span>
          </div>
          <div className="space-x-2">
            <button
              onClick={prevTestimonial}
              className=" bg-gray-300 hover:bg-white p-4 shadow-lg  rounded-full"
            >
              <ChevronLeftIcon className="h-6 w-6 stroke-[4px] text-gray-900" />
            </button>
            <button
              onClick={nextTestimonial}
              className=" bg-gray-300 hover:bg-white p-4 shadow-lg rounded-full"
            >
              <ChevronRightIcon className="h-6 w-6 stroke-[4px] text-gray-900" />
            </button>
          </div>
        </div>
        <div className="flex gap-4 justify-center">
        <div className="bg-gray-100  p-6 rounded-lg shadow-md w-full max-w-2xl mx-auto">
          <div className="flex gap-4">
            {testimonials[currentIndex].image && (
              <div className="mb-4">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].author}
                  width={100}
                  height={100}
                  className="w-24 h-24 rounded-full mx-auto border-4 border-white shadow-md"
                />
              </div>
            )}
            <div>
              <h4 className="text-xl font-semibold mb-2">
                {testimonials[currentIndex].title}
              </h4>
              <div className="flex mb-4">
                {[...Array(Math.floor(testimonials[currentIndex].rating))].map(
                  (_, index) => (
                    <StarIcon key={index} className="h-6 w-6 text-yellow-500" />
                  )
                )}
                {testimonials[currentIndex].rating % 1 !== 0 && (
                  <svg
                    data-slot="icon"
                    className="h-6 w-6 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id="halfGradient">
                        <stop offset="50%" stop-color="currentColor" />
                        <stop offset="50%" stop-color="transparent" />
                      </linearGradient>
                    </defs>
                    <path
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                      fill="url(#halfGradient)"
                      d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                    ></path>
                  </svg>
                )}
              </div>
            </div>
          </div>
          <p className="text-gray-700 mb-6">
            {testimonials[currentIndex].text}
          </p>
          <div className="flex items-center">
            <div className="text-gray-700">
              <h4 className="font-semibold">
                {testimonials[currentIndex].author}
              </h4>
              <span className="text-sm">
                {testimonials[currentIndex].designation}
              </span>
            </div>
          </div>
        </div>
        
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full ${
                currentIndex === index ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
