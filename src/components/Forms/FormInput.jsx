import React, { useState } from 'react';
import classNames from 'classnames';

const INPUT_CLASS =
  'outline-none appearance-none focus:outline-none text-dark-gray-100 bg-transparent w-full border-b border-grey-100 pb-3';

export default function FormInput({ type, placeholder, className, onChange }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    onChange(value);
  };

  return (
    <input
      name={type}
      placeholder={placeholder}
      className={classNames(INPUT_CLASS, className)}
      type={type}
      value={inputValue}
      onChange={handleChange}
    />
  );
}
