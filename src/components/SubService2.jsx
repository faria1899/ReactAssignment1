import React from 'react';
import FeaturePic2 from '../assets/images/feature-1.png'
import ServiceHeaderParagraph from '../subservice/ServiceHeaderParagraph';
import ServiceFooterParagraph from '../subservice/ServiceFooterParagraph';
import ServiceSvg from '../subservice/ServiceSvg';

const features2 = [
    "Dynamic reports and dashboards",
    "Templates for everyone",
    "Development workflow",
    "Limitless business automation",
    "Knowledge management",
  ];
  
  function SubService2({title}) {
    return (
      <div>
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <img
            className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            src={FeaturePic2} 
            alt="feature image 2"
          />
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
             {title}
            </h2>
            
             <ServiceHeaderParagraph/>
            
  
            <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
              {features2.map((feature, index) => (
                <li key={index} className="flex space-x-3">
                 <ServiceSvg/>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
  
            <ServiceFooterParagraph/>
          </div>
        </div>
      </div>
    );
  }
  
  export default SubService2;
  