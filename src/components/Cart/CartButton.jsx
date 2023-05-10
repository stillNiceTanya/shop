import React from 'react';
import classNames from 'classnames';

export default function CartButton({ className, children, onClick }) {
  return (
    <button
      className={classNames(
        'py-4 rounded-md border border-black w-full uppercase font-bold',
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
