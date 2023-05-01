import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaUser } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaCartPlus } from 'react-icons/fa';

import Icon from '../Icon';

//TODO в моб версии появляется бургер (ничего не сделала еще, иконка не создана также)
//TODO `Link to="error-page"` сделать актуальные ссылки

export default function NavBar() {
  const cart = useSelector((state) => state.cart.data);

  const isCartEmpty = cart.length === 0;

  return (
    <div className="flex items-center">
      <div className="hidden md:block space-x-12 lg:space-x-16 font-medium text-base leading-6">
        <Link to="error-page">Shop</Link>
        <Link to="error-page">Blog</Link>
        <Link to="error-page">Our Story</Link>
      </div>

      <div className="hidden md:block border-l border-solid border-dark-gray-100 h-4 mx-12"></div>

      <div className="flex justify-center items-center md:space-x-10">
        {isCartEmpty ? (
          <Icon className="w-5 h-5" link={'error-page'}>
            <FaShoppingCart className="text-dark-gray-100 w-full h-full" />
          </Icon>
        ) : (
          <Icon className="w-5 h-5" link={'error-page'}>
            <FaCartPlus className="text-dark-gray-100 w-full h-full" />
          </Icon>
        )}

        <div className="hidden md:block lg:w-6">
          <Icon className="w-5 h-5" link={'error-page'}>
            <FaUser className="text-dark-gray-100 text-sm w-full h-full" />
          </Icon>
        </div>
      </div>
    </div>
  );
}
