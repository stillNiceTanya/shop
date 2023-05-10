import React from 'react';

export default function Row({ title, description }) {
  return (
    <div className="grid-cols-2 grid text-base mb-10">
      <span className="uppercase">{title}</span>
      <span className="text-dark-gray-100">{description}</span>
    </div>
  );
}
