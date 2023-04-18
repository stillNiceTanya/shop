import React from 'react';

import Logo from './Logo';
import NavBar from './NavBar';

export default function Topbar() {
  return (
    <div className="px-4 lg:px-24 mobile:px-10 pt-2 md:pt-12">
      <div className="flex justify-between">
        <Logo />
        <NavBar />
      </div>
      <div className="md:border-b md:border-solid md:mt-4 md:border-grey-100 md:mt-4"></div>
    </div>
  );
}
