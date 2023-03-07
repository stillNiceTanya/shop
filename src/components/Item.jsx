import React from "react";
// import classNames from "classnames";

export default function Item({ item }) {
  return (
    <figure className="flex flex-col">
      <div className="flex justify-center items-center w-auto h-48 mb-6">
        <img
          src={item.image}
          alt="product img"
          className="block max-w-full max-h-full"
        />
      </div>
      <span className="font-normal mb-4 leading-6 text-ellipsis whitespace-nowrap overflow-hidden">
        {item.title}
      </span>
      <span className="font-medium text-accent-100 leading-6">
        ${item.price}
      </span>
    </figure>
  );
}
