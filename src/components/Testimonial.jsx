import React from 'react'
import TestimonialSvg from '../svg/TestimonialSvg'
import face from '../assets/images/michael-gouch.png'

function Testimonial({description,name,position}) {
  return (
   
 <section className="bg-gray-50 dark:bg-gray-800">
  <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
    <figure className="max-w-screen-md mx-auto">
     <TestimonialSvg/>
      <blockquote>
        <p className="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">
         {description}
        </p>
      </blockquote>
      <figcaption className="flex items-center justify-center mt-6 space-x-3">
        <img
          className="w-6 h-6 rounded-full"
          src={face}
          alt="profile picture"
        />
        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
          <div className="pr-3 font-medium text-gray-900 dark:text-white">{name}</div>
          <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">{position}</div>
        </div>
      </figcaption>
    </figure>
  </div>
</section> 

  )
}

export default Testimonial