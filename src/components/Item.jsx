import React from 'react';

export default function Item({ item }) {
  return (
    <div className="flex flex-col">
      <div className="mb-6 flex justify-center items-center w-auto h-48">
        <img
          src={item.image}
          alt="product img"
          className="block max-w-full max-h-full"
        />
      </div>
      <span className="text-sm md:text-base md:text-xl font-normal mb-4 leading-6 text-ellipsis whitespace-nowrap overflow-hidden">
        {item.title}
      </span>
      <span className="text-sm md:text-base md:text-xl font-medium text-accent-100 leading-6">
        ${item.price}
      </span>
    </div>
  );
}
