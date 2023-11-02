import { search, hand, house, line1, line2 } from "../assets";

export default function HowItWorks() {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
How it Works?
            </h1>
           
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div class="p-4 md:w-1/5 flex flex-col text-center items-center ">
                <img className="h-44" src={search} alt='' />
              <div class="flex-grow -mt-20">
                <h2 class="text-gray-900 title-font font-medium mb-3">
                Research Suburbs
                </h2>
                <p class="leading-relaxed text-sm sm:text-lg ">
                Wonder twenty hunted and put income set desire expect. Am cottage calling.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/5 flex flex-col text-center items-center">
                <img className="w-44 mt-5 hidden sm:block" src={line1} alt='' />
              
            </div>
            <div class="p-4 md:w-1/5 flex flex-col text-center items-center">
                <img className="h-44" src={hand} />
              
              <div class="flex-grow -mt-20">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                Instant Valuation
                </h2>
                <p class="leading-relaxed text-sm sm:text-lg ">
                Conveying or northward offending admitting perfectly my. Colonel gravit and moonlight.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/5 flex flex-col text-center items-center">
                <img className="w-44 mt-5 hidden sm:block md:block" src={line2} alt='' />
              
            </div>
            <div class="p-4 md:w-1/5 flex flex-col text-center items-center">
            <img className="h-44" src={house} />

              <div class="flex-grow -mt-20">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                Track Property
                </h2>
                <p class="leading-relaxed text-sm sm:text-lg ">
                Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
