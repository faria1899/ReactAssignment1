import React from 'react'
import SubService2Section1 from './SubService2Section1'
import SubService2Section2 from './SubService2Section2'
import Icon1Svg from '../subservice/Icon1Svg'
import Icon2Svg from '../subservice/Icon2Svg'
import Icon3Svg from '../subservice/Icon3Svg'
import Icon4Svg from '../subservice/Icon4Svg'
import CardTitle from '../subservice/CardTitle'
import CardSubtitle from '../subservice/CardSubtitle'

function SubServiceSection() {
  return (
    <section className="bg-white dark:bg-gray-900 py-12 lg:py-24">
    <div className="max-w-screen-xl px-4 mx-auto grid lg:grid-cols-12 gap-y-16 lg:gap-x-24 items-start">
      
      
      <div className="lg:col-span-5">
        <SubService2Section1 
          title="Trusted Worldwide" 
          subtitle="Trusted by over 600 million users and 10,000 teams" 
          description="Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect you and your customers."
        />
      </div>

    
      <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
        <SubService2Section2
          Icon={Icon1Svg}
          Title={CardTitle}
          Subtitle={CardSubtitle}
          title="99.99% Uptime"
          subtitle="For Landwind, with zero maintenance downtime"
        />
        <SubService2Section2
          Icon={Icon2Svg}
          Title={CardTitle}
          Subtitle={CardSubtitle}
          title="600M+ Users"
          subtitle="Trusted by over 600 million users around the world"
        />
        <SubService2Section2
          Icon={Icon3Svg}
          Title={CardTitle}
          Subtitle={CardSubtitle}
          title="100+ Countries"
          subtitle="Have used Landwind to create functional websites"
        />
        <SubService2Section2
          Icon={Icon4Svg}
          Title={CardTitle}
          Subtitle={CardSubtitle}
          title="5+ Million"
          subtitle="Transactions per day"
        />
      </div>
    </div>
  </section>
  )
}

export default SubServiceSection
