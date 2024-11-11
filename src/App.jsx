import React, { useRef } from 'react';
import './assets/css/main.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Brands from './components/Brands'
import AppFeatures from './components/AppFeatures'
import HowItWorks from './components/HowItWorks'
import AppDescription from './components/AppDescription'
import ReviewSection from './components/ReviewSection'
import FaqSection from './components/FaqSection'
import SubscribeSection from './components/SubscribeSection'

function App() {

   //HELP FROM CHATGPT WITH REFERENCE WHEN CLICKING 'DISCOVER MORE' TO TRANSITION TO 'BRANDS-SECTION'
  const brandsRef = useRef(null); // Create a ref for the Brands section

  return (
    <div className="wrapper">
      <Header />
      <main>
        <Hero brandsRef={brandsRef} />
        <Brands ref={brandsRef} />
        <AppFeatures />
        <HowItWorks />
        <AppDescription />
        <ReviewSection />
        <FaqSection />
        <SubscribeSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
