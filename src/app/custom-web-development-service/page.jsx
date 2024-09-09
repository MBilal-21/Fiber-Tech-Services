
import "animate.css";
import Image from "next/image";
import Link from "next/link";
import StackIcon from "tech-stack-icons";
import Sqlite from "@/components/Icons/Sqlite";
import Neo4j from "@/components/Icons/Neo4j";
import MSdotNET from "@/components/Icons/MSdotNET";
import MSSQLServer from "@/components/Icons/MSSQLServer";
import { CloudIcon } from "@heroicons/react/24/outline";



const WebDev = () => {
  return (
    <div>
      <div className="relative isolate px-6  lg:px-8 pageTop ">
        <div className="mx-auto max-w-2xl py-20 sm:py-24 lg:py-30">
          <div className="flex flex-col items-center justify-center text-center animate-fadeInUp">
            <h1 className="text-4xl font-semibold tracking-tight text-gray-50 sm:text-6xl mb-6">
              Custom Web Development - Services
            </h1>
            <Link
              href={"/contact"}
              className="p-2 px-4 w-1/2 rounded-full bg-custom-blue text-white hover:bg-indigo-600"
            >
              Get Free Qoute
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto  max-w-7xl  px-6  lg:px-8 mt-8">
        <div>
          {/* <h1 className="text-gray-900 font-semibold text-2xl md:text-5xl py-4 text-center">
            {" "}
            Custom Web Development Services:
            <span className="text-custom-blue">
              {" "}
              Tailored Solutions for Your Unique Business Needs
            </span>
          </h1> */}
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-custom-blue font-semibold text-xl md:text-3xl py-4">
                Tailored Solutions for Your Unique Business Needs
              </h2>
              <p className=" text-gray-800 text-lg">
                In today{"'"}s competitive digital landscape, having a
                well-structured, functional, and a captivating website is a
                necessity for any business. However, just like not all
                businesses are the same, websites cannot be the same either. A
                website must reflect your unique brand identity, objectives, and
                what you really offer. This is where custom web development
                comes in. Our company offers custom web development services to
                design custom-made websites that meet your business{"'"}s
                specific requirements. This allows your website to stand out
                from the over-crowding market of your competitors.
              </p>
            </div>
            <div className="w-full lg:w-1/2 p-4">
              <Image
                src={
                  "/Assets/services-images/web-development-by-fiber-tech.png"
                }
                width={2898}
                height={2163}
                className="max-w-1/2 w-full h-auto"
                alt="web-development-by-fiber-tech"
              />
            </div>
          </div>
        </div>
        <div className="py-8">
          <div className="flex flex-wrap justify-center items-center py-8">
            <div className="w-full lg:w-1/2">
              <Image
                src={"/Assets/services-images/custom-web-development-2.jpg"}
                width={4000}
                height={2250}
                className="w-full p-4 h-auto "
                alt="web-development-by-fiber-tech"
              />
            </div>

            <div className="w-full  lg:w-1/2">
              <h2 className="text-custom-blue font-semibold text-xl md:text-3xl py-4 ">
                What is Custom Web Development?
              </h2>
              <p className="text-gray-800 text-lg">
                Custom web development is basically a process of creating
                websites that are uniquely designed to meet the needs of a
                specific business. Unlike ready-made templates, custom websites
                are unique and give you more flexibility, better scalability and
                functionality. Whether you need advanced e-commerce solutions,
                interactive tools, or a simple portfolio site with custom
                features, custom web development gives you the freedom to build
                exactly what you imagine.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center  relative">
            <div className="w-full lg:w-1/2 sticky top-0 p-4">
              <h2 className="text-gray-900 font-semibold text-xl md:text-3xl py-4 ">
                {" "}
                Our Custom Web Development Approach:{" "}
                <span className="text-custom-blue">
                  {" "}
                  Simple, Transparent, and Flexible
                </span>
              </h2>
              <p className="text-gray-800 text-lg">
                {" "}
                We understand that every business has different goals and
                challenges. That’s why we focus on offering web development
                solutions that fit perfectly with your specific needs, as client
                satisfaction is our top-most priority.
              </p>
            </div>
            <div className="w-full lg:w-1/2 p-4">
              <h2 className="text-gray-900 font-semibold text-xl md:text-2xl py-4 ">
                {" "}
                Our Approach{" "}
              </h2>
              <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
                {" "}
                1. Focused on Your Goals
              </h3>
              We start by understanding what you want to achieve. Either you
              want to launch a product, improve user experience, or expand your
              online presence, we build our plan around your goals.
              <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
                {" "}
                2. Clear and Transparent{" "}
              </h3>
              We believe in being open about our costs. We provide clear
              estimates and detailed rate breakdowns, so you always know what
              you{"'"}re paying for exactly. No hidden fees, no surprises.
              <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
                3. Building Strong Relationships{" "}
              </h3>
              We value genuine, long-term relationships with our clients. We
              take a human approach, working closely with you throughout the
              project. This creates an environment where innovation can happen
              naturally, even when things look difficult.
              <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2">
                {" "}
                4. Flexible and Ready to Adapt{" "}
              </h3>
              Your business needs can change, and we’re ready to adjust with
              you. Our contracts and team setups are flexible, so we can make
              quick changes as needed. We regularly revisit your goals and adapt
              to any shifts in direction.
            </div>
          </div>
          <h2 className="text-gray-900 font-semibold text-xl md:text-3xl py-4 ">
            {" "}
            Affordable Custom Web Development Solutions
          </h2>
          We believe that top-tier web development should be accessible to
          businesses of all sizes. We offer affordable custom website design
          services that cater to startups and growing businesses without
          compromising on quality. Our solutions are built to grow with your
          business. We make sure you have the flexibility to scale up when you
          need to. Our aim is to help you get the best value for your investment
          meanwhile building a strong presence online.
          <h2 className="text-gray-900 font-semibold text-xl md:text-3xl py-4 ">
            {" "}
            Web Development Services in USA{" "}
          </h2>
          For businesses operating in or targeting the U.S. market, we offer
          specialized custom web development services in the USA. These services
          are tailored to comply with U.S. standards and are supported by a
          dedicated team familiar with the local market. Whether you{"'"}re
          launching a new product or expanding your digital footprint, our
          custom web development services USA package is designed to ensure your
          online presence resonates with your audience.
          <h2 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2 ">
            {" "}
            Frontend Web Development Technologies{" "}
          </h2>
          We use the latest technologies to build responsive, engaging frontend
          web applications that perform flawlessly across devices:
          <br />
          <div className="flex flex-wrap justify-center gap-4 py-8">
            <div className="flex flex-col justify-center items-center">
              <StackIcon className="h-12 w-12" name="reactjs" />
              React & React Native
            </div>
            <div className="flex flex-col justify-center items-center">
              <StackIcon className="h-12 w-12" name="flutter" />
              Flutter
            </div>
            <div className="flex flex-col justify-center items-center">
              <StackIcon className="h-12 w-12" name="bootstrap5" />
              Bootstrap
            </div>
            <div className="flex flex-col justify-center items-center">
              <StackIcon className="h-12 w-12" name="ionic" />
              Ionic
            </div>
            <div className="flex flex-col justify-center items-center">
              <StackIcon className="h-12 w-12" name="html5" />
              HTML,
            </div>
            <div className="flex flex-col justify-center items-center">
              <StackIcon className="h-12 w-12" name="css3" />
              CSS,
            </div>
            <div className="flex flex-col justify-center items-center">
              <StackIcon className="h-12 w-12" name="js" />
              Javascript
            </div>
            <div className="flex flex-col justify-center items-center">
              <StackIcon className="h-12 w-12" name="jquery" />
              jQuery
            </div>
            <div className="flex flex-col justify-center items-center">
              <StackIcon className="h-12 w-12" name="angular" />
              AngularJS
            </div>
            <div className="flex flex-col justify-center items-center">
              <StackIcon className="h-12 w-12" name="vuejs" />
              Vue.js
            </div>
            <div className="flex flex-col justify-center items-center">
              <StackIcon className="h-12 w-12" name="backbonejs" />
              Backbone.js
            </div>
          </div>
          <h2 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2 ">
            {" "}
            Backend Web Development Technologies{" "}
          </h2>
          Our team specializes in backend technologies that ensure your website
          is fast, secure, and capable of handling any traffic load: <br />
          <div className="flex flex-wrap justify-center gap-4 py-8">
            <div className="flex flex-col justify-center items-center">
              <div className="flex gap-4">
                <MSdotNET className="h-12 w-12" />
                <StackIcon className="h-12 w-12" name="csharp" />
              </div>
              Microsoft .NET and C#
            </div>
            <div className="flex flex-col justify-center items-center">
              <StackIcon className="h-12 w-12" name="java" />
              Java
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex gap-4">
                <StackIcon className="h-12 w-12" name="python" />
                <StackIcon className="h-12 w-12" name="django" />
                <StackIcon className="h-12 w-12" name="flask" />
              </div>
              Python (Django, Flask, Pyramid)
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex gap-4">
                <StackIcon className="h-12 w-12" name="php" />
                <StackIcon className="h-12 w-12" name="laravel" />
              </div>
              PHP (Laravel, Symfony)
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex gap-4">
                <StackIcon className="h-12 w-12" name="go" />
                <StackIcon className="h-12 w-12" name="docker" />
                <StackIcon className="h-12 w-12" name="kubernetes" />
              </div>
              Golang (Docker, Kubernetes)
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
              <div className="flex gap-4">
                <StackIcon className="h-12 w-12" name="nodejs" />
                <StackIcon className="h-12 w-12" name="nextjs2" />
              </div>
              Node.js (Express, Meteor.js, Next.js)
            </div>
          </div>
          <div>
          <h2 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2 ">
            {" "}
            Databases
          </h2>
          We work with a range of databases, ensuring your data is stored and
          managed securely and efficiently: <br />
          <div className="flex justify-center gap-4 py-8">
            <div className="flex flex-col justify-center items-center">
              <StackIcon className="h-12 w-12" name="oracle" />
              Oracle
            </div>

            <div className="flex flex-col justify-center items-center">
              <StackIcon className="h-12 w-12" name="mysql" />
              MySQL
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="h-12 w-12">
                <MSSQLServer />
              </span>
              Microsoft SQL Server
            </div>
            <div className="flex flex-col justify-center items-center">
              <StackIcon className="h-12 w-12" name="postgresql" />
              PostgreSQL
            </div>
            <div className="flex flex-col justify-center items-center">
              <StackIcon className="h-12 w-12" name="mongodb" />
              MongoDB
            </div>
            <div className="flex flex-col justify-center items-center">
              <StackIcon className="h-12 w-12" name="redis" />
              Redis
            </div>
            <div className="flex flex-col justify-center items-center">
              <StackIcon className="h-12 w-12" name="cassandradb" />
              Cassandra
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="h-12 w-12">
                {" "}
                <Sqlite />
              </span>
              SQLite
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="h-12 w-12">
                {" "}
                <Neo4j />
              </span>
              Neo4j
            </div>
          </div>
          </div>
          <div>

        
          <h2 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2 ">
            {" "}
            Cloud Solutions{" "}
          </h2>
          As cloud adoption grows, we offer full support for leading cloud
          platforms: 
          <div className="flex justify-center items-center gap-4 py-8">
                <div className="flex flex-col justify-center items-center"><StackIcon className="h-12 w-12" name="amznwebserv" /> Amazon Web Services (AWS)</div>
                <div className="flex flex-col justify-center items-center"><StackIcon className="h-12 w-12" name="azure" /> Microsoft Azure</div>
                <div className="flex flex-col justify-center items-center"><StackIcon className="h-12 w-12" name="gcloud" />Google Cloud Platform</div>
                <div className="flex flex-col justify-center items-center"><CloudIcon className="h-12 w-12 text-gray-500" />Alibaba Cloud</div>
                <div className="flex flex-col justify-center items-center"><StackIcon className="h-12 w-12" name="oracle" />Oracle Cloud</div>
                <div className="flex flex-col justify-center items-center"><CloudIcon className="h-12 w-12 text-gray-500" />VMware</div>
          {/* ●  ●  ● 
          ●  ●  ●   */}
          </div>
          Our team also specializes in Cloud DevOps tools, ensuring that your
          web applications are built and deployed efficiently across cloud
          environments.
          </div>
          <div className="py-8">
          <h2 className="text-gray-900 font-semibold text-xl md:text-3xl py-4 ">
            {" "}
            The Benefits of Custom Web Development{" "}
          </h2>
          <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2 ">
            {" "}
            Superior Security
          </h3>
          Tailor-made sites allow you to integrate advanced security measures,
          ensuring that your website is well-protected against cyber threats.
          Whether it’s secure payment gateways or advanced encryption protocols,
          our custom web development services offer maximum protection for both
          you and your users.
          <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2 ">
            {" "}
            Faster Load Times
          </h3>
          Custom websites are optimized for performance, leading to faster load
          times. This improves user experience and also raises your site’s
          Google ranking. Custom web development design allow your website to
          run efficiently, even in peak traffic hours.
          <h3 className="text-custom-blue font-semibold text-lg md:text-xl pt-4 pb-2 ">
            Better ROI
          </h3>
          Investing in custom web development services offers long-term benefits
          as your business grows. This reduces maintenance costs and increase
          the flexibility of your website. A well-optimized and user-friendly
          website can drive more traffic which in return leads to increased
          conversions and, ultimately, a higher return on investment.
          </div>
          <div className="py-8">
          <h2 className="text-gray-900 font-semibold text-xl md:text-3xl py-4 ">
            {" "}
            Prospect
          </h2>
          Choosing custom web development services is the first step toward
          building a unique, flexible, and scalable online presence. Our expert
          team of developers and designers will work with you every step of the
          way to ensure your website meets the highest standards of quality and
          user experience. So, are you ready to take your business to the next
          level with a custom website? Contact us today for more information on
          our custom web development and custom web development services in the
          USA.
        </div>
        </div>
      </div>
    </div>
  );
};

export default WebDev;
