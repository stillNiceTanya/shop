import React from "react";
// import classNames from "classnames";

export default function Item({ item }) {
  return (
    <figure className="flex flex-col">
      <div className="flex justify-center items-center w-auto h-1/3">
        <img
          src={item.image}
          alt="product img"
          className="items-center object-cover w-auto"
        />
      </div>
      <span className="font-normal mb-4 leading-6">
        {item.title.slice(0, 20)}
      </span>
      <span className="font-medium text-accent-100 leading-6">
        ${item.price}
      </span>
    </figure>
  );
}
