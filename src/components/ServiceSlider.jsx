'use client';
// import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const WhatWeProvide = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const services = [
//     {
//       index: 1,
//       imgSrc: '/Assets/services-images/service-three1.jpg',
//       title: 'Custom Software Development',
//       description:
//         'Custom software development refers to the creation of bespoke software solutions specifically designed to meet the unique needs and requirements of a business or organization.',
//       link: '/service-details',
//     },
//     {
//       index: 2,
//       imgSrc: '/Assets/services-images/service-three2.jpg',
//       title: 'Web Design (UI/UX) & Development',
//       description: 'Sed perspiciat unde omnis esteo natus sit voluptatem ways.',
//       link: '/service-details',
//     },
//     {
//       index: 3,
//       imgSrc: '/Assets/services-images/service-three3.jpg',
//       title: 'Cyber Security and IT Management',
//       description:
//         "Cybersecurity and IT management often intersect, as IT management is responsible for ensuring the security of the organization's technology assets.",
//       link: '/service-details',
//     },
//     // Add three more slides
//     {
//       index: 4,
//       imgSrc: '/Assets/services-images/service-three1.jpg',
//       title: 'Cloud Computing Services',
//       description:
//         'Cloud computing services offer scalable and flexible solutions for businesses to store and manage data, run applications, and more.',
//       link: '/service-details',
//     },
//     {
//       index: 5,
//       imgSrc: '/Assets/services-images/service-three2.jpg',
//       title: 'AI and Machine Learning',
//       description:
//         'Implement AI and machine learning solutions to enhance business intelligence and automate processes.',
//       link: '/service-details',
//     },
//     {
//       index: 6,
//       imgSrc: '/Assets/services-images/service-three3.jpg',
//       title: 'Blockchain Development',
//       description:
//         'Blockchain technology provides secure and transparent solutions for digital transactions and data management.',
//       link: '/service-details',
//     },
//   ];

//   const slidesToShow = 3;
//   const totalSlides = services.length;

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + slidesToShow) % totalSlides);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) =>
//       prev === 0 ? totalSlides - slidesToShow : prev - slidesToShow
//     );
//   };

//   return (
//     <section className="what-we-provide overflow-hidden py-32 md:py-24 relative z-1">
//       <div className="md:container mx-auto px-4">
//         <div className="section-title text-center mb-14">
//           <span className="py-2 text-lg font-bold text-custom-blue">
//             What We Provide
//           </span>
//           <h2 className="text-gray-900 font-bold text-2xl md:text-5xl pb-4">
//             Digital Core Services
//           </h2>
//         </div>
//         <div className='flex justify-between items-center gap-4'>
//           <button
//             onClick={prevSlide}
//             className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
//           >
//             &#8592;
//           </button>
//           <div className="relative flex-1">
//             <div className="flex overflow-hidden">
//               {services.slice(currentSlide, currentSlide + slidesToShow).map((service, idx) => (
//                 <ServiceItem
//                   key={idx}
//                   index={service.index}
//                   imgSrc={service.imgSrc}
//                   title={service.title}
//                   description={service.description}
//                   link={service.link}
//                 />
//               ))}
//             </div>
//           </div>
//           <button
//             onClick={nextSlide}
//             className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
//           >
//             &#8594;
//           </button>
//         </div>
//       </div>
//       <div className="about-bg-shape">
//         <Image
//           src="/Assets/services-images/what-we-provide.png"
//           alt="Shape"
//           width={1920}
//           height={1080}
//         />
//       </div>
//     </section>
//   );
// };

