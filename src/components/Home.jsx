import React from 'react'
import About from './About'
import Cta from './Cta'
import Footer from './Footer'
import Hero from './Hero'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Cta/>
      <Footer/>
    </div>
  )
}

export default Home