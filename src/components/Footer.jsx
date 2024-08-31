"use client";
import Link from "next/link";
import React from "react";
import { ChevronDoubleUpIcon, PhoneIcon } from "@heroicons/react/20/solid";
import "animate.css";

const Footer = () => {
  // bg-white dark:bg-gray-900
  // border-t border-gray-100
  return (
    <footer className=" z-10">
      <div className=" mx-auto  max-w-9xl px-6 lg:px-8 relative -mb-16 z-20">
        <div className="bg-cover  bg-[url('/Assets/design-images/footer-cta-bg.jpg')]">
          <div className=" bg-custom-blue/90 px-8 py-8 md:py-16 flex flex-wrap justify-center items-center">
            <div className="fadeInLeft animate__animated text-center md:text-left w-full md:w-7/12 lg:w-8/12"
              style={{ visibility: "visible", animationName: "fadeInLeft" }}
            >
              <span className="text-lg font-semibold text-white">
                Need Any Consultations ?
              </span>
              <h2 className="text-white font-bold text-2xl md:text-5xl py-2">
                We’re Ready to Growth IT Business
              </h2>
            </div>
            <div className="w-full md:w-5/12 lg:w-4/12">
              <div className="flex flex-wrap gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="theme-btn bg-transparent border-2 border-black text-white after:bg-black hover:text-white  animate__fadeInRight animate__animated p-4 "
                  style={{
                    visibility: "visible",
                    animationName: "fadeInRight",
                  }}
                >
                  Get Free Quote <span aria-hidden="true">&rarr;</span>
                </Link>
                <div className="flex gap-4">
                  <PhoneIcon
                    className="h-12 w-12 text-white border-2 border-white "
                    style={{ borderRadius: "50%", padding: "5px" }}
                  />
                  <div>
                    <p className="text-white font-semibold">Hotline</p>
                    <a
                      className="text-white hover:text-black transition-all ease-in-out font-bold  duration-300"
                      href="callto:888 572 9311"
                    >
                      888 572 9311
                    </a>
                  </div>
                </div>
              </div>
              {/* <div
              className="hotline wow fadeInRight delay-0-2s animated"
              style={{ visibility: "visible", animationName: "fadeInRight" }}
            >
              <i className="fas fa-phone"></i>
              <div className="content">
                <span>Hotline</span>
                <br />
                <a href="callto:888 572 9311">888 572 9311</a>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </div>
          <div className="bg-custom-dark relative   overflow-hidden">
      <div className="footer-shapes">
        <img
          className="shape one"
          src="/Assets/design-images/footer-bg-weve-shape.png"
          alt="Shape"
        />
        <img
          className="shape two"
          src="/Assets/design-images/footer-bg-line-shape.png"
          alt="Shape"
        />
        <img
          className="shape three wow fadeInRight delay-0-8s animated"
          src="/Assets/design-images/footer-right.png"
          alt="Shape"
          style={{ visibility: " visible", animationName: "fadeInRight" }}
        />
      </div>
      <div className="mx-auto  max-w-7xl  px-6  lg:px-8 pb-6  sm:px-6 lg:px-8 relative z-3">
        <div className="mt-16 grid grid-cols-1 gap-8  pt-16 md:grid-cols-4 lg:grid-cols-7 ">
          <div className="text-left md:col-span-4 lg:col-span-2 order-1">
            {/* fiber tech logo svg */}
            <span className="sr-only">Fiber tech Logo</span>
            <svg
              width="120"
              height="120"
              viewBox="0 0 529 441"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_6_41)">
                <path
                  d="M176.134 28.8691C189.357 28.8533 202.579 28.8435 215.802 28.838C216.301 28.8378 216.799 28.8375 217.313 28.8373C249.948 28.8236 282.58 28.9149 315.213 29.118C315.932 29.1224 315.932 29.1224 316.665 29.127C328.732 29.202 340.799 29.2816 352.866 29.3668C353.005 38.5869 353.11 47.8067 353.175 57.0274C353.206 61.3088 353.248 65.5898 353.316 69.871C353.376 73.6031 353.414 77.3348 353.427 81.0672C353.435 83.0432 353.453 85.0182 353.497 86.9939C353.538 88.8551 353.55 90.7151 353.541 92.5766C353.543 93.5824 353.575 94.5881 353.609 95.5935C353.55 99.934 353.55 99.934 351.558 101.711C350.045 102.606 348.552 103.336 346.895 104.028C346.265 104.35 345.635 104.673 344.986 105.005C344.164 105.388 344.164 105.388 343.327 105.778C342.689 106.078 342.051 106.378 341.394 106.687C340.722 107 340.05 107.314 339.357 107.637C337.889 108.327 336.422 109.02 334.956 109.713C334.575 109.894 334.195 110.074 333.802 110.259C328.175 112.932 322.625 115.716 317.069 118.49C316.673 118.688 316.276 118.886 315.867 119.09C315.119 119.462 314.371 119.836 313.625 120.211C311.138 121.449 311.138 121.449 310.474 121.449C310.474 102.724 310.474 83.9991 310.474 64.7066C302.199 64.5423 293.923 64.378 285.397 64.2088C285.397 153.728 285.397 243.247 285.397 335.479C271.408 335.479 257.419 335.479 243.006 335.479C243.006 245.96 243.006 156.441 243.006 64.2088C234.927 64.2088 226.849 64.2088 218.526 64.2088C218.526 82.9339 218.526 101.659 218.526 120.951C215.832 120.502 214.614 120.106 212.362 118.947C211.753 118.637 211.144 118.327 210.517 118.008C209.549 117.509 209.549 117.509 208.562 117.001C204.064 114.714 199.565 112.451 194.942 110.343C191.379 108.716 187.847 107.051 184.344 105.335C183.931 105.133 183.518 104.931 183.093 104.724C182.702 104.531 182.311 104.339 181.909 104.141C181.571 103.975 181.233 103.808 180.885 103.637C180.499 103.437 180.114 103.238 179.717 103.033C179.11 102.833 178.503 102.633 177.878 102.428C176.427 101.604 176.164 101.163 175.808 99.7074C175.691 97.8648 175.691 96.0343 175.728 94.1905C175.729 93.4792 175.728 92.7678 175.726 92.0565C175.725 90.1261 175.746 88.1963 175.771 86.2661C175.793 84.2487 175.796 82.2312 175.8 80.2137C175.811 76.3937 175.84 72.5739 175.876 68.7539C175.916 64.4049 175.936 60.0559 175.954 55.7068C175.991 46.7607 176.054 37.8149 176.134 28.8691Z"
                  fill="#265FA6"
                />
                <path
                  d="M306.295 132.4C339.987 132.4 373.679 132.4 408.393 132.4C408.393 156.217 408.393 180.034 408.393 204.572C405.205 204.129 404.224 203.926 401.743 202.517C398.297 200.612 394.768 198.865 391.19 197.137C390.567 196.835 389.944 196.533 389.303 196.222C386.598 194.912 383.89 193.607 381.168 192.321C380.779 192.137 380.39 191.953 379.989 191.764C378.992 191.295 377.994 190.829 376.996 190.363C375.554 189.64 375.554 189.64 374.36 188.644C374.216 187.467 374.216 187.467 374.224 185.973C374.225 185.415 374.225 184.857 374.225 184.282C374.231 183.677 374.237 183.073 374.243 182.45C374.245 181.833 374.247 181.215 374.249 180.579C374.254 178.938 374.265 177.296 374.278 175.655C374.29 173.98 374.296 172.305 374.302 170.63C374.315 167.344 374.336 164.057 374.36 160.771C371.01 160.771 367.661 160.771 364.21 160.771C352.092 160.524 352.092 160.524 339.73 160.273C339.927 180.641 340.124 201.008 340.327 221.993C345.647 224.457 350.967 226.921 356.448 229.459C358.812 230.609 361.177 231.759 363.613 232.944C365.883 234.021 365.883 234.021 368.155 235.096C373.243 237.499 378.267 239.971 383.242 242.533C386.119 244.01 389.033 245.399 392.018 246.721C393.491 247.389 394.913 248.106 396.34 248.84C399.169 250.279 402.097 251.509 405.075 252.718C407.741 253.803 407.741 253.803 408.393 254.347C408.453 255.83 408.473 257.303 408.469 258.787C408.47 259.259 408.47 259.73 408.471 260.216C408.474 261.809 408.472 263.402 408.47 264.995C408.471 266.132 408.472 267.269 408.473 268.406C408.476 271.504 408.475 274.601 408.473 277.699C408.471 280.932 408.473 284.166 408.474 287.399C408.475 293.179 408.473 298.959 408.47 304.739C408.467 309.984 408.468 315.23 408.471 320.476C408.474 326.56 408.475 332.645 408.473 338.729C408.472 341.953 408.472 345.176 408.474 348.4C408.476 351.429 408.475 354.459 408.471 357.489C408.47 358.604 408.471 359.72 408.472 360.835C408.474 362.351 408.472 363.867 408.469 365.382C408.47 365.83 408.471 366.277 408.473 366.738C408.461 369.766 408.461 369.766 407.796 370.321C406.481 370.369 405.164 370.381 403.848 370.38C403.43 370.381 403.013 370.381 402.583 370.382C401.174 370.383 399.765 370.38 398.356 370.377C397.35 370.377 396.344 370.377 395.338 370.377C392.598 370.377 389.858 370.374 387.119 370.371C384.259 370.368 381.399 370.368 378.539 370.367C373.119 370.365 367.7 370.361 362.28 370.356C354.959 370.35 347.638 370.347 340.318 370.344C328.778 370.34 317.238 370.33 305.698 370.321C305.895 346.504 306.092 322.687 306.295 298.148C310.522 300.07 314.731 302.001 318.908 303.996C319.444 304.252 319.98 304.508 320.532 304.772C324.027 306.444 327.518 308.121 330.998 309.814C331.398 310.007 331.799 310.2 332.211 310.399C332.591 310.585 332.971 310.771 333.363 310.963C333.687 311.12 334.01 311.278 334.344 311.44C334.742 311.653 335.14 311.865 335.551 312.085C335.898 312.216 336.245 312.347 336.603 312.482C337.94 313.08 338.774 313.584 339.73 314.573C340.325 316.722 340.217 318.828 340.138 321.023C340.134 321.578 340.13 322.133 340.126 322.705C340.104 324.775 340.045 326.845 339.991 328.915C339.905 333.545 339.819 338.174 339.73 342.945C351.158 342.945 362.586 342.945 374.36 342.945C374.36 318.963 374.36 294.982 374.36 270.274C373.178 269.946 371.996 269.617 370.778 269.279C369.928 268.927 369.092 268.553 368.273 268.155C367.805 267.93 367.337 267.705 366.855 267.473C366.352 267.227 365.848 266.981 365.329 266.728C364.206 266.186 363.083 265.644 361.959 265.102C361.059 264.667 361.059 264.667 360.141 264.223C357.121 262.767 354.088 261.331 351.056 259.891C344.793 256.916 338.554 253.908 332.332 250.873C326.464 248.013 320.56 245.205 314.653 242.401C311.895 241.087 309.137 239.773 306.295 238.419C306.295 203.432 306.295 168.446 306.295 132.4Z"
                  fill="#333437"
                />
                <path
                  d="M47.1682 195.613C68.4476 195.613 89.727 195.613 111.651 195.613C112.583 195.613 112.2 196 112.316 197.538C112.311 198.472 112.311 198.472 112.307 199.426C112.306 199.756 112.305 200.087 112.304 200.428C112.301 201.488 112.293 202.548 112.286 203.608C112.283 204.325 112.28 205.042 112.277 205.759C112.271 207.52 112.261 209.282 112.248 211.043C101.302 211.043 90.3559 211.043 79.4097 211.043C78.9056 211.049 78.4015 211.054 77.8821 211.06C77.3148 211.065 76.7476 211.069 76.1632 211.074C75.5975 211.08 75.0176 211.054 74.4347 211.06C72.8278 211.012 72.5 211 71.5 211C69.9189 211 69.5 211 67.9162 211.012C67.0905 211.018 66.5 211 65 211C65 219.5 65.0423 228.595 65.0747 237.136C65.1094 246.981 65.0574 256.825 64.9495 266.67C64.9429 267.277 64.9363 267.885 64.9295 268.511C64.8952 271.644 64.8601 274.777 64.8247 277.91C64.6121 296.85 64.4084 315.791 64.4084 334.732C64.4084 335.125 64.4084 335.519 64.4084 335.924C64.4116 348.983 64.5821 362.039 64.8676 375.096C64.8813 375.731 64.8951 376.365 64.9092 377.02C64.9345 378.167 64.961 379.314 64.9891 380.461C65.1149 386.043 65.0801 391.612 65.0801 397.199C197.485 397.199 329.891 397.199 466.308 397.199C466.308 336.096 466.308 274.993 466.308 212.038C450.94 211.874 435.571 211.71 419.737 211.541C419.737 206.284 419.737 201.028 419.737 195.613C441.213 195.613 462.69 195.613 484.817 195.613C484.817 267.064 484.817 338.515 484.817 412.131C340.393 412.131 195.969 412.131 47.1682 412.131C47.1682 340.68 47.1682 269.229 47.1682 195.613Z"
                  fill="#285EA5"
                />
                <path
                  d="M128.966 131.902C163.053 131.902 197.139 131.902 232.258 131.902C232.258 154.417 232.258 154.417 232.149 161.123C232.137 161.907 232.125 162.692 232.113 163.476C232.088 165.067 232.063 166.657 232.036 168.248C232.002 170.285 231.973 172.323 231.944 174.36C231.921 175.956 231.895 177.552 231.869 179.147C231.857 179.901 231.845 180.654 231.835 181.408C231.821 182.442 231.803 183.475 231.784 184.509C231.775 185.093 231.765 185.678 231.756 186.28C231.661 187.649 231.661 187.649 231.064 188.644C230.113 188.987 229.16 189.326 228.2 189.651C225.48 190.657 222.933 191.953 220.354 193.186C219.129 193.768 217.904 194.35 216.679 194.932C216.08 195.217 215.481 195.502 214.864 195.796C212.522 196.907 210.169 198.002 207.816 199.097C205.402 200.221 203.018 201.37 200.689 202.612C198.823 203.577 198.823 203.577 197.629 203.577C197.629 189.122 197.629 174.668 197.629 159.775C186.004 159.775 174.379 159.775 162.402 159.775C162.316 171.101 162.316 171.101 162.294 182.426C162.298 186.477 162.291 190.527 162.248 194.578C162.214 197.785 162.204 200.992 162.22 204.199C162.228 205.897 162.225 207.594 162.194 209.291C162.165 211.189 162.177 213.084 162.198 214.982C162.18 215.542 162.162 216.102 162.144 216.679C162.187 218.293 162.293 219.492 162.999 220.998C164.99 222.53 167.139 223.504 169.567 224.482C170.264 224.814 170.959 225.15 171.65 225.492C172.234 225.758 172.818 226.024 173.42 226.298C174.081 226.601 174.742 226.904 175.423 227.216C176.101 227.525 176.779 227.834 177.478 228.153C182.708 230.549 187.888 232.989 192.959 235.613C194.806 236.552 194.806 236.552 197.629 237.423C197.629 248.264 197.629 259.105 197.629 270.274C194.698 269.786 193.572 269.302 191.173 267.941C187.182 265.727 183.077 263.696 178.933 261.688C178.328 261.395 177.723 261.101 177.099 260.798C173.614 259.113 170.112 257.458 166.581 255.84C166.581 255.511 166.581 255.183 166.581 254.844C166.224 254.772 165.867 254.701 165.499 254.626C164.455 254.403 163.425 254.133 162.402 253.849C162.402 291.956 162.402 330.063 162.402 369.325C151.368 369.325 140.334 369.325 128.966 369.325C128.966 290.975 128.966 212.626 128.966 131.902Z"
                  fill="#333437"
                />
                <path
                  d="M308.683 63.7111C309.865 63.7111 311.047 63.7111 312.265 63.7111C312.399 64.9655 312.522 66.2197 312.638 67.4752C312.677 67.8259 312.715 68.1765 312.755 68.5378C312.972 70.9895 312.629 72.8326 311.668 75.1591C311.471 75.1591 311.274 75.1591 311.071 75.1591C311.071 71.5455 311.071 67.9319 311.071 64.2088C310.283 64.0445 309.495 63.8803 308.683 63.7111Z"
                  fill="#3369A1"
                />
              </g>
              <defs>
                <clipPath id="clip0_6_41">
                  <rect width="529" height="441" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <div className=" mt-8 max-w-md sm:ms-0">
              <p className="text-left leading-relaxed text-gray-400  ">
                Hold tight as we get our working robots together and produce the
                most astonishing product ever.
              </p>
              <div className="w-max">
                <Link
                  href={"/about"}
                  className="footer-btn rounded-full mt-6 font-medium text-white transition "
                  type="button"
                >
                  Learn More <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-left order-3">
            <p className="text-lg font-medium text-white">
              Quick Links
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <Link
                  className="footer-btn-2 text-gray-400 transition  "
                  href="/about"
                >
                  <span>
                    {" "}
                    <ChevronDoubleUpIcon className="rotate-90 inline px-0 h-6 w-6 text-custom-green" />
                  </span>
                  About Company
                </Link>
              </li>

              <li>
                <Link
                  className="footer-btn-2 text-gray-400 transition  "
                  href="/services"
                >
                  <span>
                    {" "}
                    <ChevronDoubleUpIcon className="rotate-90 inline px-0 h-6 w-6 text-custom-green" />
                  </span>
                  Latest Services
                </Link>
              </li>

              <li>
                <Link
                  className="footer-btn-2 text-gray-400 transition  "
                  href="/projects"
                >
                  <span>
                    {" "}
                    <ChevronDoubleUpIcon className="rotate-90 inline px-0 h-6 w-6 text-custom-green" />
                  </span>
                  Popular Works
                </Link>
              </li>

              <li>
                <Link
                  className="footer-btn-2 text-gray-400 transition  "
                  href="/contact"
                >
                  <span>
                    {" "}
                    <ChevronDoubleUpIcon className="rotate-90 inline px-0 h-6 w-6 text-custom-green" />
                  </span>
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-left order-4">
            <p className="text-lg font-medium text-white ">
              Our Services
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <Link
                  className="footer-btn-2 text-gray-400 transition  "
                  href="/service-details"
                >
                  <span>
                    {" "}
                    <ChevronDoubleUpIcon className="rotate-90 inline px-0 h-6 w-6 text-custom-green" />
                  </span>
                  Product Design
                </Link>
              </li>

              <li>
                <Link
                  className="footer-btn-2 text-gray-400 transition  "
                  href="/service-details"
                >
                  <span>
                    {" "}
                    <ChevronDoubleUpIcon className="rotate-90 inline px-0 h-6 w-6 text-custom-green" />
                  </span>
                  Design & Development
                </Link>
              </li>

              <li>
                <Link
                  className="footer-btn-2 text-gray-400 transition  "
                  href="/service-details"
                >
                  <span>
                    {" "}
                    <ChevronDoubleUpIcon className="rotate-90 inline px-0 h-6 w-6 text-custom-green" />
                  </span>
                  UX/UI Strategy
                </Link>
              </li>

              <li>
                <Link
                  className="footer-btn-2 text-gray-400 transition  "
                  href="/service-details"
                >
                  <span>
                    {" "}
                    <ChevronDoubleUpIcon className="rotate-90 inline px-0 h-6 w-6 text-custom-green" />
                  </span>
                  Search Engine
                </Link>
              </li>
              <li>
                <Link
                  className="footer-btn-2 text-gray-400 transition  "
                  href="/service-details"
                >
                  <span>
                    {" "}
                    <ChevronDoubleUpIcon className="rotate-90 inline px-0 h-6 w-6 text-custom-green" />
                  </span>
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link
                  className="footer-btn-2 text-gray-400 transition  "
                  href="/service-details"
                >
                  <span>
                    {" "}
                    <ChevronDoubleUpIcon className="rotate-90 inline px-0 h-6 w-6 text-custom-green" />
                  </span>
                  Software Development
                </Link>
              </li>
              <li>
                <a
                  className="footer-btn-2 text-gray-400 transition  "
                  href="/service-details"
                >
                  <span>
                    {" "}
                    <ChevronDoubleUpIcon className="rotate-90 inline px-0 h-6 w-6 text-custom-green" />
                  </span>
                  Business Analysis
                </a>
              </li>
            </ul>
          </div>

          <div className="text-left order-5">
            <p className="text-lg font-medium text-white ">
              Support
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <Link
                  className="footer-btn-2 text-gray-400 transition  "
                  href="/contact"
                >
                  <span>
                    {" "}
                    <ChevronDoubleUpIcon className="rotate-90 inline px-0 h-6 w-6 text-custom-green" />
                  </span>
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-left md:col-span-4 lg:col-span-2 order-2 md:order-last">
            <p className="text-lg font-medium text-white ">
              Stay in Touch
            </p>

            <div className=" mt-8 max-w-md sm:ms-0">
              <p className="text-start leading-relaxed text-gray-400 ">
                Enter you e-mail to get latest updates
              </p>

              <form className="mt-4">
                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start">
                  

                  <input
                    className="w-full rounded-full border-gray-200 bg-white px-6 py-3 shadow-sm  "
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                  />

                  <button
                    className="block rounded-full bg-indigo-500 px-8 py-3 font-medium text-white transition hover:bg-indigo-600"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-100 pt-6 sm:flex sm:items-center sm:justify-between ">
          <p className="text-center text-sm text-gray-500 sm:text-left ">
            Copyright &copy; {2024}. All rights reserved.
          </p>

          <ul className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-teal-700 transition hover:text-teal-700/75 "
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="size-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-teal-700 transition hover:text-teal-700/75 "
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="size-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-teal-700 transition hover:text-teal-700/75 "
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="size-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-teal-700 transition hover:text-teal-700/75 "
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="size-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-teal-700 transition hover:text-teal-700/75 "
              >
                <span className="sr-only">Dribbble</span>
                <svg
                  className="size-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
     </div>
    </footer>
  );
};

export default Footer;
