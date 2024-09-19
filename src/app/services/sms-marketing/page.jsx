import ServicePageTop from "@/components/ServicePageTop";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <ServicePageTop heading={"SMS Marketing - Services"} />
      <div className="mx-auto  max-w-7xl  px-6  lg:px-8 py-6">
        <div className="flex flex-wrap justify-center items-center py-4">
          <div className="w-full lg:w-1/2 px-4">
          <h2 className="text-gray-900 font-bold text-xl md:text-3xl py-4 ">
          SMS Marketing - Services
            </h2>
            Launching or advertising a brand demands proper branding or
            marketing, and what is the fastest way to do it other than SMS? One
            of the most efficient ways to do that is through SMS marketing
            services. At Fiber Tech Services (FTS), we provide SMS marketing
            solutions according to the unique needs of businesses, either big or
            small. With our services you can connect with your audience in an
            instant, offering promotions, updates, and more, all through a
            simple text message.
          </div>
          <div className="w-full lg:w-1/2 px-4">
            {/* image */}
            <Image
              src={"/Assets/services-images/sms-marketing-services.webp"}
              width={2000}
              height={2000}
              className="max-w-1/2 w-full max-h-96 object-cover overflow-hidden h-auto"
              alt="email-marketing-services"
            />
          </div>
        </div>

        {/* --------------- <h2 className="text-gray-900 font-bold text-xl md:text-3xl py-4 ">
        What is SMS Marketing?
            </h2>--------------- */}
        <div className="flex flex-wrap justify-center lg:flex-row-reverse items-center py-4">
          <div className="w-full lg:w-1/2 px-4">
            <h2 className="text-gray-900 font-bold text-xl md:text-3xl py-4 ">
              What is SMS Marketing?
            </h2>
            <p>
              SMS marketing involves sending promotional messages,
              notifications, or alerts directly to customers{"'"} mobile phones;
              whether you are looking to inform them about new offers,
              promotions, or events, SMS marketing allows you to reach them
              instantly.
            </p>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            {/* image */}
            <Image
              src={"/Assets/services-images/what-is-sms.svg"}
              width={5315}
              height={5315}
              className="max-w-1/2 w-full max-h-96 object-cover overflow-hidden h-auto"
              alt="what is SMS"
            />
          </div>
        </div>
        {/* Why Choose FTS for SMS Marketing?*/}
        <div>
          <h2 className="text-gray-900 font-bold text-xl md:text-3xl py-4 ">
            Why Choose FTS for SMS Marketing?
          </h2>
          <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
            Smart SMS Marketing for Small Businesses
          </h3>
          <p>
            Smart SMS Marketing for Small Businesses FTS is known for providing
            the best SMS marketing services in the industry. Our services are
            perfect for small business owners who cannot afford pricey marketing
            campaigns. You do not have to overpay just to be recognized anymore.
          </p>
          <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
            Affordable Solution
          </h3>
          <p>
            Our pricing plans are designed to suit businesses of all sizes. With
            affordable SMS marketing solutions, you can reach thousands of
            customers at a time without breaking the bank. Whether you are a
            small startup or a large corporation, we have a plan made, just for
            you.
          </p>
          <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
            Bulk SMS Marketing Service
          </h3>
          <p>
            Need to send messages to a large number of customers? Our bulk SMS
            marketing service makes it sure that you can deliver messages to
            thousands of people in just a few seconds. We offer a reliable
            platform for sending out bulk messages and it is efficient,
            effective, and even expandable.
          </p>
        </div>
        {/*  How We Work? */}
        <div className="flex flex-wrap justify-center items-center py-4">
          <h2 className="w-full  text-gray-900 font-bold text-xl md:text-3xl py-4 ">
            How We Work?
          </h2>
          <div className="w-full lg:w-1/2 px-4">
            <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
              Safe and Reliable Messaging with FTS
            </h3>
            <p>
              Send millions of messages that reach their destination! Don’t risk
              it with poor quality routes – trust FTS for reliable delivery
              every time.
            </p>
            <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
              Keep Your Contacts Updated
            </h3>
            <p>
              Our Smart SMS works better than email! You can easily update your
              contact list by sending forms through SMS and improving your
              database.
            </p>
            <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
              Flexible and Connects Everywhere
            </h3>
            <p>
              Have a website or online store? Use our tracking tools or connect
              to our API to send an SMS when customers visit a page or buy
              something. Keep them engaged in real time!
            </p>
            <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
              Save Money on Useless Numbers
            </h3>
            <p>
              Stop wasting money on sending SMS to inactive numbers. FTS
              automatically removes disabled numbers from your list. Have an
              email list? Send SMS only to those who didn’t open your emails!
            </p>
            <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
              Detailed Reports
            </h3>
            <p>
              Know everything about your SMS campaign with detailed reports in
              your FTS account – from deliveries to customer interactions, stay
              updated on your audience{"'"}s actions.
            </p>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            {/* image */}
            <Image
              src={
                "/Assets/services-images/how-we-work6976387_4574.webp"
              }
              width={5000}
              height={5000}
              className="max-w-1/2 w-full  h-auto"
              alt="how-we-work"
            />
          </div>
        </div>
        {/* SMS Marketing for Businesses

 */}
        <div className="flex flex-wrap justify-between items-center py-4">
          <div className="w-full lg:w-1/2 px-4">
            <h2 className="text-gray-900 font-bold text-xl md:text-3xl py-4 ">
              SMS Marketing for Businesses
            </h2>
            <p>
              SMS marketing is undoubtedly a great way of marketing for
              businesses of all sizes. Whether you’re an eCommerce store or a
              service provider, SMS marketing ensures that you can reach your
              customers where they are on their phones.
            </p>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <h3 className="text-black font-semibold text-lg md:text-xl pt-4 pb-2">
              Key Benefits of SMS Marketing
            </h3>
            <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
              High Open Rate
            </h3>
            <p>
              SMS messages have an open rate of 98%, which is far higher than
              emails or other forms of marketing, meaning your message is almost
              guaranteed to be seen.
            </p>
            <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
              Fast and Direct Communication
            </h3>
            <p>
              SMS allows for instant communication, making it perfect for
              time-sensitive promotions or updates.
            </p>
            <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
              Cost-Effective
            </h3>
            <p>
              Compared to other marketing channels, SMS marketing offers a lower
              cost per impression, making it ideal for businesses on a budget.
            </p>
          </div>
        </div>
        {/* Email Marketing Agency in the USA */}
        <div>
          <h2 className="text-gray-900 font-bold text-xl md:text-3xl py-4 ">
            Industries We Serve
          </h2>
          <p>
            No matter what industry you’re in, SMS marketing can work for you.
            Some sectors we cater to include:
          </p>
          <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
            Retail
          </h3>
          <p>
            {" "}
            Drive traffic to your store with exclusive promotions, discounts,
            and event notifications.
          </p>
          <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
            E-commerce
          </h3>
          <p>
            Keep your customers updated on their orders, special offers, and
            more with our SMS marketing for e-commerce services.
          </p>
          <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
            Healthcare
          </h3>
          <p>
            Send appointment reminders, health tips, or other important updates.
          </p>
          <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
            Events
          </h3>
          <p>
            Use SMS marketing to promote upcoming events and keep your audience
            informed.
          </p>
        </div>
        <div>
          <h2 className="text-gray-900 font-bold text-xl md:text-3xl py-4 ">
            SMS Marketing For International Clients
          </h2>
          <p>
            FTS provides SMS marketing services even for USA clients. Our expert
            team understands the US market and strategizes campaigns that are
            truly made for them, giving you lots of leads and sales. Whether you
            are looking to market in the USA or globally, FTS make it sure that
            your messages are delivered without delays or disruptions.
           
          </p>
          
         
          <div className="text-center py-4">
          <em>
              Whether you are a business just starting out or an established
              brand, Fiber Tech Services has got you covered. Get started today
              and watch your business grow!
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
