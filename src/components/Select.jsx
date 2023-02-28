import React from "react";
import { useSelector } from "react-redux";

//если был клик по оптионс - поставить в дефолтный аргумент disabled="disabled"
export default function Select({ options, onChange, onClick }) {
  const isDisabled = useSelector((state) => state.boolens.priceFilter);

  return (
    <select
      onClick={onClick}
      onChange={onChange}
      className="border-solid border-2 border-gray-100 py-4 pl-3"
    >
      <option
        value="defoult"
        disabled={isDisabled}
      >
        Shop By
      </option>

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
