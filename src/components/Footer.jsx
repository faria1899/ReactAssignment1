import React from 'react'
import SubFooter1 from '../SubFooter/SubFooter1.jsx'
import SubFooter2 from '../SubFooter/SubFooter2.jsx';


const footerData = [
    {
      title: 'Company',
      links: ['About', 'Careers', 'Brand Center', 'Blog'],
    },
    {
      title: 'Help center',
      links: ['Discord Server', 'Twitter', 'Facebook', 'Contact Us'],
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Licensing', 'Terms'],
    },
    {
      title: 'Company',
      links: ['About', 'Careers', 'Brand Center', 'Blog'],
    },
    {
      title: 'Download',
      links: ['iOS', 'Android', 'Windows', 'MacOS'],
    },
  ];
  


function Footer() {
  return (
    <div><footer className="bg-white dark:bg-gray-800">
        <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10" >
            
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
        {footerData.map((item, index) => (
          <SubFooter1 key={index} title={item.title} links={item.links} />
        ))}
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <SubFooter2/>
            </div></footer></div>
  )
}

export default Footer