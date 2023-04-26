import React from 'react';
import { FaUser } from 'react-icons/fa';

export default function UserIcon({ className }) {
  return (
    <div className={className}>
      <div className="flex justify-center items-center w-4 h-full">
        <FaUser className="text-dark-gray-100 text-sm w-full h-full" />
      </div>
    </div>
  );
}
