import { useState } from "react";
import Header from "./layouts/Header";
import Hero from "./layouts/Hero";
import Partners from "./layouts/Partners";
import {robot, heroBg} from './assets'
function App() {
   
  return (
    <>
      <div className="relative"
     
      >
         <div className=":hidden sm:block absolute right-0 top-0 w-1/2 h-1/4 bg-opacity-50 bg-no-repeat"
         
         style={{
          backgroundImage: `url(${heroBg}) `, backgroundSize: 'cover',
          backgroundPosition: 'right',
          width: '22.33%',
          height:'45.33%'
        }}>
        {/* Content goes here */}
      </div>
        <Header />
        <Hero />
        {/* <img
              className=" absolute top-0 right-0 w-32 z-40"
              alt="hero"
              src={heroBg}
            /> */}
            <Partners/>
      </div>
    </>
  );
}

export default App;
