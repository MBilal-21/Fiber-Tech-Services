'use client';

import Link from "next/link";

const CompanyStatistic = () => {
  return (
    <section className="statistics-area  mx-auto  max-w-9xl mt-4 px-6 lg:px-8">
        <div className="statistics-inner bgs-cover text-white  bg-[url('/Assets/fiber-tech-services-statistics.jpg')] bg-no-repeat bg-cover  p-8 ">
          <div className="flex flex-wrap items-center xl:items-start  mx-auto  max-w-7xl ">
            <div className="w-full lg:w-1/2 xl:w-5/12 p-2">
              <div
                className="statistics-content mb-55 wow fadeInUp delay-0-2s animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="section-title mb-30">
                  <span className="sub-title  py-2 text-lg font-bold text-gray-50">
                    Company Statistics
                  </span>
                  <h2 className="text-gray-50 font-bold text-2xl md:text-5xl py-5">
                    Learn About Our Company Statistics
                  </h2>
                </div>
                <div className="w-max">
                  <Link
                    href="/about"
                    className="read-more footer-btn font-semibold"
                  >
                    Learn More <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-7/12 p-2">
              <div className="flex flex-wrap items-center justify-center">
                <div className="w-1/2 sm:w-auto xl:w-1/4 p-2">
                  <div
                    className="counter-item counter-text-wrap wow fadeInDown delay-0-3s counted animated  text-center"
                    style={{
                      visibility: "visible",
                      animationName: "fadeInDown",
                    }}
                  >
                    <i className="flaticon-target"></i>
                    <span
                      className="count-text plus text-gray-50 font-bold text-2xl md:text-3xl "
                      data-speed="3000"
                      data-stop="2563"
                    >
                      2563
                    </span>
                    <span className="counter-title">Project Complete</span>
                  </div>
                </div>
                <div className="w-1/2 sm:w-auto xl:w-1/4 p-2">
                  <div
                    className="counter-item counter-text-wrap wow fadeInUp delay-0-3s counted animated  text-center"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <i className="flaticon-target-audience"></i>
                    <span
                      className="count-text percent text-gray-50 font-bold text-2xl md:text-3xl "
                      data-speed="3000"
                      data-stop="98.9"
                    >
                      98.9
                    </span>
                    <span className="counter-title">Clients Happy</span>
                  </div>
                </div>
                <div className="w-1/2 sm:w-auto xl:w-1/4 p-2">
                  <div
                    className="counter-item counter-text-wrap wow fadeInDown delay-0-3s counted animated  text-center"
                    style={{
                      visibility: "visible",
                      animationName: "fadeInDown",
                    }}
                  >
                    <i className="flaticon-customer-experience"></i>
                    <span
                      className="count-text plus text-gray-50 font-bold text-2xl md:text-3xl "
                      data-speed="3000"
                      data-stop="35.6"
                    >
                      35.6
                    </span>
                    <span className="counter-title">Years Experience</span>
                  </div>
                </div>
                <div className="w-1/2 sm:w-auto xl:w-1/4 p-2">
                  <div
                    className="counter-item counter-text-wrap wow fadeInUp delay-0-3s counted animated text-center"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <i className="flaticon-medal"></i>
                    <span
                      className="count-text k-plus text-gray-50 font-bold text-2xl md:text-3xl "
                      data-speed="3000"
                      data-stop="63"
                    >
                      63
                    </span>
                    <span className="counter-title">Award Winning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default CompanyStatistic
