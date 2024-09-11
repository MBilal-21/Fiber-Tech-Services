import ServicePageTop from "@/components/ServicePageTop";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <ServicePageTop heading={"Email Marketing - Services"} />
      <div className="mx-auto  max-w-7xl  px-6  lg:px-8 py-6">
        <div className="flex flex-wrap justify-center items-center py-4">
          <div className="w-full lg:w-1/2 px-4">
            Email marketing is an effective marketing type that involves sending
            emails to potential customers and prospects. With our best email
            marketing services, you can engage your customers more efficiently
            meanwhile driving business growth. Whether you’re a small business
            or a large organization, Fiber Tech Services offers customized
            solutions that guarantee real results. With our expert team and
            resources, we make it easy for you to send compelling campaigns that
            turn prospects into loyal customers and help you reach your business
            goals.
          </div>
          <div className="w-full lg:w-1/2 px-4">{/* image */}
          <Image 
              src={"/Assets/services-images/email-marketting.svg"}
              width={2000}
              height={2000}
              className="max-w-1/2 w-full max-h-96 object-cover overflow-hidden h-auto"
              alt="email-marketing-services"
          />
          
          </div>
        </div>
        <div>
          <h2 className="text-gray-900 font-bold text-xl md:text-3xl py-4 ">
            Why Choose Our Email Marketing Services?
          </h2>
          <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
            Targeted Campaigns
          </h3>
          <p>
            Our services ensure that your emails reach the right people at the
            right time. Either you need help targeting specific customer
            segments or setting up automated workflows, we’ve got you covered.
          </p>
          <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
            Proven Results
          </h3>
          <p>
            Fiber Tech Services is the best email marketing agency with a proven
            track record of success. Our campaigns are designed to increase
            customer engagement and drive conversions to the maximum level. All
            this so you get the best return on your investment.
          </p>
          <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
            Affordable Solutions
          </h3>
          <p>
            Whether you’re looking for email marketing services in the USA or
            worldwide, we provide cost-effective solutions that fit your budget.
            Even small businesses can benefit from our flexible plans.
          </p>
        </div>
        {/* --------------- <h2 className="text-gray-900 font-bold text-xl md:text-3xl py-4 ">
        Why Choose Our Email Marketing Services?
            </h2>--------------- */}
        <div className="flex flex-wrap justify-center lg:flex-row-reverse items-center py-4">
          <div className="w-full lg:w-1/2 px-4">
            <h2 className="text-gray-900 font-bold text-xl md:text-3xl py-4 ">
              The Best Email Marketing for Small Business
            </h2>
            <p>
              If you’re a small business owner, we know how important it is to
              stay connected with your customers. Our best email marketing for
              small business services is designed to help you build meaningful
              relationships without the hassle. We understand that you need best
              email marketing solutions for small business that are affordable
              and easy to manage. That’s why we offer customizable packages that
              allow you to grow your list, increase your revenue, and track
              performance all from one platform
            </p>
          </div>
          <div className="w-full lg:w-1/2 px-4">
          {/* image */}
          <Image 
              src={"/Assets/services-images/email-marketing-services.webp"}
              width={5315}
              height={5315}
              className="max-w-1/2 w-full max-h-96 object-cover overflow-hidden h-auto"
              alt="email-marketing-services"
          /></div>
        </div>
        {/* Tailored Solutions for E-commerce */}
        <div className="flex flex-wrap justify-center items-center py-4">
          <div className="w-full lg:w-1/2 px-4">
            <h2 className="text-gray-900 font-bold text-xl md:text-3xl py-4 ">
              Tailored Solutions for E-commerce
            </h2>
            <p>
              Running an online store? Our best email marketing service for
              e-commerce helps you send personalized product recommendations and
              targeted promotions that keep your customers coming back for more.
              Either it’s list management, content creation, or analytics, we do
              the heavy lifting so you can focus on your business. <br />
              ✔ Engage more customers <br />
              ✔ Recover abandoned carts <br />
              ✔ Increase repeat purchases <br />
            </p>
          </div>
          <div className="w-full lg:w-1/2 px-4">{/* image */}
          <Image 
              src={"/Assets/services-images/tailored-solutions-for-e-commerce.jpg"}
              width={3000}
              height={2000}
              className="max-w-1/2 w-full  h-auto"
              alt="email-marketing-services"
          />
          </div>
        </div>
        {/* Mass Email Marketing Service for Bigger Reach */}
        <div>
          <h2 className="text-gray-900 font-bold text-xl md:text-3xl py-4 ">
            Mass Email Marketing Service for Bigger Reach
          </h2>
          <p>
            If your goal is to reach a broader audience, Fiber Tech Services’
            mass email marketing service is the perfect solution. With mass
            emailing, you can easily promote your products, share updates, and
            engage large groups of customers in one go. Our advanced targeting
            ensures that even mass emails feel personal and relevant to each
            recipient. Either you're a small business looking to expand your
            reach or a large company in need of strategic direction, our email
            marketing service provider team is ready to help.
          </p>
        </div>
        {/* Email Marketing Agency in the USA */}
        <div>
          <h2 className="text-gray-900 font-bold text-xl md:text-3xl py-4 ">
            Email Marketing Agency in the USA
          </h2>
          <p>
            Based in the USA? We specialize in email marketing services in the
            USA and can offer you localized support and expertise. Our team has
            deep knowledge of the American market, and we tailor our campaigns
            to make sure they resonate with your audience. Whether you’re
            seeking help with a single campaign or looking for ongoing support,
            FTS’s email marketing agency in the USA is here to help. Our online
            email marketing services ensure you’re always ahead of the game.
          </p>
        </div>
        <div>
          <h2 className="text-gray-900 font-bold text-xl md:text-3xl py-4 ">
            Top Features of Our Email Marketing Services
          </h2>
          <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
            Automation
          </h3>
          <p>
            Set up triggers and workflows to send emails automatically based on
            customer actions. Whether it’s a welcome series or a re-engagement
            campaign, our automation makes it easy to nurture leads.
          </p>
          <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
            Segmentation
          </h3>
          <p>
            Our email internet marketing service allows you to segment your
            audience based on behaviors, preferences, and purchase history.
            Targeting the right customers has never been easier!
          </p>
          <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
            Custom Design
          </h3>
          <p>
            FTS provide professional design services that ensure your emails not
            only look good but also reflect your brand identity.
          </p>
          <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
            Analytics
          </h3>
          <p>
            Our detailed analytics and reporting tools give you insight into
            your campaigns' performance. Track open rates, click-throughs, and
            conversions to continuously improve your strategy.
          </p>
        </div>
        <div>
          <h2 className="text-gray-900 font-bold text-xl md:text-3xl py-4 ">
            Ready to Grow Your Business?
          </h2>
          <p>
            Partner with one of the best email marketing companies and take your
            email strategy to the next level. Whether you’re looking for
            professional email marketing services or need help getting started,
            Fiber Tech Services is here to help you achieve your goals.
          </p>
          <div className="text-center py-4">
            <em>
              Contact us today to find out how our top-tier email marketing
              services can make a real difference in your business!
            </em>{" "}
            <br />
            <button className="my-4">
              <Link
                href={"/contact"}
                className="p-2 px-4 w-1/2 rounded-full bg-custom-blue text-white hover:bg-indigo-600"
              >
                Contact Us
              </Link>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
