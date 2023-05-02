import React from 'react';
import { FaUser } from 'react-icons/fa';

export default function Icon({ className, children, link }) {
  return (
    <div className="w-5 h-5 flex justify-center items-center">
      <FaUser className="text-dark-gray-100 text-sm w-full h-full" />
    </div>
  );
}
