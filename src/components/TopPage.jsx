import Link from "next/link";
const TopPage = ({ cureentText }) => {
  
  
  return (
    
    <div className="relative isolate px-6 pt-14 lg:px-8 pageTop ">
   
      <div className="mx-auto max-w-2xl py-20 sm:py-24 lg:py-30">
        <div className="text-center animate-fadeInUp">
          <h1 className="text-4xl font-bold tracking-tight text-gray-50 sm:text-6xl">
            {cureentText}
          </h1>
          <p className="mt-4 text-lg leading-8 text-white">
            {" "}
            <Link href={"/"} className="pointer linkhover">
              Home
            </Link>{" "}
            <span className="px-2">{">"} </span><span > {cureentText}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopPage;
