import React from "react";

export default function GalleryProduct({ imageSrc, className }) {
  return (
    <img
      src={imageSrc}
      alt="product img"
      className={className}
    ></img>
  );
}
