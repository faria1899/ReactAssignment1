import React from 'react';
import FeaturePic from '../assets/images/feature-1.png'
import ServiceHeaderParagraph from '../subservice/ServiceHeaderParagraph';
import ServiceFooterParagraph from '../subservice/ServiceFooterParagraph';
import ServiceSvg from '../subservice/ServiceSvg';

const features = [
  "Continuous integration and deployment",
  "Development workflow",
  "Knowledge management"
];

function SubService1(props) {
  return (
    <div>
      <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                {props.title}
              </h2>
              <ServiceHeaderParagraph/>

              <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                {features.map((feature, index) => (
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
            <img
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src={FeaturePic}
              alt="dashboard feature image"
            />
          </div>
    </div>
  );
}

export default SubService1;
