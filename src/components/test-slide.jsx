// components/ImageSlider.js
import Image from "next/image";
import React, { useState } from "react";
import './Style/test-slide.css'

const slides = [
  {
    id: 1,
    img:"/Assets/testi-img/testi-author1.jpg",
    content: (
      <div className="text-gray-600 m-auto p-4">
        <p>
          As a Top Website Development Company and Top Mobile Application
          Development Company in USA. They have experts in each technology and
          they have experience in working with different industries all over the
          World.
        </p>
        <div className=" flex gap-4 items-center justify-start">
            <Image src={"/Assets/testi-img/quotes.png"} width={32} height={32}/>
            <div>
          <span className="font-bold text-lg lg:text-2xl text-black">Waleed</span> <br />
          <span>CEO &amp; Founder</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    img:"/Assets/testi-img/testi-author2.jpg",
    content: (
      <div className=" m-auto text-gray-600 p-4">
        <p>
          They work on all trending mobile app technologies which include Native
          Android App Development, Native IOS App Development, React Native App
          Development, Ionic App Development, Hybrid App Development and Flutter
          App Development.
        </p>
        <div className=" flex gap-4 items-center justify-start">
            <Image src={"/Assets/testi-img/quotes.png"} width={32} height={32}/>
            <div>
          <span className=" font-bold text-lg lg:text-2xl text-black">Andrew D. Bricker</span> <br />
          <span>VP</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    img:"/Assets/testi-img/testi-author3.jpg",
    content: (
      <div className=" m-auto text-gray-600 p-4" >
        <p>
          I’m a client located in Canada. I gotta say this company is a GEM! You
          will not regret hiring them. The put client first and money second. Do
          not underpay them. Do not look elsewhere.
        </p>
        <div className="flex gap-4 items-center justify-start">
            <Image src={"/Assets/testi-img/quotes.png"} width={32} height={32}/>
            <div>
          <span className=" font-bold text-lg lg:text-2xl text-black"></span> <br />
          <span>CEO &amp; Founder</span>
          </div>
        </div>
      </div>
    ),
  },
];

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className=" w-full max-w-lg mx-auto ">
        {/* Custom Dots */}
      <div className=" w-full flex justify-center mt-2 py-2 border-b-2 border-gray-300">
        <div className="flex gap-2 ">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`p-1 rounded-full cursor-pointer ${
                currentSlide === index ? "bg-custom-green shadow-lg scale-110" : "bg-white"
              }`}
              onClick={() => goToSlide(index)}
            >
                <Image src={slide.img} alt={"auther"+ index} width={60} height={60} className="rounded-full"/>
            </div>
          ))}
        </div>
      </div>
      {/* Slider Content */}
      <div className="overflow-hidden mt-8  bg-custom-lighter">
        <div
          className="flex transition-transform duration-500 "
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="min-w-full  mx-auto p-4">
              {slide.content}
            </div>
          ))}
        </div>
      </div>

      

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full hidden"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full hidden"
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;
