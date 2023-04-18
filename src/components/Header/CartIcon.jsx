import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

export default function CartIcon() {
  return (
    <div className="flex justify-center items-center w-5 h-full">
      <FaShoppingCart className="text-dark-gray-100 w-full h-full" />
    </div>
  );
}
