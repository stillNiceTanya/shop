import React from 'react';
import '@fontsource/allerta-stencil';

export default function Logo() {
  return (
    <h1
      style={{ fontFamily: 'Allerta Stencil' }}
      className="font-normal text-2xl md:text-3xl leading-9"
    >
      <span className="text-accent-100">S</span>
      <span className="text-black">HOPPE</span>
    </h1>
  );
}
