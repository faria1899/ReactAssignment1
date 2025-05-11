import React from 'react'
import Hero from './components/Hero.jsx'
import CompaniesLogo from './components/CompaniesLogo.jsx'
import SubServicePart1 from './components/SubServicePart1.jsx'
import SubServiceSection from './components/SubServiceSection.jsx'
import Testimonial from './components/Testimonial.jsx'
import PricingSection from './components/PricingSection.jsx'
import FaqData from './components/FaqData.jsx'
import Trial from './components/Trial.jsx'
import Layout from './components/Layout.jsx'



function App() {
  return (
      <div  className="bg-gray-100 min-h-screen flex flex-col">
      <Layout>
      <Hero
        
        title1="Building digital"
        title2="products & brands"
        subtitle1="This free and open-source landing page template was built using the utility classes from "
        subtitle2="Tailwind CSS"
        subtitle3="and based on the components from the Flowbite Library and the Blocks System."

      


      />
      <CompaniesLogo/>
      <SubServicePart1/>
      <SubServiceSection/>
      <Testimonial
        description="Landwind is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."
        name="Micheal Gough"
        Position="CEO at Google"
      
      />
      <PricingSection/>
      <FaqData/>
      <Trial
          title="Get started with a 30-day free trial"
          description="Experience the full features of our platform with no obligation."
          buttonText="Start Free Trial"
          buttonLink="/trial"
  />

      </Layout>
    
    </div>
  )
}

export default App
