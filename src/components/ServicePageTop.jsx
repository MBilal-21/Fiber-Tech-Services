import Link from 'next/link'

const ServicePageTop = ({heading}) => {
  return (
    <div className="relative isolate px-6  lg:px-8 pageTop ">
        <div className="mx-auto max-w-2xl py-20 sm:py-24 lg:py-30">
          <div className="flex flex-col items-center justify-center text-center animate-fadeInUp">
            <h1 className="text-4xl font-semibold tracking-tight text-gray-50 sm:text-6xl mb-6">
              {heading}
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
  )
}

export default ServicePageTop
