"use client";
import Map from "@/components/Map";
import TopPage from "@/components/TopPage";
import { ArrowLongRightIcon, MapPinIcon,EnvelopeOpenIcon,PhoneIcon,ClockIcon } from "@heroicons/react/24/outline";



import { useState } from "react";
import clsx from "clsx";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isShaking, setIsShaking] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Please enter your name";
    if (!formData.email) {
      newErrors.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone) {
      newErrors.phone = "Please enter your Phone number";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.subject) newErrors.subject = "Please enter your subject";
    if (!formData.message) newErrors.message = "Please enter your message";

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, submit the data
      console.log("Form submitted successfully:", formData);
    } else {
      // If form is invalid, trigger the shaking effect
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };
  return (
    <div>
      <TopPage cureentText={"Contact"} />

      <section className="pt-32 pb-16 relative z-1">
        <div className="md:container md:mx-auto px-4">
          <div
            className="flex flex-wrap text-center justify-center wow fadeInUp delay-0-2s animated"
            style={{ visibility: "visible", animationName: "fadeInUp" }}
          >
            <div className="w-full lg:w-10/12 xl:w-8/12">
              <div >
                <span className=" py-2 text-lg font-bold text-custom-blue">Need any Helps</span>
                <h2 className="text-gray-900 font-bold text-2xl md:text-5xl pb-4">Contact Information</h2>
              </div>
              <p className="text-gray-500">
                customers can reach out for support, ask questions, or provide
                feedback
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 lg:w-4/12 xl:w-3/12 p-2">
              <div className="border-2 h-full px-6 py-8 hover:shadow-2xl hover:border-gray-50 transition-all border-gray-200 wow fadeInUp delay-0-2s animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="icon">
                <MapPinIcon className="h-12 w-12 text-custom-blue stroke-[2px]" />
                </div>
                <h4 className="text-2xl font-semibold py-4">Office Address</h4>
                <span className="text-lg text-gray-500">30 N Gould St, Ste 20128, Sheridan, WY 82801</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-4/12 xl:w-3/12 p-2">
              <div className="border-2 h-full px-6 py-8 hover:shadow-2xl hover:border-gray-50 transition-all border-gray-200 wow fadeInUp delay-0-3s animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="icon">
                  <EnvelopeOpenIcon className="h-12 w-12 text-custom-blue stroke-[2px]"/>
                </div>
                <h4 className="text-2xl font-semibold py-4">Email Us</h4>
                <a  className="text-lg text-gray-500 hover:text-custom-green transition-all" href="mailto:support@fibertechservices.net">
                  support@fibertechservices.net
                </a>
                <br />
                <a  className="text-lg text-gray-500 hover:text-custom-green transition-all" href="http://www.fibertechservices.net">
                  www.fibertechservices.net
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-4/12 xl:w-3/12 p-2">
              <div className="border-2 h-full px-6 py-8 hover:shadow-2xl hover:border-gray-50 transition-all border-gray-200 wow fadeInUp delay-0-4s animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="icon">
                  <PhoneIcon className="h-12 w-12 text-custom-blue stroke-[2px]"/>
                </div>
                <h4 className="text-2xl font-semibold py-4">Phone Number</h4>
                <span  className="text-lg text-gray-500">
                  Mobile : <a href="callto:8885729311"  className="text-lg text-gray-500 hover:text-custom-green transition-all">+888 572 9311</a>
                </span>
                {/* <!--                            <span>Teliphone : <a href="callto:+1234566">+1234566</a></span>--> */}
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-4/12 xl:w-3/12 p-2">
              <div className="border-2 h-full px-6 py-8 hover:shadow-2xl hover:border-gray-50 transition-all border-gray-200 wow fadeInUp delay-0-5s animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="icon">
                  <ClockIcon className="h-12 w-12 text-custom-blue stroke-[2px]" />
                </div>
                <h4 className="text-2xl font-semibold py-4">Working Hour</h4>
                <b className="text-lg text-custom-blue">Monday - Saturday,</b> <br />
                <span  className="text-lg text-gray-500">7:00 AM to 11:00 PM</span>
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
      <section className="md:container mx-auto px-4 py-16 bg-gray-100 relative -top-8">
        <div className="text-center pb-12">
          <h2 className=" py-2 text-lg font-bold text-custom-blue">
            {" "}
            Get In Touch
          </h2>
          <h2 className="text-gray-900 font-bold text-2xl md:text-5xl pb-4">
            {" "}
            Send Us Message
          </h2>
          <p className="text-gray-500">
            customers can reach out for support, ask questions, or provide
            feedback
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-wrap">
            {["name", "email", "phone", "subject", "message"].map((field) => (
              <div  key={field}
                className={
                  field === "message" ? "w-full p-2" : "w-full lg:w-1/2 p-2"
                }
              >
                <div className="flex flex-col">
                  <label
                    htmlFor={field}
                    className="mb-1 font-medium text-gray-700 capitalize"
                  >
                    {field}
                  </label>
                  <input
                    type={field === "message" ? "textarea" : "text"}
                    name={field}
                    id={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className={clsx(
                      "p-2 border rounded",
                      errors[field]
                        ? "border-red-500 bg-red-100"
                        : "border-gray-300 focus:border-blue-500",
                      isShaking && errors[field] && "animate-shake"
                    )}
                  />
                  {errors[field] && (
                    <p className="mt-1 text-sm text-red-600">{errors[field]}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 flex font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              Submit{" "}
              <ArrowLongRightIcon className="h-6 w-6 text-gray-50 ml-2" />
            </button>
          </div>
        </form>
      </section>
      {/* contact form end */}
    </div>
  );
};

export default Contact;
