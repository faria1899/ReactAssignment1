import React from 'react'
import SubService2Section1Svg from '../subservice/SubService2Section1Svg'

function SubService2Section1({title,subtitle,description}) {
  return (
    <div>
        
      <div className="col-span-2 mb-8">
        <p className="text-lg font-medium text-purple-600 dark:text-purple-500">{title}</p>
        <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
         {subtitle}
        </h2>
        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
         {description}
        </p>
        <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
          <div>
            <a
              href="#"
              className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
            >
              Explore Legality Guide
              <SubService2Section1Svg/>
            </a>
          </div>
          <div>
            <a
              href="#"
              className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
            >
              Visit the Trust Center
              <SubService2Section1Svg/>
            </a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default SubService2Section1