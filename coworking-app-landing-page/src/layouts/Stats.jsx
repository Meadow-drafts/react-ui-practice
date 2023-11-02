import { AiFillApple, AiFillAndroid } from "react-icons/ai";
import { qrcode } from "../assets";

export default function Stats() {
  return (
    <>
      <section class=" body-font -mt-28 sm:ml-8 ml-8 mb-24 " >
        <div class="container px-5 py-24 justify-center bg-neutral-800 absolute  rounded-3xl mx-auto flex flex-wrap">
          <div class="flex flex-wrap  -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-1/3 content-start sm:pr-10">
            <div class="w-full sm:p-10 px-4 mb-6">
              <h1 class="title-font font-medium sm:text-5xl md:2xl text-2xl mb-2 text-white">
                Download <span className="text-green-500">Our Coworking </span>
                <br /> Mobile Application Now{" "}
              </h1>
              <div class="text-gray-200">
                Pour-over craft beer pug drinking vinegar live-edge gastropub,
                keytar neutra <br /> sustainable fingerstache kickstarter.
              </div>
            </div>
            <div class="px-8 sm:w-1/2 lg:w-1/3 w-1/2 border-r">
              <h2 class="title-font font-medium text-3xl text-white">
                5 Million +
              </h2>
              <p class="leading-relaxed text-gray-300">Worlwide Active Users</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/3 w-1/2 border-r text-white">
              <h2 class="title-font font-medium text-3xl">5000 +</h2>
              <p class="leading-relaxed text-gray-300">Subscribes</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/3 w-1/2 text-white ">
              <h2 class="title-font font-medium text-3xl ">8000 +</h2>
              <p class="leading-relaxed text-gray-300">Spaces Listed</p>
            </div>
          </div>
          <div class="sm:block  hidden lg:w-1/2 sm:w-2/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <div className="flex flex-wrap justify-center">
            <div class="p-4 md:w-1/3 relative ">
                <div class="h-full bg-neutral-700  border-opacity-60 rounded-lg overflow-hidden">
                  <div class="p-4 ">
                    <h1 class="title-font text-2xl  text-white font-medium ">
                      For iOS
                    </h1>
                    <p class="leading-relaxed  text-gray-300 py-3">iOS 15.6+</p>
                    <button
                      type="button"
                      className="text-white  hover:bg-green-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-4 py-2 text-center bg-green-500  "
                    >
                      Download App
                    </button>
                    <img
                    class="mx-3 - lg:h-24 md:h-24 mt-16 rounded-xl w-24  "
                    src={qrcode}
                    alt="qrcode"
                  />
                  </div>                  
                  <div class="absolute rounded-full bottom-0 right-0 h-24 w-24 bg-neutral-800 transform rotate-75 flex items-center justify-center">
                    <div class=" rounded-full p- m- mt- bg-neutral-800">
                      <AiFillApple className="text-white w-14 h-16" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-4 md:w-1/3 relative ">
                <div class="h-full bg-neutral-700  border-opacity-60 rounded-lg overflow-hidden">
                  <div class="p-4 ">
                    <h1 class="title-font text-2xl  text-white font-medium ">
                      For Android
                    </h1>
                    <p class="leading-relaxed  text-gray-300 py-3">Android 8.0+</p>
                    <button
                      type="button"
                      className="text-white  hover:bg-green-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-4 py-2 text-center bg-green-500  "
                    >
                      Download App
                    </button>
                    <img
                    class="mx-3 - lg:h-24 md:h-24 mt-16 rounded-xl w-24  "
                    src={qrcode}
                    alt="qrcode"
                  />
                  </div>                  
                  <div class="absolute rounded-full bottom-0 right-0 h-24 w-24 bg-neutral-800 transform rotate-75 flex items-center justify-center">
                    <div class=" rounded-full p- m- mt- bg-neutral-800">
                      <AiFillAndroid className="text-white w-14 h-16" />
                    </div>
                  </div>
                </div>
              </div>
              
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
