import React from 'react';

import searchIcon from './img/searchIcon.svg';

export default function InputSearch({ onChange }) {
  const iconSize = '20px';

  return (
    <div className="flex">
      <input type="search" placeholder="Search..." onChange={onChange} />

      <img height={iconSize} width={iconSize} src={searchIcon} alt="" />
    </div>
  );
}
