import React from 'react';
import classNames from 'classnames';

export default function CartButton({ className, textButton, onClick }) {
  return (
    <button
      className={classNames(
        'py-4 rounded-md border w-full uppercase font-bold',
        className,
      )}
      onClick={onClick}
    >
      {textButton}
    </button>
  );
}
