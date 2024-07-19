import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Hero from './Hero'
import Services from './Services'
import About from './About'
import Clients from './Clients'
import Features from './Features'
import Details from './Details'
import Service from './Service'
import More from './More'
import Faq from './Faq'
// import Testimonials from './Testimonials'

import './index.css'

const Home = () => {
  return (
    <>
      <Header/>
      <main className='main'>
        <Hero/>
        <Services />
        <About/>
        <Clients />
        <Features />
        <Details />
        <Service />
        <More />
        <Faq /> 
        {/* <Testimonials />  */}
      </main>
      
      <Footer/>
    </>
  )
}

export default Home





