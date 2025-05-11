import React from 'react'
import Airbnb from '../image/Airbnb.jsx'
import Google from '../image/Google.jsx'
import MicroSoft from '../image/MicroSoft.jsx'
import Spotify from '../image/Spotify.jsx'
import MailChimp from '../image/MailChimp.jsx'
import Mashable from '../image/Mashable.jsx'


function CompaniesLogo() {
  return (
    <div> <section className="bg-white dark:bg-gray-900">
    <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
        <div
            className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            <a href="#" className="flex items-center lg:justify-center">
                <Airbnb/>
            </a>
            <a href="#" className="flex items-center lg:justify-center">
                <Google/>
            </a>
            <a href="#" className="flex items-center lg:justify-center">
                <MicroSoft/>
            </a>
            <a href="#" className="flex items-center lg:justify-center">
               <Spotify/>
            </a>
            <a href="#" className="flex items-center lg:justify-center">
                <MailChimp/>
            </a>
            <a href="#" className="flex items-center lg:justify-center">
                <Mashable/>
            </a>
        </div>
    </div>
</section></div>
  )
}

export default CompaniesLogo