import React from "react";

export default function GalleryProduct({ item, className }) {
  return (
    <img
      src={item}
      // className={`${imagesArray.length > 10 ? "h-7" : console.log("2")}`}
      alt="product img"
      className={className}
    ></img>
  );
}
