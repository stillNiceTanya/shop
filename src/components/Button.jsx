import React from "react";

export default function Button({ onClick, children, className }) {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
