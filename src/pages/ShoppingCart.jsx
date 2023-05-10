import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getProducts } from '../redux/actions/getProducts';
import { setInitialCart } from '../redux/actions/setInitialCart';
import { Header } from '../components/Header';
import CartItem from '../components/Cart/CartItem';
import CartSummary from '../components/Cart/CartSummary/CartSummary';
import useLocalStorageCart from '../hooks/useLocalStorageCart';

//TODO паддинги для других экранов
//TODO вынести из CartItem CartItemQuantityControls и другие компоненты

const CART_STORAGE_KEY = 'cart';

const EmptyCartMessage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-xl font-normal">
        <div className="flex flex-col items-center text-dark-gray-100 mb-6">
          <span>Your cart is empty;</span>
          <span>back to home and start again</span>
        </div>
        <Link to="/">
          <span className="text-accent-100">go back to shopping</span>
        </Link>
      </div>
    </>
  );
};

export default function ShoppingCart() {
  const dispatch = useDispatch();
  useLocalStorageCart();

  const cart = useSelector((state) => state.cart.data);
  const isLoaded = useSelector((state) => state.products.isLoaded);
  const products = useSelector((state) => state.products.data);

  useEffect(() => {
    dispatch(getProducts({}));
  }, []);

  const cartProducts = cart
    .map((cartProduct) => {
      const result = products.find((product) => {
        return cartProduct.id === product.id;
      });
      if (!result) {
        return undefined;
      }

      return {
        ...result,
        ...cartProduct,
      };
    })
    .filter(Boolean);

  const handleRemoveItem = useCallback(
    (id) => {
      const newCart = cart.filter((cartItem) => cartItem.id !== id);
      dispatch(setInitialCart(newCart));

      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newCart));
    },
    [cart, dispatch],
  );

  const handleUpdateQuantity = useCallback(
    (newCount, id) => {
      const updatedCartProducts = cartProducts.map((cartProduct) => {
        if (cartProduct.id === id) {
          return {
            ...cartProduct,
            quantity: newCount,
          };
        }

        return cartProduct;
      });

      dispatch(setInitialCart(updatedCartProducts));

      localStorage.setItem(
        CART_STORAGE_KEY,
        JSON.stringify(updatedCartProducts),
      );
    },
    [cartProducts, dispatch],
  );

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-screen">loading</div>
    );
  }

  return (
    <>
      <Header />

      <div className="p-4 mobile:px-10 smalltablet:px-14 lg:px-24">
        <h2 className="font-medium text-3xl leading-10 text-center m-16">
          ShoppingCart
        </h2>

        {cart.length === 0 ? (
          <EmptyCartMessage />
        ) : (
          <div className="grid grid-cols-2">
            <ul>
              {cartProducts.map((item, index) => (
                <li key={item.id} className={`${index ? 'mt-10' : ''}`}>
                  <CartItem
                    onCountChange={handleUpdateQuantity}
                    product={item}
                    onRemove={() => handleRemoveItem(item.id)}
                  />
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
