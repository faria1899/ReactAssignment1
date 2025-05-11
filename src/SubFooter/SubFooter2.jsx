import React from 'react'
import HeaderLogo from '../image/HeaderLogo.jsx';
import ListFooterIcon from './ListFooterIcon.jsx';

function SubFooter2() {
  return (
    <div><div className="text-center">
        <a href="#"
                    className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                    <HeaderLogo/>Learn with Sumit </a>
                <span className="block text-sm text-center text-gray-500 dark:text-gray-400">© 2024-2025 Learn with Sumit. All Rights Reserved. Built with 
                    <a href="#" target="_blank" 
                        className="text-purple-600 hover:underline dark:text-purple-500">Flowbite
                        </a> and 
                        <a href="#"
                        className="text-purple-600 hover:underline dark:text-purple-500">Tailwind CSS</a>.
                </span>
                <ListFooterIcon/>
                </div>
                
                
                </div>
  )
}

export default SubFooter2