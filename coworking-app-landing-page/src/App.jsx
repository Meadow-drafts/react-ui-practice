import Navbar from "./layouts/Navbar"
import Hero from "./layouts/Hero"
import Stats from "./layouts/Stats"
import Exclusive from "./layouts/Exclusive"
function App() {

  return (
    <div className="bg-gray-100 ">
      <Navbar/>
      <div className="">
      <Hero/>
      <Stats/>
      </div>
      <Exclusive/>
    </div>
  )
}

export default App
