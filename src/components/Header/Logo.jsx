import React from 'react';
import '@fontsource/allerta-stencil';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link
      to="/"
      role="banner"
      className="font-allerta-stencil font-normal text-2xl md:text-3xl leading-10"
    >
      <span className="text-accent-100">S</span>
      <span className="text-black">HOPPE</span>
    </Link>
  );
}
