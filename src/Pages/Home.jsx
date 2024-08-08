import { useEffect } from 'react'
import Hero from "../Components/Hero"

import Welcome from "../Components/Welcome"


function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
     
      <Hero/>
      <Welcome/>
      
    </div>
  )
}

export default Home
