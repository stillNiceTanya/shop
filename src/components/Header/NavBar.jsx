import React from 'react';
import { useSelector } from 'react-redux';

import EmptyCartIcon from './EmptyCartIcon';
import UserIcon from './UserIcon';
import FilledCartIcon from './FilledCartIcon';

export default function NavBar() {
  const cart = useSelector((state) => state.cart.data);

  return (
    <div className="flex items-center">
      <div className="hidden md:block space-x-12 lg:space-x-16 font-medium text-base leading-6">
        <button>Shop</button>
        <button>Blog</button>
        <button>Our Story</button>
      </div>

      <div className="relative hidden md:block border-l border-solid border-dark-gray-100 h-4 mx-12"></div>

      <div className="flex md:space-x-10">
        <button>
          {cart.length === 0 ? (
            <EmptyCartIcon className="w-5 h-5 lg:w-6 lg:h-6" />
          ) : (
            <FilledCartIcon className="w-5 h-5 lg:w-6 lg:h-6" />
          )}
        </button>

        <button>
          <UserIcon className="hidden md:block w-5 h-5 lg:w-6 lg:h-6" />
        </button>
      </div>
    </div>
  );
}

//TODO в моб версии появляется бургер (ничего не сделала еще, иконка не создана также)
