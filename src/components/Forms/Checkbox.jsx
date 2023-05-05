import React from 'react';

//TODO при выборе чекбокса - окрашивается черным или золотым. сейчас по умолчанию - синим

export default function Checkbox() {
  return (
    <label htmlFor="remember">
      <input
        id="remember"
        type="checkbox"
        className="form-checkbox w-4 h-4 text-black"
      />
      <span className="ml-2 text-base">Remember me</span>
    </label>
  );
}
