import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Checkbox from './Checkbox';
import InputForm from './InputForm';
import ToggleButtons from '../ToggleButtons';

const CART_STORAGE_KEY = 'user_data';

//TODO сейчас <Checkbox/> никак не подключает логику, просто ставит галочку. Добавить если Checkbox включен - то кладем в локал сторадж, если нет, то данные кладем в сессион сторадж

export default function Form() {
  const [isSignUp, setSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      email: email,
      password: password,
    };

    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(formData));
    window.location.reload();
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleClick = () => {
    localStorage.removeItem(CART_STORAGE_KEY);
    window.location.reload();
  };

  useEffect(() => {
    const isUserRegistered = localStorage.getItem(CART_STORAGE_KEY);
    if (isUserRegistered) {
      setSignUp(true);
    }
  }, []);

  return isSignUp ? (
    <div className="flex flex-col justify-center items-center h-32">
      <span>you are already signed up</span>
      <span>
        if you want to log out of your account, click{' '}
        <button onClick={handleClick} className="text-accent-100">
          here
        </button>
      </span>
    </div>
  ) : (
    <>
      <ToggleButtons />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center text-xl font-normal mt-16 lg:mt-32"
      >
        <InputForm
          className="mb-11"
          placeholder="Email"
          type="email"
          onChange={handleEmailChange}
        />

        <InputForm
          className="mb-4"
          placeholder="Password"
          type="password"
          onChange={handlePasswordChange}
        />

        <div className="w-full mb-16">
          <Checkbox />
        </div>

        <button
          className="w-full uppercase bg-black text-white flex justify-center items-center rounded-md hover:shadow-xl transition-shadow duration-300 py-4"
          type="submit"
        >
          sign in
        </button>

        <Link
          to="error-page"
          className="mt-3 text-base font-normal mb-10 lg:mb-52"
        >
          Have you forgotten your password?
        </Link>
      </form>
    </>
  );
}
