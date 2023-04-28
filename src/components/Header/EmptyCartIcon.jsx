import React from 'react';
import classNames from 'classnames';

import { FaShoppingCart } from 'react-icons/fa';

export default function CartIcon({ className }) {
  const iconClasses = classNames(
    className,
    'flex justify-center items-center w-4 h-full',
  );

  return (
    <div className={iconClasses}>
      <FaShoppingCart className="text-dark-gray-100 w-full h-full" />
    </div>
  );
}
