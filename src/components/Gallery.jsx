import React from "react";
import GalleryProduct from "./GalleryProduct";
// import preloader from "./imgloading-loader.svg";

export default function Gallery({ item, className }) {
  return (
    <>
      <ul>
        <li>
          <GalleryProduct
            item={item}
            className={className}
          />
        </li>
      </ul>
    </>
  );
}
