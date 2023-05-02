import React from 'react';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import { FaCartPlus } from 'react-icons/fa';

export default function Icon({ className, children, link }) {
  const cart = useSelector((state) => state.cart.data);

  const isCartEmpty = cart.length === 0;

  return (
    <div className="w-5 h-5 flex justify-center items-center">
      {isCartEmpty ? (
        <FaShoppingCart className="text-dark-gray-100 w-full h-full" />
      ) : (
        <FaCartPlus className="text-dark-gray-100 w-full h-full" />
      )}
    </div>
  );
}
