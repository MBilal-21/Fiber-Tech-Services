"use client";

import React from "react";
import { PlayIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const PricingPlan = () => {
  return (
    <section className="price-plan-area  relative overflow-hidden">
      <div className="pt-24 mx-auto  max-w-7xl  px-6  lg:px-8">
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
              <h4 className="title leading-8 text-lg font-bold ">Basic Plan</h4>
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
  );
};

export default PricingPlan;
