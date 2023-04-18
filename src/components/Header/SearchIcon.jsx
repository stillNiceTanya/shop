import React from 'react';
import { FaSearch } from 'react-icons/fa';

export default function SearchIcon({ className }) {
  return (
    <div className={className}>
      <div className="flex justify-center items-center w-5 h-full">
        <FaSearch className="text-dark-gray-100 text-sm w-full h-full" />
      </div>
    </div>
  );
}

//TODO есть еще такая же иконка в SearchInput. wtf
