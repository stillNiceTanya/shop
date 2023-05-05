import React, { useState } from 'react';
import classNames from 'classnames';

const BUTTON_CLASSNAME = 'py-3 w-full text-xl font-normal rounded-lg';

export default function ToggleButtons() {
  const [isSignInOn, setIsSignInOn] = useState(true);

  const setToggle = () => {
    setIsSignInOn((prevState) => !prevState);
  };

  const signInClasses = classNames(BUTTON_CLASSNAME, {
    'bg-white shadow-md': isSignInOn,
    'bg-light-gray-100': !isSignInOn,
  });

  const registerClasses = classNames(BUTTON_CLASSNAME, {
    'bg-white shadow-md': !isSignInOn,
    'bg-light-gray-100': isSignInOn,
  });

  return (
    <div className="mt-16 flex bg-light-gray-100 rounded-lg p-1">
      <button onClick={setToggle} className={signInClasses}>
        Sign in
      </button>
      <button onClick={setToggle} className={registerClasses}>
        Register
      </button>
    </div>
  );
}
