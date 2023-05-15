import React from 'react';
import { FaTimes } from 'react-icons/fa';

export default function CartDeleteButton({ onClick }) {
  return (
    <button
      className="min-w-max w-4 h-4 flex justify-center items-center ml-3 md:ml-4"
      onClick={onClick}
    >
      <FaTimes className="text-dark-gray-100 w-full h-full" />
    </button>
  );
}
