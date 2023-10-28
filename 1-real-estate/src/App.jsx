import { useState } from "react";
import Header from "./layouts/Header";
import Hero from "./layouts/Hero";
import Partners from "./layouts/Partners";
import HowItWorks from "./layouts/HowItWorks";
import Deals from "./layouts/Deals";
import Featuring from "./layouts/Featuring";
import Testimonials from "./layouts/Testimonials";

import Newsletter from "./layouts/Newsletter";
import { robot, heroBg } from "./assets";
function App() {
  return (
    <>
      <div className="relative">
        <div
          className=":hidden sm:block absolute right-0 top-0 w-1/2 h-1/4 bg-opacity-50 bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBg}) `,
            backgroundSize: "cover",
            backgroundPosition: "right",
            width: "32.33%",
            height: "42rem",
          }}
        >
          {/* Content goes here */}
        </div>
        <Header />
        <Hero />
        <Partners />
        <HowItWorks />
        <Deals/>
        <Featuring/>
        <Testimonials/>
        <Newsletter/>
      </div>
    </>
  );
}

export default App;
