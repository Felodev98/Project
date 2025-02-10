import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <Popover as="header" className="relative">
        <div className="bg-gray-900 pt-6">
          <nav
            aria-label="Global"
            className="relative mx-auto flex max-w-7xl items-center justify-between px-6"
          >
            <div className="flex flex-1 items-center">
              <div className="flex w-full items-center justify-between md:w-auto">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <h1 className=" ml-12 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:mt-6 xl:text-2xl">
                    
                    <span className="block text-indigo-400">Felix's</span>
                  </h1>
                  {/* <img
                                      
                    alt=""
                    src="https://dynamic.design.com/asset/logo/0fb1da94-32be-48a5-a8e3-5ba13d5b0858/logo-search-grid-2x?logoTemplateVersion=1&v=638646454596030000&text=Aviary+Artistry"
                    className="h-[50px] w-[130px] sm:h-[100px] w-[100px]"
                  /> */}
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <PopoverButton className="focus-ring-inset relative inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon aria-hidden="true" className="size-6" />
                  </PopoverButton>
                </div>
              </div>
              <div className="hidden space-x-8 md:ml-[300px] md:flex  ">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-xs font-medium text-white hover:text-gray-300"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-6">
              <a
                href="#"
                className="text-xs font-medium text-white hover:text-gray-300"
              >
                Log in
              </a>
              <a
                href="#"
                className="inline-flex items-center rounded-md border border-transparent bg-white px-4 py-2 text-xs font-medium text-blue-500 hover:bg-gray-100"
              >
                Start free trial
              </a>
            </div>
          </nav>
        </div>

        <PopoverPanel
          focus
          transition
          className="absolute inset-x-0 top-0 z-10 origin-top transform p-2 transition data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in md:hidden"
        >
          <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black/5">
            <div className="flex items-center justify-between px-5 pt-4">
              <div>
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </div>
              <div className="-mr-2">
                <PopoverButton className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </PopoverButton>
              </div>
            </div>
            <div className="pb-6 pt-5">
              <div className="space-y-1 px-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="mt-6 px-5">
                <a
                  href="#"
                  className="block w-full rounded-md bg-indigo-600 px-4 py-3 text-center font-medium text-white shadow hover:bg-indigo-700"
                >
                  Start free trial
                </a>
              </div>
              <div className="mt-6 px-5">
                <p className="text-center text-base font-medium text-gray-500">
                  Existing customer?{" "}
                  <a href="#" className="text-gray-900 hover:underline">
                    Login
                  </a>
                </p>
              </div>
            </div>
          </div>
        </PopoverPanel>
      </Popover>

      <main>
        <div className="bg-gray-900 pt-10 sm:pt-16 lg:overflow-hidden lg:pb-14 lg:pt-8">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-6 sm:max-w-2xl sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                <div className="lg:py-24">
                  <div className="hidden sm:mb-5 sm:flex sm:justify-center lg:justify-start">
                    <a
                      href="#"
                      className="flex items-center rounded-full bg-black p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"
                    >
                      <span className="rounded-full text-xs bg-indigo-500 px-3 py-0.5 text-sm font-semibold text-white">
                        We're hiring
                      </span>
                      <span className="ml-4 text-xs text-white">
                        Visit our careers page
                      </span>
                      <ChevronRightIcon
                        aria-hidden="true"
                        className="ml-2 size-5 text-gray-500"
                      />
                    </a>
                  </div>
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">A better way to</span>
                    <span className="block text-indigo-400">
                      ship your products
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-md lg:text-md xl:text-md">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam
                    occaecat fugiat.
                  </p>
                  <div className="mt-10 sm:mt-12">
                    <form action="#" className="sm:mx-auto sm:max-w-xl lg:mx-0">
                      <div className="sm:flex">
                        <div className="min-w-0 flex-1">
                          <label htmlFor="email" className="sr-only">
                            Email address
                          </label>
                          <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="block w-full rounded-md border-0 px-4 py-3 text-base
                            bg-slate-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                          />
                        </div>
                        <div className="mt-3 sm:ml-3 sm:mt-0">
                          <button
                            type="submit"
                            className="block w-full rounded-md bg-blue-500 px-4 py-3 font-medium text-blue-600 shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900 "
                          >
                            Start free trial
                          </button>
                        </div>
                      </div>
                      <p className="mt-3 text-xs text-gray-300 sm:mt-4">
                        Start your free 14-day trial, no credit card necessary.
                        By providing your email, you agree to our{" "}
                        <a href="#" className="font-medium text-white">
                          terms of service
                        </a>
                        .
                      </p>
                    </form>
                  </div>
                </div>
              </div>
              <div className="-mb-16 mt-12 sm:-mb-48 lg:relative lg:m-0">
                <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0">
                  {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                  <img
                    alt=""
                    src="https://tailwindui.com/plus/img/component-images/cloud-illustration-indigo-400.svg"
                    className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
    </div>
  );
}
