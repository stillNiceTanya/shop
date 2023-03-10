import React from "react";
import GalleryProduct from "./GalleryProduct";
// import preloader from "./imgloading-loader.svg";

export default function Gallery({ imageSrc, className }) {
  return (
    <GalleryProduct
      imageSrc={imageSrc}
      className={className}
    />
  );
}
