import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Checkbox from './Checkbox';
import FormInput from './FormInput';
import Toggle from '../Toggle';

const USER_DATA = 'user_data';

//TODO сейчас <Checkbox/> никак не подключает логику, просто ставит галочку. Добавить если Checkbox включен - то кладем в локал сторадж, если нет, то данные кладем в сессион сторадж

export default function Form() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    const formData = {
      email: email,
      password: password,
    };

    localStorage.setItem(USER_DATA, JSON.stringify(formData));
    window.location.reload();
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem(USER_DATA);
    window.location.reload();
  };

  useEffect(() => {
    const isUserRegistered = localStorage.getItem(USER_DATA);
    if (isUserRegistered) {
      setIsUserLoggedIn(true);
    }
  }, []);

  return isUserLoggedIn ? (
    <div className="flex flex-col justify-center items-center h-32">
      <span>you are already signed up</span>
      <span>if you want to log out of your account,</span>

      <span>
        click{' '}
        <button onClick={handleLogout} className="text-accent-100">
          here
        </button>
      </span>
    </div>
  ) : (
    <>
      <Toggle />
      <form
        onSubmit={handleLogin}
        className="flex flex-col items-center text-xl font-normal mt-16 lg:mt-32"
      >
        <FormInput
          value={email}
          className="mb-11"
          placeholder="Email"
          type="email"
          onChange={handleEmailChange}
        />

        <FormInput
          value={password}
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
