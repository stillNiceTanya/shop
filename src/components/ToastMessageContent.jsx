import React from 'react';
import { Link } from 'react-router-dom';

//TODO `Link to="error-page"` - изменить на другой линк

export default function ToastMessageContent({ message }) {
  return (
    <div className="flex justify-center items-center">
      <span>{message}</span>
      <Link
        to="error-page"
        className="absolute right-4 uppercase text-sm font-bold text-accent-100"
      >
        view cart
      </Link>
    </div>
  );
}
