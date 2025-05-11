import React from 'react'
import FaceBookIcon from '../svg/FaceBookIcon.jsx' 
import InstagramIcon from '../svg/InstagramIcon.jsx'
import TwitterIcon from '../svg/TwitterIcon.jsx'
import GitHubIcon from '../svg/GitHubIcon.jsx'
import DribbbleIcon from '../svg/DribbbleIcon.jsx'

const Colour ="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"

function ListFooterIcon() {
  return (
    <div>
         <ul className="flex justify-center mt-5 space-x-5">
    <li>
      <a href="#"  className="{Colour}">
                <FaceBookIcon className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                           aria-hidden="true"
           
            />
      </a>
    </li>
    <li>
      <a href="#"  className="{Colour}">
        <InstagramIcon className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                           aria-hidden="true" />
      </a>
    </li>
    <li>
      <a href="#"  className="{Colour}">
        <TwitterIcon className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                           aria-hidden="true" />
      </a>
    </li>
    <li>
      <a href="#"  className="{Colour}">
        <GitHubIcon className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                           aria-hidden="true" />
      </a>
    </li>
    <li>
      <a href="#"  className="{Colour}">
        <DribbbleIcon className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                           aria-hidden="true" />
      </a>
    </li>
  </ul>
        
    </div>
  )
}

export default ListFooterIcon