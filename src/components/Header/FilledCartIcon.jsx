import React from 'react';
import classNames from 'classnames';

import { FaCartPlus } from 'react-icons/fa';

export default function FilledCartIcon({ className }) {
  const iconClasses = classNames(
    className,
    'flex justify-center items-center w-4 h-full',
  );
  return (
    <div className={iconClasses}>
      <FaCartPlus className="text-dark-gray-100 w-full h-full block" />
    </div>
  );
}
