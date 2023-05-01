import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export default function Icon({ className, children, link }) {
  const iconClasses = classNames('flex justify-center items-center', className);

  return (
    <Link to="link" className={iconClasses}>
      {children}
    </Link>
  );
}
