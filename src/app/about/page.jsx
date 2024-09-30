import CompanyStatistic from "@/components/CompanyStatistic";
import TopPage from "@/components/TopPage";
import Image from "next/image";
import Link from "next/link";
import { Tabs, Tab } from "@/components/Tabs";
import { CheckIcon } from "@heroicons/react/24/outline";
import Testimonials from "@/components/Testimonials";
import QuoteForm from "@/components/QuoteForm";

export const metadata = {
  title: 'About Us – Fiber Tech Services',
  description: 'Learn about Fiber Tech Services and how we deliver exceptional digital marketing solutions. Discover our commitment to your success and innovative approach.',
  alternates: {
    canonical: "https://fibertechservices.net/about", // Add your canonical URL here
  },
}
const AboutPage = () => {
  return (
    <>
      <div>
        <TopPage cureentText={"About us"} />

        {/* About Area start */}

        <section className="about-area-five relative z-10 mx-auto  max-w-7xl  px-6  lg:px-8">
          <div className="flex flex-wrap items-center py-24">
            <div className="w-full lg:w-1/2 p-4">
              <div
                className="about-five-images relative z-10 wow fadeInRight delay-0-2s animated"
                style={{ visibility: "visible", animationName: "fadeInRight" }}
              >
                <Image
                  className="img"
                  src="/Assets/about/about-five1.jpg"
                  alt="fiber-tech-services-about"
                  width={380}
                  height={480}
                />
                <Image
                  className="img"
                  src="/Assets/about/about-five2.jpg"
                  alt="fiber-tech-services-about"
                  width={380}
                  height={380}
                />
                <div className="experience-years">
                  <span className="years">25</span>
                  <h4>Years Of Experience IT Solutions</h4>
                </div>
                <Image
                  className="abut-bg-shape"
                  src="/Assets/about/about-five-bg.png"
                  alt="fiber-tech-services-about-background"
                  width={721}
                  height={681}
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-4">
              <div
                className="about-content relative z-10 wow fadeInLeft delay-0-2s animated"
                style={{ visibility: "visible", animationName: "fadeInLeft" }}
              >
                <div className="section-title mb-12">
                  <span className="sub-title py-2 text-lg font-bold text-custom-blue">
                    About Company
                  </span>
                  <h2 className="text-gray-900 font-bold text-2xl md:text-5xl pb-4">
                    Best talent, Competitive Cost, Incredible IT Service
                    Infrastructure
                  </h2>
                </div>
                <div className="flex flex-wrap">
                  <div className="w-full md:w-1/2 p-2">
                    <div className="service-item style-three">
                      <div className="icon">
                        <Image
                          src={"/Assets/icons/png/trophy.png"}
                          width={64}
                          height={64}
                          alt="trophy-icon"
                          style={{
                            filter:
                              " brightness(0) saturate(100%) invert(33%) sepia(14%) saturate(3486%) hue-rotate(178deg) brightness(97%) contrast(93%)",
                          }}
                        />
                      </div>
                      <Link
                        href="/services"
                        className="text-gray-900 font-bold text-xl pb-4 hover:text-custom-blue"
                      >
                        <h4 className="py-2">Awards Winning Company</h4>
                      </Link>
                      <p className="text-gray-600 text-justify">
                        Receiving awards can be a significant accomplishment for
                        a company and a recognition of its achievements and
                        efforts. Awards can provide valuable exposure and help
                        increase brand recognition, attract new customers and
                        clients, and differentiate your company from its
                        competitors. In addition, they can boost employee morale
                        and motivate them to strive for even greater success.
                        Congratulations on being an award-winning company!
                      </p>
                      {/* <Link
                        href="/services"
                        className="footer-btn rounded-full mt-6 font-semibold text-gray-900 transition "
                      >
                        Read More <span aria-hidden="true">&rarr;</span>
                      </Link> */}
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 p-2">
                    <div className="service-item style-three">
                      <div className="icon">
                        <Image
                          src={"/Assets/icons/png/pie-chart.png"}
                          width={64}
                          height={64}
                          alt="pie-chart"
                          style={{
                            filter:
                              " brightness(0) saturate(100%) invert(33%) sepia(14%) saturate(3486%) hue-rotate(178deg) brightness(97%) contrast(93%)",
                          }}
                        />
                      </div>
                      <Link
                        href="/services"
                        className="text-gray-900 font-bold text-xl pb-4 hover:text-custom-blue py-2"
                      >
                        <h4 className="py-2">
                          Startup IT Solution &amp; Business Dev
                        </h4>
                      </Link>
                      <p className="text-gray-600 text-justify">
                        FTS company focuses on developing and delivering
                        innovative technology solutions for new and emerging
                        businesses. It provides a wide range of services to
                        support the growth and success of startups, including
                        software development, IT infrastructure setup, business
                        strategy and planning, market research, marketing and
                        sales support, and fundraising support. The goal of a
                        startup IT solution and business development company is
                        to help startups leverage technology to achieve their
                        business goals and overcome challenges in their
                        industry. By providing a comprehensive range of services
                        and expertise, startups can focus on growing their
                        business and achieving their vision, while the IT
                        solution and business development company takes care of
                        the technology and business development aspects.
                      </p>
                      {/* <Link
                        href="/services"
                        className="footer-btn rounded-full mt-6 font-semibold text-gray-900 transition "
                      >
                        Read More <span aria-hidden="true">&rarr;</span>
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Area end */}
        {/* service area section three start */}
        <section className="relation z-10">
          <div className="mx-auto  max-w-7xl  px-6  lg:px-8">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 lg:w-4/12 p-2 ">
                <div
                  className=" wow fadeInUp delay-0-2s bg-gray-100 text-gray-500  hover:bg-gray-50 hover:drop-shadow-[0_25px_10px_rgba(103,77,243,0.15)] p-10 text-justify"
                  style={{ visibility: "visible" }}
                >
                  <div className="icon">
                    <Image
                      src={"/Assets/icons/png/agile.png"}
                      width={64}
                      height={64}
                      alt="agile"
                      style={{
                        filter:
                          " brightness(0) saturate(100%) invert(33%) sepia(14%) saturate(3486%) hue-rotate(178deg) brightness(97%) contrast(93%)",
                      }}
                    />
                  </div>
                  <h4 className="py-4">
                    <Link
                      href="/services"
                      className="hover:text-custom-blue font-bold text-2xl text-black py-4"
                    >
                      Simplicity
                    </Link>
                  </h4>
                  <p>
                    Simplicity refers to the quality or state of being
                    straightforward, uncomplicated, and easy to understand or
                    use. In the context of design, it refers to the idea that
                    less is often more, and that products, services, or systems
                    should be designed in a way that makes them easy to use and
                    understand, with minimal clutter and distractions.
                    Simplicity can lead to better user experiences, increased
                    efficiency and productivity, and lower costs and barriers to
                    entry. In business, it can also help companies to stand out
                    in a crowded market by offering a streamlined and
                    straightforward solution to customer needs. The principle of
                    simplicity can be applied to various aspects of business,
                    including product design, marketing, customer service, and
                    operations
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-4/12 p-2">
                <div
                  className=" wow fadeInUp delay-0-4s   bg-gray-100 text-gray-500  hover:bg-gray-50 hover:drop-shadow-[0_25px_10px_rgba(103,77,243,0.15)] p-10 text-justify"
                  style={{ visibility: "visible" }}
                >
                  <div className="icon">
                    <Image
                      src={"/Assets/icons/png/target.png"}
                      width={64}
                      height={64}
                      alt="target"
                      style={{
                        filter:
                          " brightness(0) saturate(100%) invert(33%) sepia(14%) saturate(3486%) hue-rotate(178deg) brightness(97%) contrast(93%)",
                      }}
                    />
                  </div>
                  <h4 className="py-4">
                    <Link
                      href="/services"
                      className="hover:text-custom-blue font-bold text-2xl text-black"
                    >
                      Social Good
                    </Link>
                  </h4>
                  <p>
                    FTS focuses on actions or initiatives aimed at benefiting
                    society and creating positive change in communities and the
                    world. It encompasses a wide range of activities, such as
                    volunteerism, philanthropy, and advocacy, that aim to
                    address social, environmental, and economic challenges and
                    improve the quality of life for individuals and communities.
                    Social good can also refer to the positive impact that a
                    business or organization can have on society, through
                    practices such as environmental sustainability, fair labor
                    practices, and community involvement. Companies that
                    prioritize social good often place a strong emphasis on
                    corporate responsibility and strive to balance their
                    economic interests with the well-being of society and the
                    planet. By making a positive impact on the world, companies
                    can build stronger relationships with customers, employees,
                    and stakeholders, and contribute to a more just and
                    sustainable future.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-4/12 p-2">
                <div
                  className=" wow fadeInUp delay-0-6s   bg-gray-100 text-gray-500  hover:bg-gray-50 hover:drop-shadow-[0_25px_10px_rgba(103,77,243,0.15)] p-10 text-justify"
                  style={{ visibility: "visible" }}
                >
                  <div className="icon">
                    <Image
                      src={"/Assets/icons/png/goal.png"}
                      width={64}
                      height={64}
                      alt="goal icon"
                      style={{
                        filter:
                          " brightness(0) saturate(100%) invert(33%) sepia(14%) saturate(3486%) hue-rotate(178deg) brightness(97%) contrast(93%)",
                      }}
                    />
                  </div>
                  <h4 className="py-4">
                    <Link
                      href="/services"
                      className="hover:text-custom-blue font-bold text-2xl text-black"
                    >
                      Trust Partner
                    </Link>
                  </h4>
                  <p>
                    Becoming a trust partner company is a significant
                    accomplishment and can bring many benefits to your business.
                    Trust is the foundation of strong relationships with
                    customers, suppliers, and other stakeholders, and it is
                    crucial to building long-term success and growth. To become
                    a trust partner, it is important to consistently deliver
                    high-quality products and services, act transparently and
                    ethically in all your dealings, and have a strong commitment
                    to customer satisfaction. Building a culture of trust within
                    your organization, from leadership to employees, can help to
                    reinforce these values and ensure that they are consistently
                    upheld. Additionally, being transparent about your business
                    practices, being responsive to customer needs, and being
                    proactive in addressing potential issues can help to further
                    build trust with your stakeholders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* service area section three end */}
        {/* company statistic start */}
        <CompanyStatistic />
        {/* company statistic end */}

        {/* team area section three start */}

        <section className="team-area-two relative pt-24">
          <div className="mx-auto  max-w-7xl  px-6  lg:px-8">
            <div
              className="section-title text-center mb-24 wow fadeInUp delay-0-2s"
              style={{ visibility: "visible" }}
            >
              <span className="sub-title  py-2 text-lg font-bold text-custom-blue">
                Team Member
              </span>
              <h2 className="text-gray-900 font-bold text-2xl md:text-5xl pb-4">
                Amazing Team Members
              </h2>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-1/2 lg:w-4/12 xl:w-3/12 p-2">
                <div
                  className="team-member style-two wow fadeInUp delay-0-2s"
                  style={{ visibility: "visible" }}
                >
                  <Image
                    className="img"
                    src="/Assets/about/team/member1.jpg"
                    alt="fiber-tech-service-team"
                    width={230}
                    height={230}
                  />
                  <h4 className="text-xl font-bold text-black">
                    Johnathan P. Bailey
                  </h4>
                  <span className="designation text-md text-gray-500">
                    UX/UI Designer
                  </span>
                  <div className="social-style-two gap-4">
                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-custom-blue transition hover:bg-custom-blue/75 hover:text-white p-2 rounded-full  "
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

                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-custom-blue transition hover:bg-custom-blue/75 hover:text-white p-2 rounded-full  "
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

                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-custom-blue transition hover:bg-custom-blue/75 hover:text-white p-2 rounded-full  "
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

                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-custom-blue transition hover:bg-custom-blue/75 hover:text-white p-2 rounded-full  "
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
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-4/12 xl:w-3/12 p-2">
                <div
                  className="team-member style-two wow fadeInUp delay-0-4s"
                  style={{ visibility: "visible" }}
                >
                  <Image
                    className="img"
                    src="/Assets/about/team/member2.jpg"
                    alt="fiber-tech-service-team"
                    width={230}
                    height={230}
                  />
                  <h4 className="text-xl font-bold text-black">
                    Mark M. Hughes
                  </h4>
                  <span className="designation text-md text-gray-500">
                    Web Developer
                  </span>
                  <div className="social-style-two gap-4">
                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-custom-blue transition hover:bg-custom-blue/75 hover:text-white p-2 rounded-full  "
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

                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-custom-blue transition hover:bg-custom-blue/75 hover:text-white p-2 rounded-full  "
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

                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-custom-blue transition hover:bg-custom-blue/75 hover:text-white p-2 rounded-full  "
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

                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-custom-blue transition hover:bg-custom-blue/75 hover:text-white p-2 rounded-full  "
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
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-4/12 xl:w-3/12 p-2">
                <div
                  className="team-member style-two wow fadeInUp delay-0-6s"
                  style={{ visibility: "visible" }}
                >
                  <Image
                    className="img"
                    src="/Assets/about/team/member3.jpg"
                    alt="fiber-tech-service-team"
                    width={230}
                    height={230}
                  />
                  <h4 className="text-xl font-bold text-black">
                    Donald B. Mitchell
                  </h4>
                  <span className="designation text-md text-gray-500">
                    Software Engineer
                  </span>
                  <div className="social-style-two gap-4">
                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-custom-blue transition hover:bg-custom-blue/75 hover:text-white p-2 rounded-full  "
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

                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-custom-blue transition hover:bg-custom-blue/75 hover:text-white p-2 rounded-full  "
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

                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-custom-blue transition hover:bg-custom-blue/75 hover:text-white p-2 rounded-full  "
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

                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-custom-blue transition hover:bg-custom-blue/75 hover:text-white p-2 rounded-full  "
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
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-4/12 xl:w-3/12 p-2">
                <div
                  className="team-member style-two wow fadeInUp delay-0-8s"
                  style={{ visibility: "visible" }}
                >
                  <Image
                    className="img"
                    src="/Assets/about/team/member4.jpg"
                    alt="fiber-tech-service-team"
                    width={230}
                    height={230}
                  />
                  <h4 className="text-xl font-bold text-black">
                    Bennie N. Bannister
                  </h4>
                  <span className="designation text-md text-gray-500">
                    Senior Consultant
                  </span>
                  <div className="social-style-two gap-4">
                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-custom-blue transition hover:bg-custom-blue/75 hover:text-white p-2 rounded-full  "
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

                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-custom-blue transition hover:bg-custom-blue/75 hover:text-white p-2 rounded-full  "
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

                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-custom-blue transition hover:bg-custom-blue/75 hover:text-white p-2 rounded-full  "
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

                    <a
                      href="#"
                      rel="noreferrer"
                      target="_blank"
                      className="text-custom-blue transition hover:bg-custom-blue/75 hover:text-white p-2 rounded-full  "
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="team-shapes">
            <Image
              className="shape one"
              src="/Assets/about/team/team-shape-one.png"
              alt="fiber-tech-service-team-shape"
              width={571}
              height={749}
            />
            <Image
              className="shape two"
              src="/Assets/about/team/team-shape-two.png"
              alt="fiber-tech-service-team-shape"
              width={853}
              height={906}
            />
          </div>
        </section>
        {/* team area section three end */}
        {/* why choose us start */}

        <section>
          <div className="mx-auto  max-w-7xl  px-6  lg:px-8 py-12 ">
            <Tabs>
              <Tab iconName={"ui.png"} label={"UX/UI Design"}>
                <div className="py-4 flex flex-wrap justify-center items-center">
                  <div className="w-full lg:w-1/2 relative mb-12 flex justify-center items-center">
                    <Image
                      className="why-choose-img-dots"
                      src={"/Assets/about/why-choose-image-bg-dots.png"}
                      alt="fiber-tech-service-bg-dots"
                      width={86}
                      height={186}
                    />
                    <Image
                      className="why-choose-img"
                      src={"/Assets/about/why-choose1.jpg"}
                      alt="fiber-tech-service-why-choose-img"
                      width={400}
                      height={300}
                    />
                  </div>
                  <div className="w-full lg:w-1/2 selft-start">
                    <h2 className="text-2xl font-bold mb-2 pb-2">
                      An impactful Application Needs an innovative and
                      interactive.
                    </h2>
                    <p className="text-lg text-gray-600 py-6">
                      Our experts help create the right website for across all
                      major platforms and devices. Taking into consideration
                      your user behavior volu promotey the optimal experience we
                      design responsive performance
                    </p>
                    <ul>
                      <li className="py-1 text-gray-700 font-bold text-medium">
                        <CheckIcon className="h-6 w-6 stroke-[3px] bg-custom-blue mr-2 rounded-full p-1 inline font-bold text-lg text-gray-50" />{" "}
                        Comprehensive UI/UX Assessment
                      </li>
                      <li className="py-1 text-gray-700 font-bold text-medium">
                        <CheckIcon className="h-6 w-6 stroke-[3px] bg-custom-blue mr-2 rounded-full p-1 inline font-bold text-lg text-gray-50" />{" "}
                        Deep Contextual Research and 360° Planning
                      </li>
                      <li className="py-1 text-gray-700 font-bold text-medium">
                        <CheckIcon className="h-6 w-6 stroke-[3px] bg-custom-blue mr-2 rounded-full p-1 inline font-bold text-lg text-gray-50" />{" "}
                        Wireframing & Prototyping
                      </li>
                    </ul>
                  </div>
                </div>
              </Tab>
              <Tab iconName={"mobile-app.png"} label="App Development">
                <div className="py-4 flex flex-wrap flex-row-reverse justify-center items-center">
                  <div className="w-full lg:w-1/2 relative mb-12 flex justify-center items-center">
                    <Image
                      className="why-choose-img-dots"
                      src={"/Assets/about/why-choose-image-bg-dots.png"}
                      alt="fiber-tech-service-why-choose-img-dots"
                      width={86}
                      height={186}
                    />
                    <Image
                      className="why-choose-img"
                      src={"/Assets/about/why-choose1.jpg"}
                      alt="fiber-tech-service-why-choose-us"
                      width={400}
                      height={300}
                    />
                  </div>
                  <div className="w-full lg:w-1/2 selft-start">
                    <h2 className="text-2xl font-bold mb-2 pb-2">
                      An impactful Application Needs an innovative and
                      interactive.
                    </h2>
                    <p className="text-lg text-gray-600 py-6">
                      Our experts help create the right website for across all
                      major platforms and devices. Taking into consideration
                      your user behavior volu promotey the optimal experience we
                      design responsive performance
                    </p>
                    <ul>
                      <li className="py-1 text-gray-700 font-bold text-medium">
                        <CheckIcon className="h-6 w-6 stroke-[3px] bg-custom-blue mr-2 rounded-full p-1 inline font-bold text-lg text-gray-50" />{" "}
                        Comprehensive UI/UX Assessment
                      </li>
                      <li className="py-1 text-gray-700 font-bold text-medium">
                        <CheckIcon className="h-6 w-6 stroke-[3px] bg-custom-blue mr-2 rounded-full p-1 inline font-bold text-lg text-gray-50" />{" "}
                        Deep Contextual Research and 360° Planning
                      </li>
                      <li className="py-1 text-gray-700 font-bold text-medium">
                        <CheckIcon className="h-6 w-6 stroke-[3px] bg-custom-blue mr-2 rounded-full p-1 inline font-bold text-lg text-gray-50" />{" "}
                        Wireframing & Prototyping
                      </li>
                    </ul>
                  </div>
                </div>
              </Tab>
              <Tab iconName={"cyber-security.png"} label="Cyber Security">
                <div className="py-4 flex flex-wrap justify-center items-center">
                  <div className="w-full lg:w-1/2 relative mb-12 flex justify-center items-center">
                    <Image
                      className="why-choose-img-dots"
                      src={"/Assets/about/why-choose-image-bg-dots.png"}
                      alt="fiber-tech-service-why-choose-us-dots"
                      width={86}
                      height={186}
                    />
                    <Image
                      className="why-choose-img"
                      src={"/Assets/about/why-choose1.jpg"}
                      alt="fiber-tech-service-why-choose-us"
                      width={400}
                      height={300}
                    />
                  </div>
                  <div className="w-full lg:w-1/2 selft-start">
                    <h2 className="text-2xl font-bold mb-2 pb-2">
                      An impactful Application Needs an innovative and
                      interactive.
                    </h2>
                    <p className="text-lg text-gray-600 py-6">
                      Our experts help create the right website for across all
                      major platforms and devices. Taking into consideration
                      your user behavior volu promotey the optimal experience we
                      design responsive performance
                    </p>
                    <ul>
                      <li className="py-1 text-gray-700 font-bold text-medium">
                        <CheckIcon className="h-6 w-6 stroke-[3px] bg-custom-blue mr-2 rounded-full p-1 inline font-bold text-lg text-gray-50" />{" "}
                        Comprehensive UI/UX Assessment
                      </li>
                      <li className="py-1 text-gray-700 font-bold text-medium">
                        <CheckIcon className="h-6 w-6 stroke-[3px] bg-custom-blue mr-2 rounded-full p-1 inline font-bold text-lg text-gray-50" />{" "}
                        Deep Contextual Research and 360° Planning
                      </li>
                      <li className="py-1 text-gray-700 font-bold text-medium">
                        <CheckIcon className="h-6 w-6 stroke-[3px] bg-custom-blue mr-2 rounded-full p-1 inline font-bold text-lg text-gray-50" />{" "}
                        Wireframing & Prototyping
                      </li>
                    </ul>
                  </div>
                </div>
              </Tab>
              <Tab iconName={"tech-support.png"} label="Tech Support">
                <div className="py-4 flex flex-wrap flex-row-reverse justify-center items-center">
                  <div className="w-full lg:w-1/2 relative mb-12 flex justify-center items-center">
                    <Image
                      className="why-choose-img-dots"
                      src={"/Assets/about/why-choose-image-bg-dots.png"}
                      alt="fiber-tech-service-why-choose-us"
                      width={86}
                      height={186}
                    />
                    <Image
                      className="why-choose-img"
                      src={"/Assets/about/why-choose1.jpg"}
                      alt="fiber-tech-service-why-choose-us"
                      width={400}
                      height={300}
                    />
                  </div>
                  <div className="w-full lg:w-1/2 selft-start">
                    <h2 className="text-2xl font-bold mb-2 pb-2">
                      An impactful Application Needs an innovative and
                      interactive.
                    </h2>
                    <p className="text-lg text-gray-600 py-6">
                      Our experts help create the right website for across all
                      major platforms and devices. Taking into consideration
                      your user behavior volu promotey the optimal experience we
                      design responsive performance
                    </p>
                    <ul>
                      <li className="py-1 text-gray-700 font-bold text-medium">
                        <CheckIcon className="h-6 w-6 stroke-[3px] bg-custom-blue mr-2 rounded-full p-1 inline font-bold text-lg text-gray-50" />{" "}
                        Comprehensive UI/UX Assessment
                      </li>
                      <li className="py-1 text-gray-700 font-bold text-medium">
                        <CheckIcon className="h-6 w-6 stroke-[3px] bg-custom-blue mr-2 rounded-full p-1 inline font-bold text-lg text-gray-50" />{" "}
                        Deep Contextual Research and 360° Planning
                      </li>
                      <li className="py-1 text-gray-700 font-bold text-medium">
                        <CheckIcon className="h-6 w-6 stroke-[3px] bg-custom-blue mr-2 rounded-full p-1 inline font-bold text-lg text-gray-50" />{" "}
                        Wireframing & Prototyping
                      </li>
                    </ul>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </section>
        {/* why choose us end */}
        <Testimonials />
        {/* looking for quote form */}
        <QuoteForm />
      </div>
    </>
  );
};

export default AboutPage;
