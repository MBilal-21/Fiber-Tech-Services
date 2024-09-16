import ServicePageTop from "@/components/ServicePageTop";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <ServicePageTop heading={"Search Engine Optimization (SEO) - Services"} />
      <div className="mx-auto  max-w-7xl  px-6  lg:px-8 py-6">
        <div className="flex flex-wrap justify-center items-center py-4">
          <div className="w-full lg:w-1/2 px-4">
            Attracting organic traffic as compared to paid Ads and campaigns
            always proves to be beneficial for local businesses as they get
            found by nearby customers. At Fiber Tech Services, we offer simple
            yet powerful search engine optimization (SEO) services that help
            your business show up more on Google and other search engines.
            Whether you are a small local business or aiming for a bigger
            audience, we have got the right SEO solution to ensure more people
            can find you online. Our services connect you with the right
            audience to get more reach on your website, which leads to more
            sales.
          </div>
          <div className="w-full lg:w-1/2 px-4">
            {/* image */}
            <Image
              src={"/Assets/services-images/seo.webp"}
              width={2000}
              height={2000}
              className="max-w-1/2 w-full max-h-96 object-cover overflow-hidden h-auto"
              alt="seo"
            />
          </div>
        </div>
        <div>
          <h2 className="text-gray-900 font-bold text-xl md:text-3xl py-4 ">
            What is SEO?
          </h2>
          <p>
            SEO improves a website to make it more visible on search engines
            like Google and Bing. The better your SEO, the higher your website
            ranks, which helps attract more visitors. A well-optimized website
            is faster and easier to use, and it helps you nail down potential
            customers quickly.
          </p>
        </div>

        <div>
          <div className="flex flex-wrap justify-center lg:flex-row-reverse items-center py-4">
            <div className="w-full lg:w-1/2 px-4">
              <h2 className="text-gray-900 font-bold text-xl md:text-3xl py-4 ">
                Why Choose Us For Your SEO Services?
              </h2>
              <ul>
                <li>● Increased Website Traffic</li>
                <li>● Better User Experience</li>
                <li>● Cost-Effective</li>
                <li>● Builds Trust & Credibility</li>
                <li>● Higher Conversion Rates</li>
                <li>● 24/7 Promotion</li>
                <li>● Long-Term Results</li>
                <li>● Local Reach </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              {/* image */}
              <Image
                src={"/Assets/services-images/Why-Choose-Us-For-Your-SEO-Services.jpg"}
                width={2000}
                height={2000}
                className="max-w-1/2 w-full max-h-96 object-cover overflow-hidden h-auto"
                alt="Why-Choose-Us-For-Your-SEO-Services"
              />
            </div>
          </div>
          <div>
            <h3 className="text-black font-semibold text-lg md:text-xl pt-4 pb-2">
              Key Parts of Our SEO Strategy
            </h3>
            <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
              On-Page SEO Services
            </h3>
            <p>
              We focus on making sure every part of your website is optimized,
              including titles, descriptions, and images, so it’s easy for
              search engines to understand and rank your site higher.
            </p>
            <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
              Off-Page SEO Services
            </h3>
            <p>
              Our off-page SEO services focus on building your reputation online
              by getting quality backlinks and engaging on social media. We make
              sure you get noticed by both users and search engines.
            </p>
            <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
              Technical SEO
            </h3>
            <p>
              We take care of the behind-the-scenes stuff like your website’s
              speed and mobile-friendliness to make sure Google can crawl and
              rank your site properly.
            </p>
            <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
              Keyword Research
            </h3>
            <p>
              We used advanced keyword hunting tools like SEMrush and Google
              Keyword Planner to hunt down the keywords that will get your site
              more traction.
            </p>
          </div>
          <div>
            <h3 className="text-black font-semibold text-lg md:text-xl pt-4 pb-2">
              Our Advanced SEO Strategies
            </h3>
            <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
              1. Voice Search Optimization
            </h3>
            <p>
              More people are using voice assistants like Alexa and Siri to
              search online. We help your site show up in voice search results
              by focusing on natural language (how people actually speak) and
              long-tail keywords. We also use schema markup to give search
              engines extra information about your content so that it can appear
              in voice searches.
            </p>
            <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
              2. Core Web Vitals
            </h3>
            <p>
              There are the three key factors Google uses to see how well your
              website works. We work on improving all these areas to make sure
              your site loads fast, responds quickly, and doesn’t have annoying
              shifts, giving users a smooth experience. <br />
              <br />
              Largest Contentful Paint (LCP): How fast your site loads. <br />
              First Input Delay (FID): How quickly users can interact with your
              site. <br />
              Cumulative Layout Shift (CLS): How stable your layout is while it
              loads.
            </p>
            <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
              3. E-A-T (Expertise, Authoritativeness, Trustworthiness)
            </h3>
            <p>
              Google wants to show trustworthy websites, and E-A-T is all about
              building that trust. The more Google trusts your site, the higher
              it ranks. We help you:
              <ul>
                <li>● By creating high-quality content.</li>
                <li>● Through getting backlinks from reliable websites.</li>
                <li>
                  ● Making sure your site has security features and honest
                  information about your business.
                </li>
              </ul>
            </p>
            <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
              4. AI and Machine Learning
            </h3>
            <p>
              We use artificial intelligence (AI) to make your SEO strategy even
              smarter. Using these tools, we can keep improving your SEO to
              match the latest trends online and keep your website's ranking
              high.
              <ul>
                <p>AI helps us:</p>
                <li>● Find the best keywords for your business.</li>
                <li>● Create content that matches searching trends.</li>
                <li>
                  ● Predict future trends so your site always stays ahead of the
                  competition.
                </li>
              </ul>
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-gray-900 font-bold text-xl md:text-3xl py-4 ">
            Why Choose Fiber Tech Services?
          </h2>
          <p>
            <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
              {" "}
              Understanding Local Market
            </h3>
            We understand the local market and offer the best local SEO
            services, which help people nearby find you more easily.
            <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
              Identifying Potential Customers
            </h3>
            Our services help your website and brand reach the right audience,
            getting you more traction and more buyers.
            <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
              Affordable SEO Services
            </h3>
            We know budgets can be tight, so we offer affordable SEO services
            that really work and give you value for your money.
          </p>
        </div>

        <div>
          <h2 className="text-gray-900 font-bold text-xl md:text-3xl py-4 ">
            Let Fiber Tech Services Help You Grow
          </h2>
          <p>
            Whether you're searching for top SEO services in the USA or just
            want your business to be seen locally, Fiber Tech Services has the
            right solution. Get in touch today to learn how our affordable SEO
            services can help grow your business!
          </p>
          <div className="text-center py-4">
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
