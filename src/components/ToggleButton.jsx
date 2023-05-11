import React from 'react';
import classNames from 'classnames';

export default function ToggleButton({ children, isActive, onClick, id }) {
  function handleClick() {
    onClick(id);
  }

  return (
    <button
      onClick={handleClick}
      className={classNames(
        'py-3 w-full text-xl font-normal rounded-lg',
        isActive ? 'bg-white shadow-md' : 'bg-light-gray-100',
      )}
    >
      {children}
    </button>
  );
}
