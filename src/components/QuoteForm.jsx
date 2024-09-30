"use client";
import React, { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

const QuoteForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sentSuccess, setSentSuccess] = useState(false);
  const [sentError, setSentError] = useState(null);
  const [errors, setErrors] = useState({});
  const [isShaking, setIsShaking] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.first_name)
      newErrors.first_name = "Please enter your first name";
    if (!formData.last_name) newErrors.last_name = "Please enter your last name";
    if (!formData.email) {
      newErrors.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    // if (!formData.phone) {
    //   newErrors.phone = "Please enter your Phone number";
    // } else if (!/^\d{10}$/.test(formData.phone)) {
    //   newErrors.phone = "Phone number must be 10 digits";
    // }
    // if (!formData.subject) newErrors.subject = "Please enter your subject";
    if (!formData.message) newErrors.message = "Please enter your message";

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      try {
        // Simulate form submission to an API
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_KEY}/services-quote`,
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
          setSentSuccess(true); // Set success state

          setTimeout(() => setSentSuccess(false), 4000);
          setSentError(null); // Clear any previous error
          setLoading(false);
          // Optionally, reset the form
        } else {
          console.error("Form submission failed:", response.statusText);
          setSentError("Failed to submit the form. Please try again.");
          setTimeout(() => setSentError(null), 4000);
          setSentSuccess(false);
          setLoading(false);
        }
      } catch (error) {
        console.error("An error occurred during form submission:", error);
        setSentError("An unexpected error occurred. Please try again.");
        setTimeout(() => setSentError(null), 4000);
        setSentSuccess(false);
        setLoading(false);
      }
    } else {
      // If form is invalid, trigger the shaking effect
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  return (
    <section className="mx-auto  max-w-5xl  px-6  lg:px-8 py-16">
      {sentError && (
        <div
          id="toast-simple"
          className="z-50 fixed top-24 left-2/4 -translate-x-2/4 flex items-center w-full max-w-xs p-4 space-x-4  text-gray-70 bg-red-300/80 divide-x  divide-gray-200 rounded-lg shadow "
          role="alert"
        >
          <svg
            className="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
            />
          </svg>
          <div className="ps-4 text-sm font-normal">{sentError}</div>
        </div>
      )}
      {sentSuccess && (
        <div
          id="toast-simple"
          className="z-50 fixed top-24 left-2/4 -translate-x-2/4 flex items-center w-full max-w-xs p-4 space-x-4  text-gray-70 bg-green-300/80 divide-x  divide-gray-200 rounded-lg shadow "
          role="alert"
        >
          <svg
            className="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
            />
          </svg>
          <div className="ps-4 text-sm font-normal">
            Message Send Successfull.
          </div>
        </div>
      )}

      <div className="text-center ">
        <h2 className="text-custom-blue font-bold text-2xl md:text-5xl pb-4">
          {" "}
          Looking for Fiber Tech Services Quote?
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-wrap justify-center items-center">
          {["first_name", "last_name", "email", "phone"].map((field) => (
            <div
              key={field}
              className={
                field === "message" ? "w-full p-2" : "w-full lg:w-1/2 p-2"
              }
            >
              <div className="flex flex-col">
                <label
                  htmlFor={field}
                  className="mb-1 font-medium text-gray-700 capitalize"
                >
                  {field.replace(/([A-Z])/g, " $1").trim()}{" "}
                  {field === "phone" && "(optional)"}
                  {/* Convert camelCase to Title Case */}
                </label>
                <input
                  type="text"
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
          <div className="w-full p-2">
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="mb-1 font-medium text-gray-700 capitalize"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className={clsx(
                  "p-2 border rounded",
                  errors.message
                    ? "border-red-500 bg-red-100"
                    : "border-gray-300 focus:border-blue-500",
                  isShaking && errors.message && "animate-shake"
                )}
                rows="4" // Adjust the number of rows as needed
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center px-4">
          <button
            type="submit"
            disabled={loading}
            className={`${
              loading && "opacity-50 cursor-not-allowed"
            } w-full px-4 py-2 flex justify-center font-bold text-white bg-custom-blue rounded hover:bg-indigo-600`}
          >
            Send
            <PaperAirplaneIcon className="h-6 w-6 text-gray-50 ml-2" />
          </button>
        </div>
      </form>
    </section>
  );
};

export default QuoteForm;
