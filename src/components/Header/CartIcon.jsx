import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FaCartPlus } from 'react-icons/fa';

export default function CartIcon({ isCartEmpty }) {
  const IconComponent = isCartEmpty ? FaShoppingCart : FaCartPlus;

  return (
    <div className="w-5 h-5 flex justify-center items-center">
      <IconComponent className="text-dark-gray-100 w-full h-full" />
    </div>
  );
}
