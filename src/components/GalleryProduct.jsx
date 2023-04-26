import React from 'react';

export default function GalleryProduct({ imageSrc, className }) {
  return (
    <div className={className}>
      <img
        src={imageSrc}
        alt="product img"
        className="object-contain w-full h-full block"
      ></img>
    </div>
  );
}
