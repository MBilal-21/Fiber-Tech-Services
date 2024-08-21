"use client";

import { useState, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
  Button,
} from "@headlessui/react";

import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  EnvelopeIcon,
  PhoneIcon,
  ClockIcon
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  // PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

const products = [
  
  
 

  
  
  {
    name: "Product Design",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, beatae.",
    href: "/services",
    icon: ChartPieIcon,
  },
  {
    name: "Design & Development",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, beatae.",
    href: "/services",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "UX/UI Strategy",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, beatae.",
    href: "/services",
    icon: FingerPrintIcon,
  },
  {
    name: "Search Engine",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, beatae.",
    href: "/services",
    icon: SquaresPlusIcon,
  },
  {
    name: "IT Consulting",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, beatae.",
    href: "/services",
    icon: ArrowPathIcon,
  },
  {
    name: "Software Development",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, beatae.",
    href: "/services",
    icon: ArrowPathIcon,
  },
  {
    name: "Business Analysis",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, beatae.",
    href: "/services",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "view all serices", href: "/services", icon: PlayCircleIcon },
  // { name: "Contact Us", href: "/contact", icon: PhoneIcon },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-custom-dark/90 text-white hidden sm:block">
        <div className="mx-auto  max-w-7xl py-1  mx-auto">
         
            <ul className="flex justify-center items-center gap-6">
              <li className="flex justify-center items-center gap-2">
                {" "}
              <EnvelopeIcon className="h-5 w-5 text-custom-green" />
                <a href="mailto:support@fibertechservices.net">
                  support@fibertechservices.net
                </a>
              </li>
              <li  className="flex justify-center items-center gap-2">
              <PhoneIcon className="h-5 w-5 text-custom-green" />
                <a href="callto:8885729311">888 572 9311</a>
              </li>
              <li  className="hidden lg:flex justify-center items-center gap-2">
              <ClockIcon className="h-5 w-5 text-custom-green" /> Working Hours: Monday-
                Saturday, 7:00 AM to 11:00 PM
              </li>
            </ul>
         
        </div>
      </div>
      <header className="bg-custom-dark z-50  sticky top-0">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 block">
              <span className="sr-only">Fiber Tech Services</span>
              <Image
                alt="Fiber Tech Services"
                src="/Assets/logo.png"
                width={80}
                height={64}
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <Link
              href="/"
              className="text-sm font-semibold leading-6 text-white linkhover"
            >
              Home
            </Link>
            <Popover className="">
              <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white linkhover">
                Services
                <ChevronDownIcon
                  aria-hidden="true"
                  className="h-5 w-5 flex-none text-gray-400"
                />
              </PopoverButton>

              <PopoverPanel
                transition
                className=" absolute left-20 top-full z-10 mt-3 w-10/12  rounded-3xl bg-custom-dark shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="p-4 grid grid-cols-3 gap-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="  group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 min-w-2xl"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 ">
                        <item.icon
                          aria-hidden="true"
                          className="h-6 w-6 text-gray-600 "
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block font-semibold text-white linkhover"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-100">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 divide-x divide-gray-900/5 bg-gray-50 rounded-b-lg">
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 linkhover"
                    >
                      <item.icon
                        aria-hidden="true"
                        className="h-5 w-5 flex-none text-gray-600"
                      />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>

            <Link
              href="/projects"
              className="text-sm font-semibold leading-6 text-white linkhover"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-sm font-semibold leading-6 text-white linkhover"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold leading-6 text-white linkhover"
            >
              Contact Us
            </Link>
            <Link
              href="/blogs"
              className="text-sm font-semibold leading-6 text-white linkhover"
            >
              Blogs
            </Link>
          </PopoverGroup>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/contact"
              className="text-sm font-semibold leading-6 text-white "
            >
              <Button
                className={"button"}
                // className={"rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700"}
              >
                {" "}
                Get A Qoute <span aria-hidden="true">&rarr;</span>
              </Button>
            </Link>
          </div>
        </nav>
        <Transition.Root show={mobileMenuOpen} as={Fragment}>
          <Dialog as="div" className="lg:hidden" onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-10" />
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-300"
              enterFrom="translate-x-full opacity-0"
              enterTo="translate-x-0 opacity-100"
              leave="transform transition ease-in-out duration-300"
              leaveFrom="translate-x-0 opacity-100"
              leaveTo="translate-x-full opacity-0"
            >
              <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-custom-dark px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <Link href="/" className="-m-1.5 p-1.5 block">
                    <span className="sr-only">Fiber Tech Services</span>
                    <Image
                      alt="Fiber Tech Services"
                      src="/Assets/logo.png"
                      width={80}
                      height={64}
                      className="h-8 w-auto"
                    />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5 text-white"
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      <Link
                        href="/"
                        onClick={() => setMobileMenuOpen(false)}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white "
                      >
                        Home
                      </Link>
                      <Disclosure as="div" className="-mx-3">
                        <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white ">
                          Services
                          <ChevronDownIcon
                            aria-hidden="true"
                            className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                          />
                        </DisclosureButton>
                        <DisclosurePanel className="mt-2 space-y-2">
                          {[...products, ...callsToAction].map((item) => (
                            <DisclosureButton
                              key={item.name}
                              as={Link}
                              href={item.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white "
                            >
                              {item.name}
                            </DisclosureButton>
                          ))}
                        </DisclosurePanel>
                      </Disclosure>
                      <Link
                        href="/projects"
                        onClick={() => setMobileMenuOpen(false)}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white "
                      >
                        Projects
                      </Link>
                      <Link
                        href="/about"
                        onClick={() => setMobileMenuOpen(false)}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white "
                      >
                        About us
                      </Link>
                      <Link
                        href="/contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white "
                      >
                        Contact us
                      </Link>
                      <Link
                        href="/blogs"
                        onClick={() => setMobileMenuOpen(false)}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white "
                      >
                        Blogs
                      </Link>
                    </div>
                    {/* <div className="py-6">
                    <Link
                      href="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-green "
                    >
                      Get A Quote
                    </Link>
                  </div> */}
                  </div>
                </div>
              </DialogPanel>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
      </header>
    </>
  );
}
