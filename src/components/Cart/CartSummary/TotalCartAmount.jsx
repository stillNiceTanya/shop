import React from 'react';
import { useSelector } from 'react-redux';

export default function TotalCartAmount({ className }) {
  const cart = useSelector((state) => state.cart.data);

  const totalPrice = cart
    .reduce((acc, { price, quantity }) => acc + price * quantity, 0)
    .toFixed(2);

  return <div className={className}>${totalPrice}</div>;
}
