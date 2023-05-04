import React from 'react';
import { useSelector } from 'react-redux';

import useLocalStorageCart from '../../../hooks/useLocalStorageCart';

export default function TotalCartAmount({ className }) {
  const cart = useSelector((state) => state.cart.data) || [];

  useLocalStorageCart();

  function calculateTotalPrice() {
    const totalPrice = cart.reduce(
      (acc, { price, quantity }) => acc + price * quantity,
      0,
    );
    return totalPrice.toFixed(2);
  }

  return <div className={className}>${calculateTotalPrice()}</div>;
}
