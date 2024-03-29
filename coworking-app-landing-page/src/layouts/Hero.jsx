import { google, apple, hero } from "../assets";

export default function Hero() {
  return (
    <>
      <section class="text-gray-600 body-font ">
        <div class="container  px-5 py-24 mx-auto">
          <h1 class="sm:text-3xl text-2xl mt-5 font-medium title-font text-center text-gray-900 mb-20">
            The Best Coworking App
          </h1>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div class="md:p-24 p-2 md:w-1/5 flex">
              <div class="flex-grow pl-6">
                <h2 class="text-gray-900 text-2xl title-font font-bold mb-2">
                  5M+
                </h2>
                <p class="leading-relaxed text-xl text-gray-500">
                  Active Users
                </p>

                <div class="flex -space-x-4">
                  <img
                    class="w-10  h-10 border-2 border-white rounded-full "
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <img
                    class="w-10 h-10 border-2 border-white rounded-full "
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <img
                    class="w-10 h-10 border-2 border-white rounded-full "
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <img
                    class="w-10 h-10 border-2 border-white rounded-full "
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <a
                    class="flex items-center justify-center w-10 h-10 text-lg font-medium text-green-500 bg-white   border-2 border-gray-200 rounded-full "
                    href="#"
                  >
                    +
                  </a>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-3/5 flex ">
              <div class="flex-grow pl-6 ">
                <h1 class="lg:text-7xl text-2xl md:text-2xl font-medium title-font text-center text-black mb-20">
                  Your Ultimate{" "}
                  <span className="border-b-4 border-green-500 text-green-500">
                    Coworking
                  </span>
                  <br class="mt-2" />
                  App Solution!
                </h1>

                <div class="flex justify-center md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
                  <button class="bg-black inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      class="w-6 h-6"
                      viewBox="0 0 512 512"
                    >
                      <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                    </svg>
                    <span class="ml-4 flex items-start flex-col leading-none">
                      <span class="text-xs text-white mb-1">GET IT ON</span>
                      <span class="title-font text-white font-medium">
                        Google Play
                      </span>
                    </span>
                  </button>
                  <button class="bg-black inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      class="w-6 h-6 "
                      viewBox="0 0 305 305"
                    >
                      <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                      <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                    </svg>
                    <span class="ml-4 flex items-start flex-col leading-none">
                      <span class="text-xs text-white mb-1">
                        Download on the
                      </span>
                      <span class="title-font text-white font-medium">
                        App Store
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div class="px-2 sm:block hidden  md:w-1/5  justify-end">
              <img
                className=" rounded-full border border-green-500 -mt-10"
                style={{ width: "8rem", height: "8rem" }}
                src="https://plus.unsplash.com/premium_photo-1661914978519-52a11fe159a7?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
