import { airbnb, buzz, chase, gucci, microsoft, binance, coinbase, dropbox, google, apple } from "../assets"

export default function Partners(){
    return(
        <>
          <section class="partners relative text-gray-600 body-font">
        <div class="container px-5 py-2 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-lg font-medium title-font mb-4 text-gray-900">
              Our Amazing Partners
            </h1>
          </div>
          <div class="flex flex-wrap -m-4 text-center">
            <div class="px-10 md:w-1/6 sm:w-1/2 w-full">
                <img className="" src={dropbox} alt=""/>
            </div>
            <div class="px-10 md:w-1/6 sm:w-1/2 w-full">
                <img className="" src={dropbox} alt=""/>
            </div>
            <div class="px-10 md:w-1/6 sm:w-1/2 w-full">
            <img className="" src={dropbox} alt=""/>
            </div>
            <div class="px-10 md:w-1/6 sm:w-1/2 w-full">
            <img className="" src={binance} alt=""/>
            </div>
            <div class="px-10 md:w-1/6 sm:w-1/2 w-full">
            <img className="" src={dropbox} alt=""/>
            </div>
            <div class="px-10 md:w-1/6 sm:w-1/2 w-full">
                <img className="" src={binance} alt=""/>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}