import React from 'react';
import logo from '../assets/images/logo.svg';

function HeaderLogo() {
  return (
    <div>
      <img src={logo} className="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
    </div>
  );
}

export default HeaderLogo;
