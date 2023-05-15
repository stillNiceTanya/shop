import React from 'react';
import { Link } from 'react-router-dom';

export default function ToastMessageContent({ message }) {
  return (
    <div className="flex justify-center items-center">
      <span>{message}</span>
      <Link
        to="/cart"
        className="absolute right-4 uppercase text-sm font-bold text-accent-100"
      >
        view cart
      </Link>
    </div>
  );
}
