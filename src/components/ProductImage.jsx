import React from 'react';
import classNames from 'classnames';

export default function ProductImage({ imageSrc, className }) {
  return (
    <img
      src={imageSrc}
      alt="product img"
      className={classNames(className, 'object-contain w-full h-full')}
    ></img>
  );
}
