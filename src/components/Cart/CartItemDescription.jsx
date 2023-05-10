import React from 'react';
import classNames from 'classnames';

export default function CartItemDescription({ product, className }) {
  return (
    <div className={classNames('font-normal w-32 lg:w-44', className)}>
      <div className="text-sm md:mb-6 lg:text-xl overflow-hidden overflow-ellipsis whitespace-nowrap">
        {product.name}
      </div>

      <div className="font-medium text-accent-100 md:mb-16 mb-6 leading-6 text-xl">
        ${product.price}
      </div>
    </div>
  );
}
