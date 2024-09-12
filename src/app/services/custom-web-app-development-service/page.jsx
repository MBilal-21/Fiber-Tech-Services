import Express from "@/components/Icons/Express";
import ServicePageTop from "@/components/ServicePageTop";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import StackIcon from "tech-stack-icons";

const WebAppDev = () => {
  return (
    <div>
      <ServicePageTop heading={"Custom Web App Development - Services"} />
      <div className="mx-auto  max-w-7xl  px-6  lg:px-8 py-6">
        <div className="flex flex-wrap justify-center items-center py-4">
          <div className="w-full lg:w-1/2 px-4">
            <p className="text-gray-900 text-lg">
              {" "}
              We are living in a digital world where everything is automated and
              advanced.{" "}
              <span className="text-custom-blue">
                {" "}
                So, why not your business go online and reach a greater number
                of masses?{" "}
              </span>
              Custom Web Applications are the solution to that. Businesses must
              stay ahead with their efficient, scalable, and easy-to-use web
              applications that will help them grow and get more conversions.
              That{"'"}s where our custom web app development services come in. We
              create business-specific solutions for each of our clients
              according to their requirements. Our approach is understanding and
              implementing your business with our expertise, providing you with
              a strong online presence.{" "}
            </p>
          </div>
          <div className="w-full lg:w-1/2 px-4">{/* image */}
          <Image src={"/Assets/services-images/custom-web-app-development0.webp"} width={617} height={480} alt="custom-web-app-development"/>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center py-4">
          <div className="w-full lg:w-1/2 px-4">
            <h2 className="text-gray-900 font-bold text-xl md:text-3xl py-4 ">
              Why Choose Custom Web App Development?
            </h2>
            <p className="text-gray-900 text-lg">
              Custom web applications are built specifically for your business.
              Unlike ready-made options, they offer flexibility and control.
              Here’s why custom web app development is a great choice:
            </p>
            {/* image */}
       <Image src={"/Assets/services-images/why-choose-custom-web-app-development-1.jpg"} width={1500} height={960} className="w-full h-auto py-4" alt="why-choose-custom-web-app-development"/>

          </div>
          <div className="w-full lg:w-1/2 px-4">
            <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
              Tailored to Your Needs
            </h3>
            <p>
              {" "}
              A custom web app provides an intuitive, user-friendly experience
              that your customers will love. It is designed to fit your specific
              business goals and user needs, ensuring a perfect match.
            </p>
            <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
              Improved Performance
            </h3>
            <p>
              Custom-built apps are optimized for better speed and performance,
              leading to a smooth user experience. So, even in the peak hours,
              your web app runs smoothly.
            </p>
            <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
              Enhanced Security
            </h3>
            <p>
              With custom development, you gain control over the security
              features, ensuring that your application complies with industry
              standards and protects sensitive data.
            </p>
            <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
              Unique Features
            </h3>
            <p>
              Custom web apps allow you to build unique features that meet the
              specific demands of your customers and business operations.
            </p>
            <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
              Improved Efficiency
            </h3>
            <p>
              By automating business processes and integrating key tools and
              systems, custom apps help streamline operations and boost
              productivity.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center py-4 lg:flex-row-reverse">
       <div className="w-full lg:w-1/2 px-4">
       <h2 className="text-gray-900 font-bold text-xl md:text-3xl py-4 ">Our Custom Web App Development Approach</h2>
       <p className="text-gray-900 text-lg">
       We believe in delivering top-notch custom web app development services that align with your business goals. Our way of working is transparent, relationship-driven, and flexible to your growing and changing needs.
       </p>
       {/* image */}
       <Image src={"/Assets/services-images/custom-web-app-development-approach.webp"} width={1500} height={960} className="w-full h-auto py-4" alt="custom-web-app-development-approach"/>
       </div>
       <div className="w-full lg:w-1/2 px-4">
       <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">Understanding Your Business Needs </h3>
       <p>We get started by understanding your business, your target audience, and the specific objectives you want to achieve with your custom web application. This helps us develop a solution that is perfectly aligned with your vision.</p>

       <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">Design & Development </h3>
       <p>Our experienced developers and designers work together to create a custom solution that looks great and performs even better.  Whether you need a custom web-based application or complex web app development services, we make sure that your application is cutting-edge and user-friendly.</p>
       <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">Regular Check-ins </h3>
       <p>We believe in regular communication with our clients to ensure the project is on track. We offer our clients updates at every stage, so you’re always informed about the progress we made.</p>
       <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">Support & Maintenance </h3>
       <p>Once your web app is live, our work doesn’t stop. We offer ongoing custom web app development service to keep your application running smoothly. From updates to bug fixes, our team is always on hand to ensure your app remains efficient all the time.</p>
       </div>
        </div>
        {/* ----------Our Expertise in Web Application Development------- */}
        <div>
        <h2 className="text-gray-900 font-bold text-xl md:text-3xl py-4 ">Our Expertise in Web Application Development</h2>
        <p>We take pride in our technical expertise and ability to deliver custom solutions that allow businesses to grow. full-stack developers handle both frontend and backend, ensuring your web app is efficient, secure, and scalable.</p>
        {/* -----Frontend Technologies---- */}
        <div>
        <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">Frontend Technologies</h3>
        <p>We create intuitive and interactive user interfaces that ensure a smooth user experience. The technologies we use are: </p>
{/* icons */}
<div className="flex flex-wrap justify-center gap-4 py-8">
<div className="flex flex-col justify-center items-center">
              <StackIcon className="h-12 w-12" name="html5" />
              HTML5,
            </div>
            <div className="flex flex-col justify-center items-center">
              <StackIcon className="h-12 w-12" name="css3" />
              CSS3,
            </div>
            <div className="flex flex-col justify-center items-center">
              <StackIcon className="h-12 w-12" name="js" />
              Javascript
            </div>
            <div className="flex flex-col justify-center items-center">
              <StackIcon className="h-12 w-12" name="reactjs" />
              React.js
            </div>
            
            <div className="flex flex-col justify-center items-center">
              <StackIcon className="h-12 w-12" name="bootstrap5" />
              Bootstrap
            </div>
            
           
           
            <div className="flex flex-col justify-center items-center">
              <StackIcon className="h-12 w-12" name="angular17" />
              AngularJS
            </div>
            <div className="flex flex-col justify-center items-center">
              <StackIcon className="h-12 w-12" name="vuejs" />
              Vue.js
            </div>
            <div className="flex flex-col justify-center items-center">
              <StackIcon className="h-12 w-12" name="jquery" />
              jQuery
            </div>
          </div>
        </div>
        {/* ---------Backend Technologies------ */}
        <div>
          
        <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">Backend Technologies</h3>
        <p>
        Our backend developers ensure the smooth operation of your web application by building robust server-side infrastructures. The technologies we use are:
        </p>
        {/* icons */}
        <div className="flex flex-wrap justify-center gap-4 py-8">
            <div className="flex flex-col justify-center items-center">
                <StackIcon className="h-12 w-12" name="csharp" />
             C# (.NET )
            </div>
            <div className="flex flex-col justify-center items-center">
              <StackIcon className="h-12 w-12" name="java" />
              Java
            </div>
            <div className="flex flex-col justify-center items-center">
            <StackIcon className="h-12 w-12" name="spring" />
              Spring
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex gap-4">
                <StackIcon className="h-12 w-12" name="python" />
                <StackIcon className="h-12 w-12" name="django" />
                <StackIcon className="h-12 w-12" name="flask" />
              </div>
              Python (Django/Flask)
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex gap-4">
                <StackIcon className="h-12 w-12" name="php" />
                <StackIcon className="h-12 w-12" name="laravel" />
              </div>
              PHP (Laravel/Symfony)
            </div>
            <div className="flex flex-col justify-center items-center">
             
                <StackIcon className="h-12 w-12" name="go" />
                
            
              Go (Golang)
            </div>
            <div className="flex flex-col justify-center items-center">
              <StackIcon className="h-12 w-12" name="ruby" />
              Ruby on Rails
            </div>
            <div className="flex flex-col justify-center items-center">
              <StackIcon className="h-12 w-12" name="kotlin" />
              Kotlin
            </div>
            <div className="flex flex-col justify-center items-center">
                <StackIcon className="h-12 w-12" name="nodejs" />
              Node.js
            </div>
            <div className="flex flex-col justify-center items-center">
                <Express className="h-12 w-12"  />
                Express.js
            </div>
          </div>
        </div>
        </div>
        <div>
        <h2 className="text-gray-900 font-bold text-xl md:text-3xl py-4 ">Affordable Custom Web App Development Services</h2>
        <p>We believe that high-quality custom development should be accessible to all businesses, regardless of size. That is why we offer affordable custom web app development services that provide you with the flexibility to create a custom solution without drying you out of your money. Whether you are a small business or a growing enterprise, we have pricing options that fit your budget.</p>
        </div>
        <div className="text-center text-custom-blue pt-6">
        <em >Are you ready to take your business to the next level with a custom web application? Our dedicated team of experts is here 24/7 to provide you with top-quality custom web app development services. Whether you have a vision or need guidance, we are here to make it happen.</em> <br />
        Reach out today and let us discuss how we can help you achieve your business goals with a tailor-made web application. You dream it, we deliver it! <br />
        </div>
       <div className="text-center pt-8"><button ><Link href={"/contact"} className="p-2 px-4 w-1/2 rounded-full bg-custom-blue text-white hover:bg-indigo-600">Contact Us</Link> </button></div>
      </div>
    </div>
  );
};

export default WebAppDev;
