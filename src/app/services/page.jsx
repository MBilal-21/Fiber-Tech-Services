import CompanyStatistic from "@/components/CompanyStatistic";
import PricingPlan from "@/components/PricingPlan";
import TopPage from "@/components/TopPage";
import Image from "next/image";
import Link from "next/link";
const Services = () => {
  return (
    <div>
     <TopPage cureentText={"Services"}/>
     {/* service area section start */}
      <section className="services-area-three overflow-hidden py-64 relative z-1">
            <div className="md:container md:mx-auto px-4">
                <div className="flex flex-wrap  items-center">
                    <div className="w-full lg:w-5/12 ">
                        <div className="wow fadeInUp delay-0-2s animated" style={{visibility: "visible", animationName: "fadeInUp"}}>
                            <div>
                                <span className=" py-2 text-lg font-bold text-custom-blue">Amazing Services</span>
                                <h2 className="text-gray-900 font-bold text-2xl md:text-5xl pb-4">We Provide Best IT Services to Growth you Business</h2>
                            </div>
                            <p>

                            </p>
                            <ul className="list-style-one pt-5">
                                <li>Comprehensive UI/UX Assessment</li>
                                <li>Deep Contextual Research and 360° Planning</li>
                                <li>Wireframing &amp; Prototyping</li>
                            </ul>
                           <Link href="/services.php" className="theme-btn mt-45">View All Services <i className="fas fa-long-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="w-full lg:w-7/12 ">
                        <div className="flex flex-wrap">
                            <div className="w-full sm:w-1/2 p-4">
                                <div className="feature-item style-two p-6 bg-white shadow-lg mt-16 mb-8 wow fadeInUp delay-0-2s animated" style={{visibility: "visible", animationName: "fadeInUp"}}>
                                    <div className="icon"><i className="flaticon-trust"></i></div>
                                   <Link href="/service-details"><h4>Trusted Partner</h4></Link>
                                    <p>With over 20 year of experience 850+ employees flexion</p>
                                   <Link className="more-btn" href="/service-details"><i className="far fa-angle-right"></i></Link>
                                </div>
                                <div className="feature-item style-two p-6 bg-white shadow-lg  wow fadeInUp delay-0-2s animated" style={{visibility: "visible", animationName: "fadeInUp"}}>
                                    <div className="icon"><i className="flaticon-social-media"></i></div>
                                   <Link href="/service-details"><h4>Digital Marketing</h4></Link>
                                    <p>With over 20 year of experience 850+ employees flexion</p>
                                   <Link className="more-btn" href="/service-details"><i className="far fa-angle-right"></i></Link>
                                </div>
                            </div>
                            <div className="w-full sm:w-1/2 p-4">
                                <div className=" p-6 bg-white shadow-lg mb-8 wow fadeInDown delay-0-2s animated" style={{visibility: "visible", animationName: "fadeInDown"}}>
                                    <div className="icon"><i className="flaticon-technical-support"></i></div>
                                   <Link href="/service-details"><h4>Technical Support</h4></Link>
                                    <p>With over 20 year of experience 850+ employees flexion</p>
                                   <Link className="more-btn" href="/service-details"><i className="far fa-angle-right"></i></Link>
                                </div>
                                <div className=" p-6 bg-white shadow-lg  wow fadeInDown delay-0-2s animated" style={{visibility: "visible", animationName: "fadeInDown"}}>
                                    <div className="icon"><i className="flaticon-brainstorming"></i></div>
                                   <Link href="/service-details"><h4>IT Consulting</h4></Link>
                                    <p>With over 20 year of experience 850+ employees flexion</p>
                                   <Link className="more-btn" href="/service-details"><i className="far fa-angle-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="servcies-bg-shape">
                <Image className="w-6/12 h-full absolute top-0 right-0" src="/Assets/services/services-bg-shape.png" width={100} height={100} alt="Shape"/>
            </div>
        </section>
     {/* service area section end */}
     {/* company stats section start */}
     <CompanyStatistic/>
     {/* company stats section end */}
     {/* pricing plans section start */}
     <PricingPlan/>
     {/* pricing plans section end */}
      
    </div>
  );
};

export default Services;
