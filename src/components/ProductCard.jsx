import React from "react";
import { useState } from "react";

import Button from "./Button";

export default function ProductCard({ product }) {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col w-484">
      <>
        <span className="font-normal mb-6 leading-9 text-2xl">
          {product.title.slice(0, 20)}
        </span>
        <span className="font-medium text-accent-100 mb-16 leading-6 text-xl	">
          ${product.price}
        </span>
      </>
      <span className="font-normal leading-7 mb-12 text-base text-darkGray-100 ">
        {product.description}
      </span>
      <div className="flex justify-between">
        <div>
          <span
            className="cursor-pointer mr-4"
            onClick={() => setCount(count <= 0 ? 0 : count - 1)}
          >
            -
          </span>

          <span>{count}</span>
          <span
            className="cursor-pointer ml-4"
            onClick={() => setCount(count + 1)}
          >
            +
          </span>
        </div>
        <Button
          onClick={() => console.log(`${count} ${product.title} added to card`)}
        >
          ADD TO CART
        </Button>
      </div>
    </div>
  );
}
