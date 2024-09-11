import ServicePageTop from "@/components/ServicePageTop";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <ServicePageTop heading={"Cyber Security - Services"} />
      <div className="mx-auto  max-w-7xl  px-6  lg:px-8 py-6">
        <div className="flex flex-wrap justify-center items-center py-4">
          <div className="w-full lg:w-1/2 px-4">
            Cyber security services are like a must-have for anyone who has been
            running or opting to start an online business, professional
            individuals, or even personnel dealing with sensitive information.
            Cyber threats are increasing day-by-day, and therefore, it is
            important to protect sensitive data from hackers. With Fiber Tech
            Services’ tailored cybersecurity solutions, we are here to help.
            Either you are a large organization or someone seeking protection,
            we offer solutions that fit your specific needs.{" "}
          </div>
          <div className="w-full lg:w-1/2 px-4">{/* image */}
          <Image
              src={"/Assets/services-images/cyber-security-services.webp"}
              width={1500}
              height={995}
              className="max-w-1/2 w-full h-auto"
              alt="cyber-security-services"
            /></div>
        </div>
        {/* What is Cybersecurity? */}
        <div className="flex flex-wrap justify-center items-center py-4">
        <div className="w-full lg:w-1/2 px-4">
        <h2 className="text-gray-900 font-bold text-xl md:text-3xl py-4 ">What is Cybersecurity?</h2>
        <p>Cybersecurity is regarded as an art as much as a science by professionals in the field. It focuses on the protection of information systems and networks that enable electronic communication. It involves consulting, engineering, and IT security services that aim to reduce risk online threats of hacking and malfunctioning. These days, businesses, governments, or anyone who want to secure their online identity and data make use of it.</p>
        <div>
          <Image src={"/Assets/services-images/what-is-cyber-security.jpg"} width={1500} height={1001} className="w-full h-auto py-4" alt="what-is-cyber-security"/>
        </div>
        </div>
        <div className="w-full lg:w-1/2 px-4">
        <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">Cyber Security for Small Businesses</h3>
        <p>Small businesses are often prime targets for cyberattacks due to limited resources and security. That’s why FTS provide specialized cyber security services for small business owners. Our solutions offer the protection you need without breaking your budget. With our cybersecurity monitoring services, small businesses can rest easy knowing their networks are watched 24/7. We detect and respond to threats before they can even cause harm.</p>
        <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">Personal Cyber Security Services</h3>
        <p>Your personal data is valuable, and hackers know it. That is why we offer personal cybersecurity services to protect your sensitive information from the cyber intruders. Our home cyber security services make sure that your connected devices and home networks are protected. We put the right safeguards in your devices to protect your data and your privacy.</p>
        <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">Professional Cyber Security Services</h3>
        <p>FTS understand that businesses of all sizes require expert guidance to manage their security needs. Our cybersecurity consulting services offer professional advice and solutions according to your business objectives. Either you need help developing a security strategy or improving your defenses, we are here to assist. Our cyber consulting services offer deep insights into the latest cyber threats and how you can prevent them. </p>
        <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">Cyber Security for Individuals</h3>
        <p>Individuals are just as vulnerable to cyberattacks as any other business. FTS’ cybersecurity services for individuals are designed to safeguard your personal data and online identity. Focused on delivering top-level protection, we make sure all your security concerns are addressed effectively.</p>
        </div>
        </div>
        {/*Top Cyber Security Services in the USA  */}
        <div>
        <h2 className="text-gray-900 font-bold text-xl md:text-3xl py-4 ">Top Cyber Security Services in the USA</h2>
        <p>Fiber Tech Services is proud to be among the best cyber security companies that offer their services in even the USA. Our cyber security services in the USA cover everything from compliance requirements to threat detection and incident response. Wherever you are located, we offer our state-of-the-art protection to keep your organization secure. Whether you need cybersecurity services in the USA or custom solutions for your specific challenges, we are the trusted partner you can count on. </p>
          
        </div>

        {/* Why Choose Our Cyber Security Services? */}
        <div>
        <h2 className="text-gray-900 font-bold text-xl md:text-3xl py-4 ">Why Choose Our Cyber Security Services?</h2>
        <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">Custom Solutions</h3>
Every business is different, so we offer tailored cybersecurity services designed specifically for your needs. Whether you need cyber security services company expertise or support for a small business, we provide custom solutions that work for you.
<h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">24/7 Monitoring  </h3>
Our cybersecurity monitoring services protect your business round the clock. We identify threats in real-time, respond swiftly, and kill the evil in the bud so you never have to worry about your network’s safety.
<h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">Expert Guidance</h3>
Our cybersecurity consulting services offer expert insights, helping you understand and avoid any risks. Either it’s protecting sensitive data or meeting compliance standards, we’re here to help you through the complexities of cybersecurity.

        </div>

        {/*Why We’re One of the Best Cyber Security Companies?  */}
        <div>
        <h2 className="text-gray-900 font-bold text-xl md:text-3xl py-4 ">Why We’re One of the Best Cyber Security Companies?</h2>
        <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
              Comprehensive Solutions
            </h3>
Our services go beyond basic security; we provide tailored, industry-specific protection.
<h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
              Advanced Threat Protection
            </h3>
We monitor and address emerging cyber threats to keep your data and systems secure.
<h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
              Full-Service Provider
            </h3>
From continuous cybersecurity monitoring to professional services, we cover all aspects of security.
<h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
              24/7 Support
            </h3>
FTS offers round-the-clock monitoring and protection for businesses of all sizes.
<h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
              Experienced Team
            </h3>
Our cybersecurity experts are well-versed in the latest technologies and threats, providing top-tier guidance and support.
<h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
              Cutting-Edge Tools
            </h3>
We utilize the most advanced cybersecurity tools and techniques to safeguard your business.

        </div>

        <div className="py-8 text-center">
          <em>Let us handle your security while you focus on what matters most. Contact Fiber Tech Services today to learn more about how our cybersecurity services can protect your organization.</em>
        </div>
        <div className="text-center">
        <button className="my-2"><Link href={"/contact"} className="p-2 px-4 w-1/2 rounded-full bg-custom-blue text-white hover:bg-indigo-600">Contact Us</Link> </button></div>
      </div>
    </div>
  );
};

export default Page;