// const ServiceItem = ({ index, imgSrc, title, description, link }) => {
//   return (
//     <div className="service-item-three flex-shrink-0 w-full md:w-1/3 bg-white p-4 shadow-md rounded-lg mb-8 md:mb-0 mx-2">
//       <div className="image mb-4 relative">
//         <Image
//           src={imgSrc}
//           alt="Service"
//           width={410}
//           height={280}
//           className="rounded-md object-cover w-full h-52 md:h-64"
//         />
//         <a className="plus absolute top-2 right-2" href={imgSrc}>
//           <i className="fal fa-plus text-xl text-white"></i>
//         </a>
//       </div>
//       <div className="content">
//         <div className="top-part mb-4">
//           <span className="number text-lg font-bold text-gray-500">{`0${index}`}</span>
//           <div className="icon text-blue-500 text-2xl mb-2">
//             <i className="flaticon-coding-1"></i>
//           </div>
//           <h4 className="text-xl font-semibold">
//             <Link href={link}>{title}</Link>
//           </h4>
//         </div>
//         <div className="bottom-part">
//           <p className="text-gray-600 mb-4">{description}</p>
//           <Link href={link} className="read-more text-blue-500 font-semibold">
//             Read More <span className="ml-2" aria-hidden="true">→</span>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhatWeProvide;


import Image from 'next/image';
import Link from 'next/link';
import { PlusIcon } from "@heroicons/react/24/outline";



const WhatWeProvide = () => {
  return (
    <section className="what-we-provide overflow-hidden py-32 md:py-24 relative z-1">
      <div className="md:container mx-auto px-4">
        <div className="section-title text-center mb-14">
          <span className=" py-2 text-lg font-bold text-custom-blue">What We Provide</span>
          <h2 className='text-gray-900 font-bold text-2xl md:text-5xl pb-4'>Digital Core Services</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <ServiceItem
            index={1}
            imgSrc="/Assets/services-images/service-three1.jpg"
            title="Custom Software Development"
            description="Custom software development refers to the creation of bespoke software solutions specifically designed to meet the unique needs and requirements of a business or organization."
            link="/service-details"
            iconName="coding.png"
          />
          <ServiceItem
            index={2}
            imgSrc="/Assets/services-images/service-three2.jpg"
            title="Web Design (UI/UX) & Development"
            description="Sed perspiciat unde omnis esteo natus sit voluptatem ways."
            link="/service-details"
            iconName="multiple-layer.png"
          />
          <ServiceItem
            index={3}
            imgSrc="/Assets/services-images/service-three3.jpg"
            title="Cyber Security and IT Management"
            description="Cybersecurity and IT management often intersect, as IT management is responsible for ensuring the security of the organization's technology assets."
            link="/service-details"
            iconName="cyber-security.png"
          />
        </div>
      </div>
      <div className="about-bg-shape">
        <Image
          src="/Assets/services-images/what-we-provide.png"
          alt="Shape"
          width={1920} // Change according to actual dimensions
          height={1080} // Change according to actual dimensions
        />
      </div>
    </section>
  );
};

const ServiceItem = ({ index, imgSrc, title, description, link, iconName }) => {
  return (
    <div className="service-item-three bg-white p-6 shadow-md rounded-lg group">
      <div className="image mb-4">
        <Image src={imgSrc} alt="Service" width={410} height={280} className="rounded-md" />
        <a className="plus absolute top-2 right-2" href={imgSrc}>
        <PlusIcon className="h-24 w-24 mx-auto text-gray-50 " />
        </a>
      </div>
      <div className="content">
        <div className="top-part mb-4">
          <span className="number text-lg font-bold text-gray-500">{`0${index}`}</span>
          <div className="icon text-blue-500 text-2xl mb-2">
            <Image className='brightness-[5.5] md:brightness-[1] group-hover:brightness-[5.5]' src={`/Assets/icons/png/${iconName}`} width={64} height={64}/>
          </div>
          <h4 className="text-xl font-semibold">
            <Link href={link}>
              {title}
            </Link>
          </h4>
        </div>
        <div className="bottom-part">
          <p className="text-gray-600 mb-4">{description}</p>
          <Link href={link} className="read-more text-blue-500 font-semibold">
            Read More <span className="ml-2"aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhatWeProvide;
