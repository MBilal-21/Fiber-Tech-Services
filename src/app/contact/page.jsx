"use client";
import Map from "@/components/Map";
import TopPage from "@/components/TopPage";
import {
  MapPinIcon,
  EnvelopeOpenIcon,
  PhoneIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

import QuoteForm from "@/components/QuoteForm";
const Contact = () => {
  return (
    <div>
      <TopPage cureentText={"Contact"} />

      <section className="py-16 relative z-1">
        <div className="mx-auto  max-w-7xl  px-6  lg:px-8">
          <div
            className="flex flex-wrap text-center justify-center wow fadeInUp delay-0-2s animated"
            style={{ visibility: "visible", animationName: "fadeInUp" }}
          >
            <div className="w-full lg:w-10/12 xl:w-8/12">
              <div>
                <span className=" py-2 text-lg font-bold text-custom-blue">
                  Need any Helps
                </span>
                <h2 className="text-gray-900 font-bold text-2xl md:text-5xl pb-4">
                  Contact Information
                </h2>
              </div>
              <p className="text-gray-500 pb-4">
                customers can reach out for support, ask questions, or provide
                feedback
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 lg:w-4/12 xl:w-3/12 p-2">
              <div
                className="border-2 h-full px-6 py-8 hover:shadow-2xl hover:border-gray-50 transition-all border-gray-200 wow fadeInUp delay-0-2s animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="icon">
                  <MapPinIcon className="h-12 w-12 text-custom-blue stroke-[2px]" />
                </div>
                <h4 className="text-2xl font-semibold py-4">Office Address</h4>
                <span className="text-lg text-gray-500">
                  30 N Gould St, Ste 20128, Sheridan, WY 82801
                </span>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-4/12 xl:w-3/12 p-2">
              <div
                className="border-2 h-full px-6 py-8 hover:shadow-2xl hover:border-gray-50 transition-all border-gray-200 wow fadeInUp delay-0-3s animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="icon">
                  <EnvelopeOpenIcon className="h-12 w-12 text-custom-blue stroke-[2px]" />
                </div>
                <h4 className="text-2xl font-semibold py-4">Email Us</h4>
                <a
                  className="text-lg text-gray-500 hover:text-custom-green transition-all"
                  href="mailto:support@fibertechservices.net"
                >
                  support@fibertechservices.net
                </a>
                <br />
                <a
                  className="text-lg text-gray-500 hover:text-custom-green transition-all"
                  href="http://www.fibertechservices.net"
                >
                  www.fibertechservices.net
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-4/12 xl:w-3/12 p-2">
              <div
                className="border-2 h-full px-6 py-8 hover:shadow-2xl hover:border-gray-50 transition-all border-gray-200 wow fadeInUp delay-0-4s animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="icon">
                  <PhoneIcon className="h-12 w-12 text-custom-blue stroke-[2px]" />
                </div>
                <h4 className="text-2xl font-semibold py-4">Phone Number</h4>
                <span className="text-lg text-gray-500">
                  Mobile :{" "}
                  <a
                    href="callto:8885729311"
                    className="text-lg text-gray-500 hover:text-custom-green transition-all"
                  >
                    +888 572 9311
                  </a>
                </span>
                {/* <!--                            <span>Teliphone : <a href="callto:+1234566">+1234566</a></span>--> */}
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-4/12 xl:w-3/12 p-2">
              <div
                className="border-2 h-full px-6 py-8 hover:shadow-2xl hover:border-gray-50 transition-all border-gray-200 wow fadeInUp delay-0-5s animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="icon">
                  <ClockIcon className="h-12 w-12 text-custom-blue stroke-[2px]" />
                </div>
                <h4 className="text-2xl font-semibold py-4">Working Hour</h4>
                <b className="text-lg text-custom-blue">
                  Monday - Saturday,
                </b>{" "}
                <br />
                <span className="text-lg text-gray-500">
                  7:00 AM to 11:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* google map start  */}
      <section className="w-full" style={{ height: "400px" }}>
        <Map address="1600 Amphitheatre Parkway, Mountain View, CA" />
      </section>
      {/* google map end */}
      {/* contact form start */}
      <QuoteForm />
      {/* contact form end */}
    </div>
  );
};

export default Contact;
