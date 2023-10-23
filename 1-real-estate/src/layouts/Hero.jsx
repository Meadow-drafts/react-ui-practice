import { headerImage } from "../assets";

export default function Hero() {
  return (
    <>
    <section class="text-gray-600 body-font relative">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pl-44 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 -mt-32 items-center text-center">
    <p>RESIDENTIAL & OFFICE SPACES</p>
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> Smart Living Style
              <br className="hidden lg:inline-block" />
              for Smart People</h1>
      <p class="mb-8 leading-relaxed"> Much did had call new drew that kept. Limits expect <br/> wonder law she. Now has you views woman noisy match money rooms..</p>
      <div class="flex w-full md:justify-start justify-center items-end">
        <div class="relative  md:w-full lg:w-full xl:w-1/2 w-2/4">
          <input type="text" id="hero-field" name="hero-field" placeholder="Enter Zipcode to search properties" class="w-full bg-gray-100  border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-red-200 focus:bg-transparent focus:border-red-500 text-base outline-none text-gray-700 py-1.5 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button class="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600  text-xs">Search Now</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 mr-16 w-5/6">
      <img class="object-cover object-center rounded mt-10" alt="hero" src={headerImage} style={{width: '500px'}} />
    </div>
  </div>
</section>
    </>
  );
}
