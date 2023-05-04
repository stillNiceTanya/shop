import React from 'react';

export default function Row({ firstCol = ' ', secondCol = ' ' }) {
  return (
    <div className="grid-cols-2 grid text-base mb-10">
      {firstCol && <span className="uppercase">{firstCol}</span>}
      {secondCol && <span className="text-dark-gray-100">{secondCol}</span>}
    </div>
  );
}
