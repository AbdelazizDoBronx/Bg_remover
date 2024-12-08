import React from 'react'
import Hero from '../Components/Home/Hero'
import Steps from '../Components/Home/Steps'
import BeforeAfter from '../Components/Home/BeforeAfter'
import Testimonials from '../Components/Home/Testimonials'
const Home = () => {
  return (
    <div>
      <Hero/>
      <Steps/>
      <BeforeAfter/>
      <Testimonials/>
    </div>
  )
}

export default Home