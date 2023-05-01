import React from 'react';

import Logo from './Logo';
import NavBar from './NavBar';

export default function Header() {
  return (
    <div className="px-4 pt-3 mobile:px-10 smalltablet:px-14 md:pt-12 lg:px-24">
      <div className="flex justify-between md:border-b md:border-solid md:border-grey-100 md:pb-4">
        <Logo />
        <NavBar />
      </div>
    </div>
  );
}
