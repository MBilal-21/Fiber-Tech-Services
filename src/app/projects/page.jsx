import QuoteForm from "@/components/QuoteForm";
import TopPage from "@/components/TopPage";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: 'Our Projects - Fiber Tech Services',
  description: 'Check out our successful projects at Fiber Tech Services! See how we have helped clients achieve their goals with our expert digital marketing solutions.',
  alternates: {
    canonical: "https://fibertechservices.net/projects", // Add your canonical URL here
  },
}

const Projects = () => {
  return (
    <div>
      <TopPage cureentText={"Projects"} />
      <div>
        <section className="project-grid-area relative z-1 pt-32">
          <div className="mx-auto  max-w-7xl  px-6  lg:px-8">
            <div className="flex flex-wrap justify-center pb-16">
              <div className="w-full lg:w-10/12 xl:w-8/12">
                <div
                  className="section-title text-center  wow fadeInUp delay-0-2s animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <h2 className="text-gray-900 font-bold text-2xl md:text-5xl pb-4">Let’s Insides About Recent Project Best Work Gallery</h2>
                  <p className="text-lg text-gray-500">
                    Our project gallery is a collection of completed projects or
                    project samples that are displayed for the purpose of
                    showcasing the skills and expertise of our company. It
                    includes images, descriptions, and details about each
                    project, including project scope, objectives, outcomes, and
                    technologies used
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 xl:w-4/12 p-2">
                <div
                  className="project-grid-item wow fadeInUp delay-0-2s animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="image">
                    <Image
                      src="/Assets/projects/project-grid1.jpg"
                      alt="Project Grid"
                      width={410}
                      height={395}
                    />
                    <Link
                      className="plus"
                      href="/Assets/projects/project-grid1.jpg"
                    >
                      <span className="sr-only">+</span>
                    </Link>
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="/services">Web Development</Link>
                    </h4>
                    <Link
                      href="/services"
                      className="detail-btn flex justify-center items-center"
                    >
                      <ArrowLongRightIcon className="h-6 w-6 text-gray-500" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-4/12 p-2">
                <div
                  className="project-grid-item wow fadeInUp delay-0-4s animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="image">
                    <Image
                      src="/Assets/projects/project-grid2.jpg"
                      alt="Project Grid"
                      width={410}
                      height={395}
                    />
                    <Link
                      className="plus"
                      href="/Assets/projects/project-grid2.jpg"
                    >
                      <span className="sr-only">+</span>
                    </Link>
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="/services">Mobile Applications</Link>
                    </h4>
                    <Link
                      href="/services"
                      className="detail-btn flex justify-center items-center"
                    >
                      <ArrowLongRightIcon className="h-6 w-6 text-gray-500" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-4/12 p-2">
                <div
                  className="project-grid-item wow fadeInUp delay-0-6s animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="image">
                    <Image
                      src="/Assets/projects/project-grid3.jpg"
                      alt="Project Grid"
                      width={410}
                      height={395}
                    />
                    <Link
                      className="plus"
                      href="/Assets/projects/project-grid3.jpg"
                    >
                      <span className="sr-only">+</span>

                    </Link>
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="/services">IT Consulting</Link>
                    </h4>
                    <Link
                      href="/services"
                      className="detail-btn flex justify-center items-center"
                    >
                      <ArrowLongRightIcon className="h-6 w-6 text-gray-500" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-4/12 p-2">
                <div
                  className="project-grid-item wow fadeInUp delay-0-2s animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="image">
                    <Image
                      src="/Assets/projects/project-grid4.jpg"
                      alt="Project Grid"
                      width={410}
                      height={395}
                    />
                    <Link
                      className="plus"
                      href="/Assets/projects/project-grid4.jpg"
                    >
                      <span className="sr-only">+</span>

                    </Link>
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="/services">Business Analysis</Link>
                    </h4>
                    <Link
                      href="/services"
                      className="detail-btn flex justify-center items-center"
                    >
                      <ArrowLongRightIcon className="h-6 w-6 text-gray-500" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-4/12 p-2">
                <div
                  className="project-grid-item wow fadeInUp delay-0-4s animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="image">
                    <Image
                      src="/Assets/projects/project-grid5.jpg"
                      alt="Project Grid"
                      width={410}
                      height={395}
                    />
                    <Link
                      className="plus"
                      href="/Assets/projects/project-grid5.jpg"
                    >
                      <span className="sr-only">+</span>

                    </Link>
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="/services">UX/UI Strategy</Link>
                    </h4>
                    <Link
                      href="/services"
                      className="detail-btn flex justify-center items-center"
                    >
                      <ArrowLongRightIcon className="h-6 w-6 text-gray-500" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-4/12 p-2">
                <div
                  className="project-grid-item wow fadeInUp delay-0-6s animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  <div className="image">
                    <Image
                      src="/Assets/projects/project-grid6.jpg"
                      alt="Project Grid"
                      width={410}
                      height={395}
                    />
                    <Link
                      className="plus"
                      href="/Assets/projects/project-grid6.jpg"
                    >
                      <span className="sr-only">+</span>

                    </Link>
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="/services">Cyber Security</Link>
                    </h4>
                    <Link
                      href="/services"
                      className="detail-btn flex justify-center items-center"
                    >
                      <ArrowLongRightIcon className="h-6 w-6 text-gray-500" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* <div className="w-full text-center">
                <Link
                  href="/projects"
                  className="theme-btn bg-custom-green text-gray-900 after:bg-custom-blue hover:text-white wow fadeInUp delay-0-2s animated"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  View More Gallery <ArrowLongRightIcon className="h-6 w-6 text-gray-500" />

                </Link>
              </div> */}
            </div>
          </div>
        </section>
      </div>
        {/* looking for quote form */}
        <QuoteForm/>
    </div>
  );
};

export default Projects;
