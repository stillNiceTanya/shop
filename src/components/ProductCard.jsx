import React from 'react';
import { useState } from 'react';

export default function ProductCard({ product }) {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col lg:max-w-484 ">
      <>
        <span className="mt-10 mb-1 text-l font-normal md:mb-6 lg:leading-9 lg:text-2xl text-ellipsis whitespace-nowrap overflow-hidden">
          {product.title}
        </span>

        <span className="font-medium text-accent-100 md:mb-16 mb-6 leading-6 text-xl	">
          ${product.price}
        </span>
      </>
      <span className="font-normal leading-7 mb-12 text-base text-darkGray-100 ">
        {product.description}
      </span>
      <div className="lg:flex lg:justify-between ">
        <div className="hidden lg:block">
          <button
            className=" mr-4"
            onClick={() => setCount(count <= 0 ? 0 : count - 1)}
          >
            -
          </button>

          <span>{count}</span>
          <button
            className="cursor-pointer ml-4"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
        </div>
        <button
          onClick={() =>
            alert(`${count} '${product.title.slice(0, 15)}' added to card`)
          }
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
