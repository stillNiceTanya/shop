import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

export default function FilledCartIcon({ className }) {
  return (
    <div className={`${className} flex justify-center items-center w-4 h-full`}>
      <FaCartPlus className="text-dark-gray-100 w-full h-full block" />
    </div>
  );
}
