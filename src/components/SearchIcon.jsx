import React from 'react';
import { FaSearch } from 'react-icons/fa';

export default function Icon({ className, children, link }) {
  return (
    <div className="absolute w-4 h-full md:left-auto md:right-2 left-2 flex justify-center items-center">
      <FaSearch className="text-dark-gray-100 text-sm w-full h-full" />
    </div>
  );
}
