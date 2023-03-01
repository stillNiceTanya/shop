import React from "react";

//если был клик по оптионс - поставить в дефолтный аргумент disabled="disabled"
export default function Select({ options, onChange, onClick }) {
  return (
    <select
      onClick={onClick}
      onChange={onChange}
      className="border-solid border-2 border-gray-100 py-4 pl-3"
    >
      <option value="">Shop By</option>

      {options.map((el) => (
        <option
          value={el}
          key={el}
        >
          {el}
        </option>
      ))}
    </select>
  );
}
