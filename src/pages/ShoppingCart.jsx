import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import ProductInBag from '../components/Cart/ProductInBag';
import CartSummary from '../components/Cart/CartSummary/CartSummary';
import useLocalStorageCart from '../hooks/useLocalStorageCart';
import { Header } from '../components/Header';

//TODO паддинги для других экранов
//TODO вынести из ProductCard AddToCartQuantity и другие компоненты

function ShowEmptyCartMessage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-xl font-normal">
        <div className="flex flex-col items-center text-dark-gray-100 mb-6">
          <span>{`Your cart is empty; `}</span>
          <span>{` back to home and start again`}</span>
        </div>
        <Link to="/">
          <span className="text-accent-100">go back to shopping</span>
        </Link>
      </div>
    </>
  );
}

export default function ShoppingCart() {
  const cart = useSelector((state) => state.cart.data);

  useLocalStorageCart();

  return (
    <>
      <Header />

      <div className="p-4 mobile:px-10 smalltablet:px-14 lg:px-24">
        <h2 className="font-medium text-3xl leading-10 text-center m-16">
          ShoppingCart
        </h2>

        {cart.length === 0 ? (
          <ShowEmptyCartMessage />
        ) : (
          <div className="grid grid-cols-2">
            <ul>
              {cart.map((product, index) => (
                <li key={product.id} className={`${index ? 'mt-10' : ''}`}>
                  <ProductInBag product={product} />
                </li>
              ))}
            </ul>

            <CartSummary />
          </div>
        )}
      </div>
    </>
  );
}
