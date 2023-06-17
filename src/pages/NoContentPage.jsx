import React from 'react';
import { Link } from 'react-router-dom';

const NoContentPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <span>Welcome</span>

      <span>
        Sorry, the content you are looking for is currently unavailable.
      </span>
      <span>if you want to continue shopping,</span>
      <span>
        click{' '}
        <Link to="/">
          <button className="text-accent-100">here</button>
        </Link>
        ;
      </span>
    </div>
  );
};

export default NoContentPage;
