"use client";

import React, { useState, useEffect } from "react";
import { ChevronDoubleUpIcon } from "@heroicons/react/20/solid";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-custom-green rounded text-dark "
          style={{
            position:"fixed",
            bottom: "50px",
            right: "30px",
            padding: "5px 10px",
            border: "none",
            opacity: "0.7",
            zIndex:1000,
            cursor:"pointer",
            transition: "opacity 0.3s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.opacity = "1")}
          onMouseOut={(e) => (e.currentTarget.style.opacity = "0.7")}
        >
          <ChevronDoubleUpIcon className="h-6 w-6 text-gray-500" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
