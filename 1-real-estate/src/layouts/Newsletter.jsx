


export default function Newsletter(){
    return(
        <>
        <section class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
    
    <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">Get Our Newsletter</h1>
      <p className="font-semibold text-black">To join the worldwide community</p>
      <div class="flex w-full justify-center py-5 items-end">
        <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
          <input type="text" id="hero-field" placeholder="example@gmail.com" name="hero-field" class="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-red-200 focus:bg-transparent border border-gray-300 focus:border-red-500 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button class="inline-flex text-white bg-red-500 border-0 py-4 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Send Now</button>
      </div>
    
    </div>
  </div>
</section>
        </>
    )
}