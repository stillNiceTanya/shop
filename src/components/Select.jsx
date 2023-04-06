import React from 'react';

export default function Select({ options, onChange, onClick }) {
  return (
    <select
      onClick={onClick}
      onChange={onChange}
      className="border-solid border border-gray-100 py-4 pl-3 rounded "
    >
      <option value="">Shop By</option>

      {options.map((el) => (
        <option value={el} key={el}>
          {el}
        </option>
      ))}
    </select>
  );
}
