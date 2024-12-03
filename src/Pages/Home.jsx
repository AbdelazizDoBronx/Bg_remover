import React from 'react'
import Hero from '../Components/Home/Hero'
import Steps from '../Components/Home/Steps'
import BeforeAfter from '../Components/Home/BeforeAfter'
import Testimonials from '../Components/Home/Testimonials'
import Footer from '../Components/Home/Footer'
const Home = () => {
  return (
    <div>
      <Hero/>
      <Steps/>
      <BeforeAfter/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home