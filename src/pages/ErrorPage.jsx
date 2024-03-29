import React from 'react';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h2 className="text-4xl font-medium ">404 ERROR</h2>
      <div className="flex flex-col items-center text-xl font-normal text-dark-gray-100">
        <span>{`This page not found; `}</span>
        <span>{` back to home and start again`}</span>
      </div>

      <Link to="/">
        <span className="text-base font-bold">HOMEPAGE</span>
      </Link>
    </div>
  );
}
