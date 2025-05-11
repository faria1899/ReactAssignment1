import React from 'react';
import HeaderButton from '../button/HeaderButton.jsx';
import NavButton from '../button/NavButton.jsx';
import HeaderLogo from '../image/HeaderLogo.jsx';


function Navbar() {
  return (
    <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <a href="#" className="flex items-center">
          <HeaderLogo/>
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Learn with Sumit
          </span>
        </a>
        <HeaderButton />
        <NavButton />
      </div>
    </nav>
  );
}

export default Navbar;
