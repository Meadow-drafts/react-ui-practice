import { headerImage } from "../assets";

export default function Hero() {
  return (
    <>

<section class="text-gray-600 body-font relative">
  <div class="container mx-auto flex lg:px-52 px-5 py-24 md:flex-row flex-col md:justify-center items-center justify-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">    

    <h1 class="title-font sm:text-5xl text-3xl mb-4 font-bold text-gray-900"> Smart Living Style
              <br className="hidden lg:inline-block" />
              for Smart People</h1>
      <p class="mb-8 leading-relaxed">Much did had call new drew that kept. Limits expect <br/> wonder law she. Now has you views woman noisy <br/> match money rooms..</p>

      <div class="flex w-full md:justify-start justify-center items-end">
        <div class="relative  md:w-full lg:w-full xl:w-1/2 w-2/4">
          <input type="text" id="hero-field" name="hero-field" placeholder="Enter Zipcode to search properties" class="w-full bg-gray-100  border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-red-200 focus:bg-transparent focus:border-red-500 text-base outline-none text-gray-700 py-1.5 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button class=" text-white bg-red-500 border-0 py-3.5  
         px-10 focus:outline-none hover:bg-red-600  text-xs">Search Now</button>
      </div>
      
    </div>
    <div class="relative  md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
    <img class="object-cover object-center h-96" alt="hero" src="https://plus.unsplash.com/premium_photo-1675122317466-981be65f700f?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
  </div>
</section>
    </>
  );
}
