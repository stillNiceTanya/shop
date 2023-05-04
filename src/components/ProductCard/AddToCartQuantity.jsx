import React from 'react';
import classNames from 'classnames';
import { useCallback } from 'react';

//TODO сбрасывать счетчик после добавления в локал сторадж

export default function AddToCartQuantity({ count, onCountChange }) {
  const handleDecrement = useCallback(() => {
    if (count === 1) return;

    const newCount = count - 1;
    onCountChange(newCount);
  }, [count, onCountChange]);

  const handleIncrement = useCallback(() => {
    const newCount = count + 1;
    onCountChange(newCount);
  }, [count, onCountChange]);

  const handleInputChange = (event) => {
    const newValue = parseInt(event.target.value);
    if (!isNaN(newValue)) {
      onCountChange(newValue);
    }
  };

  return (
    <div className="hidden lg:block h-14">
      <div className="rounded-md bg-light-gray-100 flex justify-center items-center p-3.5">
        <button
          className={classNames('mr-4', {
            'cursor-not-allowed': count === 1,
          })}
          onClick={handleDecrement}
        >
          -
        </button>
        <input
          maxLength="4"
          className="w-8 text-center bg-light-gray-100"
          type="text"
          value={count}
          onChange={handleInputChange}
        />
        <button className="cursor-pointer ml-4" onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
}
