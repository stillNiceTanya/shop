import React from 'react';

export default function ToastMessageContent({ message }) {
  return (
    <div className="flex justify-center items-center">
      <span>{message}</span>
      <button className="absolute right-4 uppercase text-sm font-bold text-accent-100">
        view cart
      </button>
    </div>
  );
}
