import React from 'react';

import SearchIcon from './SearchIcon';
import CartIcon from './CartIcon';
import UserIcon from './UserIcon';

export default function NavBar() {
  return (
    <div className="flex items-center">
      <div className="hidden md:block space-x-12 lg:space-x-16">
        <span>NavBar</span>
        <span>Blog</span>
        <span>Our Story</span>
      </div>

      <div className="hidden md:block border-l border-solid border-dark-gray-100 h-4 mx-12"></div>

      <div className="flex space-x-10 ">
        <SearchIcon className="hidden md:block" />
        <CartIcon />
        <UserIcon className="hidden md:block" />
      </div>
    </div>
  );
}
//TODO CartIcon - при добавлении в корзину меняется на другую иконку
//TODO в моб версии появляется бургер (ничего не сделала еще, иконка не создана также)
