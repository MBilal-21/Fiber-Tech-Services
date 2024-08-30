"use client";
import TopPage from "@/components/TopPage";
import React, { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { PhoneIcon, ChevronDoubleRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";


const AccordionItem = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="border border-gray-300 rounded-md mb-2 shadow-lg">
      <button
        className="flex justify-between rounded-md items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100 focus:outline-none"
        onClick={onToggle}
      >
        <span className="text-lg font-semibold">{title}</span>
        <span className="text-lg font-semibold">{isOpen ? "-" : "+"}</span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="p-6 text-gray-600">{children}</div>
      </div>
    </div>
  );
};

const Page = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <TopPage cureentText={"Services Details"} />
      <div>
        {/* service details section start */}
        <section className="service-details-area pt-130 rpt-100 pb-115 rpb-85">
          <div className="mx-auto  max-w-7xl  px-6  lg:px-8">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-8/12 p-4">
                <div className="service-details-content">
                  <div className="py-6">
                    <h2 className="text-gray-900 font-bold text-2xl md:text-5xl pb-4">Web Design &amp; Development</h2>
                  </div>
                  <p className="text-gray-600 text-justify font-medium">
                    Web design and development is the process of creating and
                    maintaining websites. It involves a combination of creative
                    and technical skills, such as graphic design, HTML, CSS,
                    JavaScript, and server-side scripting languages. The goal of
                    web design and development is to create a website that is
                    visually appealing, user-friendly, and accessible to a wide
                    audience. A successful website must also be optimized for
                    search engines, mobile devices, and other technical
                    considerations, in order to improve its search engine
                    ranking, attract more visitors, and provide a better user
                    experience. Good web design and development is critical for
                    businesses and organizations that want to establish or
                    enhance their online presence, reach a wider audience, and
                    grow their brand.
                  </p>
                  <div
                    className="my-6 wow fadeInUp delay-0-2s animated"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <Image
                      src="/Assets/service-details.jpg"
                      alt="fiber-tech-Service-Details"
                      width={770}
                      height={520}
                      layout="responsive"
                    />
                  </div>
                  <div className="flex flex-wrap">
                    <div
                      className="w-full md:w-1/2 mb-16 wow fadeInRight delay-0-2s animated"
                      style={{
                        visibility: "visible",
                        animationName: "fadeInRight",
                      }}
                    >
                      <h3 className="text-gray-900 font-bold text-xl md:text-3xl pb-4">
                        We Provide Best IT Services to Growth you Business
                      </h3>
                    </div>
                    <div
                      className="w-full md:w-1/2 mb-16 wow fadeInLeft delay-0-2s animated"
                      style={{
                        visibility: "visible",
                        animationName: "fadeInLeft",
                      }}
                    >
                      <ul className="list-style-one">
                        <li className="flex gap-2 text-gray-600 text-lg font-medium">
                          <CheckCircleIcon className="h-6 w-6 text-custom-blue" />
                          Comprehensive UI/UX Assessment
                        </li>
                        <li className="flex gap-2 text-gray-600 text-lg font-medium">
                          <CheckCircleIcon className="h-6 w-6 text-custom-blue" />
                          Deep Contextual Research &amp; Planning
                        </li>
                        <li className="flex gap-2 text-gray-600 text-lg font-medium">
                          <CheckCircleIcon className="h-6 w-6 text-custom-blue" />
                          Wireframe{"\'"}s &amp; Prototyping
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-wrap pb-16">
                    <div className="w-full md:w-1/2 mb-16 px-2 wow fadeInLeft delay-0-2s animated"
                      style={{
                        visibility: "visible",
                        animationName: "fadeInLeft",
                      }}
                    >
                      <p className="text-gray-600 font-medium leading-6 text-justify">
                        {" "}
                        Our IT services refer to a wide range of services
                        offered by information technology (IT) companies and
                        professionals that support and maintain an
                        organization{"\'"}s technology infrastructure. These services
                        can include network and server management, cloud
                        computing, software development, cyber security, data
                        management and backup, and technical support. IT
                        services help businesses to optimize their technology
                        use, improve productivity, and reduce costs. By
                        outsourcing IT services, organizations can focus on
                        their core business operations, while leaving the
                        management and maintenance of their technology to
                        experienced professionals. IT services are essential for
                        businesses of all sizes and industries, as technology
                        plays a critical role in today{"\'"}s digital economy.
                      </p>
                    </div>
                    <div className="w-full md:w-1/2 mb-16 px-4 wow fadeInRight delay-0-2s animated"
                      style={{
                        visibility: "visible",
                        animationName: "fadeInRight",
                      }}
                    >
                      <div className="image">
                        <img
                          src="/Assets/service-middle.jpg"
                          alt="Service"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap pb-16">
                    <div
                      className="w-full md:w-1/2 mb-16 wow fadeInLeft delay-0-2s animated"
                      style={{
                        visibility: "visible",
                        animationName: "fadeInLeft",
                      }}
                    >
                      <h3 className="text-gray-900 font-bold text-xl md:text-3xl pb-4">Odoo Implementation</h3>
                      <p className="text-gray-600 text-justify font-medium">
                        Odoo is a popular open-source enterprise resource
                        planning (ERP) software that provides businesses with a
                        comprehensive suite of tools for managing various
                        aspects of their operations, including accounting,
                        sales, procurement, project management, and more.
                        Implementing Odoo involves installing and configuring
                        the software to meet the specific needs and requirements
                        of a company. As a company that provides Odoo
                        implementation services, your goal is to help businesses
                        effectively utilize the software to improve their
                        operations, increase efficiency, and streamline
                        processes. To be a trusted partner in providing Odoo
                        implementation, it is important to have a deep
                        understanding of the software and the industries you
                        serve, as well as the ability to provide effective
                        training and support to your clients. Maintaining a high
                        level of customer satisfaction and delivering successful
                        projects on time and within budget can help establish
                        your reputation as a reliable and dependable Odoo
                        implementation partner.
                      </p>
                    </div>
                    <div
                      className="w-full md:w-1/2 mb-16 wow fadeInRight delay-0-2s animated"
                      style={{
                        visibility: "visible",
                        animationName: "fadeInRight",
                      }}
                    >
                      <div className="image">
                        <img src="/Assets/fiber-tech-partner-2.png" alt="fiber-tech-service-global" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-gray-900 font-bold text-xl md:text-3xl pb-4">Service Management</h3>
                  <p className="text-gray-600 text-justify font-medium">
                    We provide a systematic approach to delivering and managing
                    services in a customer-centric and efficient manner. It
                    encompasses a set of processes, practices, and tools that
                    enable organizations to design, deliver, operate, and
                    control their services to meet customer and business
                    requirements. Service management is often associated with IT
                    service management (ITSM) which focuses on the delivery of
                    IT services to customers, but the principles of service
                    management can be applied to other types of services as
                    well. Key components of service management include service
                    strategy, service design, service transition, service
                    operation, and continual service improvement. The goal of
                    service management is to provide high-quality services that
                    meet the needs of customers, while ensuring that the
                    delivery of those services aligns with the overall business
                    strategy and objectives.
                  </p>

                  {/* accordian start */}
                  <div className="w-full  mx-auto pt-16">
                    <AccordionItem
                      title="Why Get Our IT Services ?"
                      isOpen={openIndex === 0}
                      onToggle={() => toggleAccordion(0)}
                    >
                        <div >
                          <p>
                            Customers should consider getting our IT services
                            for several reasons:
                          </p>
                          <ol className="px-12" style={{listStyle: "decimal"}}>
                            <li>
                              Expertise: Your IT professionals have the
                              experience and expertise to deliver high-quality
                              services and provide effective solutions to
                              technology problems.
                            </li>
                            <li>
                              Cost-effectiveness: By outsourcing IT services,
                              customers can save money compared to hiring
                              full-time staff, as well as reduce
                              technology-related costs.
                            </li>
                            <li>
                              Improved productivity: Your IT services can
                              help customers optimize their technology use,
                              improve workflow efficiency, and increase
                              productivity.
                            </li>
                            <li>
                              Reliable support: Your IT services provide
                              customers with reliable technical support,
                              ensuring that their technology infrastructure is
                              always up and running.
                            </li>
                            <li>
                              Up-to-date technology: Your IT services keep
                              customers technology up-to-date, ensuring that
                              they stay ahead of the competition and meet the
                              latest industry standards.
                            </li>
                            <li>
                              Customized solutions: Your IT services can be
                              tailored to meet each customer{"\'"}s unique needs,
                              providing customized solutions that fit their
                              business and budget.
                            </li>
                          </ol>
                          Overall, your IT services offer customers the benefit
                          of having access to the latest technology, combined
                          with the peace of mind that comes with having a
                          reliable and experienced IT team at their service.
                          <p></p>
                        </div>
                    </AccordionItem>
                    <AccordionItem
                      title="BestTeam Member Provider ?"
                      isOpen={openIndex === 1}
                      onToggle={() => toggleAccordion(1)}
                    >
                       <div >
                          <p>
                            Providing the best team members can be a significant
                            advantage for organizations looking to outsource
                            their IT needs. Customers are more likely to choose
                            a provider that can offer a highly skilled,
                            experienced, and reliable team. To attract and
                            retain customers, it{"\'"}s important to consistently
                            deliver high-quality services and team members that
                            meet the specific needs of each customer. Strong
                            communication and collaboration, flexible solutions,
                            and a commitment to customer satisfaction can also
                            help set your team member provider apart and
                            establish a positive reputation in the industry.
                          </p>
                        </div>
                    </AccordionItem>
                    <AccordionItem
                      title="Learn About Our Company ?"
                      isOpen={openIndex === 2}
                      onToggle={() => toggleAccordion(2)}
                    >
                       <div>
                          <p>
                            FIBER TECH SERVICES(FTS) is a leading technology
                            company that provides innovative solutions for
                            businesses and organizations. With a focus on
                            delivering the highest quality services, our team of
                            experienced professionals offers a wide range of IT
                            services, including software development, network
                            and server management, cyber security, cloud
                            computing, and data management. At FTS we believe in
                            the power of technology to transform businesses and
                            drive growth. Our mission is to help our customers
                            achieve their goals by providing customized,
                            cost-effective, and reliable technology solutions.
                            We are dedicated to providing a high level of
                            customer service, working closely with each customer
                            to understand their unique needs and deliver the
                            right solution for their business. Whether you{"\'"}re
                            looking to improve productivity, stay ahead of the
                            competition, or simply keep your technology
                            infrastructure running smoothly, FTS has the
                            expertise and experience to help. Contact us today
                            to learn more about our services and how we can help
                            your business succeed.
                          </p>
                        </div>
                    </AccordionItem>
                    <AccordionItem
                      title="Payment Method ?"
                      isOpen={openIndex === 3}
                      onToggle={() => toggleAccordion(3)}
                    >
                      <div>
                          <p>
                            Payment method implementation is a crucial component
                            for businesses to ensure seamless and secure
                            transactions for their customers. Here are some
                            common payment methods businesses can implement:
                          </p>
                          <ol className="px-12" style={{listStyle:"decimal"}}>
                            <li>
                              Credit/Debit cards: Accepting credit/debit
                              cards is the most widely used payment method,
                              offering customers a convenient and secure way to
                              make purchases.
                            </li>
                            <li>
                              Online payment gateways: An online payment
                              gateway allows businesses to securely process
                              payments online through their website or mobile
                              app.
                            </li>
                            <li>
                              Mobile payments: Mobile payments allow
                              customers to pay with their mobile devices,
                              providing a fast and convenient option for
                              transactions.
                            </li>
                            <li>
                              Bank transfers: Bank transfers allow customers
                              to directly transfer funds from their bank account
                              to the business{"\'"}s account
                            </li>
                            <li>
                              Digital wallets: Digital wallets, such as Apple
                              Pay and Google Pay, store payment information
                              securely and allow customers to make purchases
                              with just a few taps.
                            </li>
                            <li>
                              Cash on delivery (COD): COD allows customers to
                              pay for their purchase upon delivery, providing an
                              alternative for those without access to
                              credit/debit cards or online payment options.
                            </li>
                          </ol>
                          <p>
                            It{"\'"}s important for businesses to choose the payment
                            methods that best meet their customers needs, while
                            also considering factors such as cost, security, and
                            ease of use. Implementing multiple payment options
                            can increase customer satisfaction and drive sales
                            by providing greater convenience and flexibility.
                          </p>
                        </div>
                    </AccordionItem>
                  </div>
                  {/* accordian end */}
                  
                </div>
              </div>
              <div className="w-full lg:w-4/12 p-8">
               
                  <div
                    className="text-center bg-gray-100 mb-6 py-4 wow fadeInUp delay-0-2s animated"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <h4 className="text-gray-900 font-bold text-xl  pb-4">Services Category</h4>
                    <ul className="px-16 md:px-8">
                      <li className="flex justify-between items-center bg-white mb-2 px-4 py-4 group hover:bg-custom-blue">
                        <Link className="group-hover:text-white font-bold" href="/services">IT Consulting</Link>
                        <ChevronDoubleRightIcon className="h-6 w-6  group-hover:text-white text-gray-500" />
                      </li>
                      <li className="flex justify-between items-center bg-white mb-2 px-4 py-4 group hover:bg-custom-blue">
                        <Link className="group-hover:text-white font-bold" href="/services">Product Design</Link>
                         <ChevronDoubleRightIcon className="h-6 w-6 group-hover:text-white text-gray-500" />
                      </li>
                      <li className="flex justify-between items-center bg-white mb-2 px-4 py-4 group hover:bg-custom-blue">
                        <Link className="group-hover:text-white font-bold" href="/services">Web Design</Link>
                         <ChevronDoubleRightIcon className="h-6 w-6 group-hover:text-white text-gray-500" />
                      </li>
                      <li className="flex justify-between items-center bg-white mb-2 px-4 py-4 group hover:bg-custom-blue">
                        <Link className="group-hover:text-white font-bold" href="/services">SEO Optimization</Link>
                         <ChevronDoubleRightIcon className="h-6 w-6 group-hover:text-white text-gray-500" />
                      </li>
                      <li className="flex justify-between items-center bg-white mb-2 px-4 py-4 group hover:bg-custom-blue">
                        <Link className="group-hover:text-white font-bold" href="/services">Web Development</Link>
                         <ChevronDoubleRightIcon className="h-6 w-6 group-hover:text-white text-gray-500" />
                      </li>
                      <li className="flex justify-between items-center bg-white mb-2 px-4 py-4 group hover:bg-custom-blue">
                        <Link className="group-hover:text-white font-bold" href="/services">UI/UX Strategy</Link>
                         <ChevronDoubleRightIcon className="h-6 w-6 group-hover:text-white text-gray-500" />
                      </li>
                    </ul>
                  </div>
                  <div className="overflow-hidden mx-auto relative my-8 bg-no-repeat  text-center"
                    style={{ backgroundImage:
                        "url(/Assets/cta-widget-bg.jpg)",
                        backgroundSize: "cover",
                    }}
                  >
                    <div className="bg-black/40 py-16 relative z-10">
                    <p className="text-lg text-gray-50 font-semibold ">Let{"\'"}s Work Together</p>
                    <h2 className=" text-3xl md:text-2xl text-gray-50  font-bold py-2">IT Service Agency</h2>
                    <a
                      href="contact.php"
                      className="group theme-btn bg-transparent border-2 border-black text-gray-100 after:bg-black hover:text-white my-4 flex gap-4"
                    >
                      Contact Us{" "}
                      <ChevronDoubleRightIcon className="h-6 w-6 text-gray-100 group-hover:text-white" />
                    </a>
                    <br />
                    <a href="callto:888 572 9311" className="text-lg font-bold text-white py-4 hover:text-custom-blue flex justify-center gap-4">
                      <PhoneIcon className="h-6 w-6 text-custom-green" /> 888
                      572 9311
                    </a>
                    <img
                      className="absolute top-8 -right-16 -z-10"
                      src="/Assets/design-images/footer-bg-line-shape.png"
                      alt="Shape"
                    />
                  </div>
                  </div>
                
              </div>
            </div>
          </div>
        </section>
        {/* service details section end */}
      </div>
    </div>
  );
};

export default Page;
