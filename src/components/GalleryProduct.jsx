import React from "react";

export default function GalleryProduct({ item, className }) {
  return (
    <img
      src={item}
      alt="product img"
      className={className}
    ></img>
  );
}
