import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { updateCart } from '../../redux/actions/addProductToCart';
import { addToCart } from '../../redux/actions/addProductToCart';
import { setInitialCart } from '../../redux/actions/setInitialCart';
import helpers from '../../helpers';
import CartItemQuantityControls from './CartItemQuantityControls';

//TODO CartItemQuantityControls меньше кнопки ADD TO CART по высоте

const CART_STORAGE_KEY = 'cart';

export default function AddToCartContainer({ product }) {
  const dispatch = useDispatch();

  const [count, setCount] = useState(1);

  const cart = useSelector((state) => state.cart.data);
  const isLoaded = useSelector((state) => state.cart.isLoaded);

  const isInCart = useMemo(
    () => cart.some((el) => el.id === product.id),
    [cart, product],
  );

  useEffect(() => {
    if (!isLoaded) {
      return;
    }
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart, isLoaded]);

  useEffect(() => {
    const cartFromLocalStorage = localStorage.getItem(CART_STORAGE_KEY);
    const initialCart = cartFromLocalStorage
      ? JSON.parse(cartFromLocalStorage)
      : [];
    dispatch(setInitialCart(initialCart));
  }, [dispatch]);

  const handleAddToCart = useCallback(() => {
    const productData = {
      id: product.id,
      price: product.price,
      quantity: count,
      name: product.title,
    };

    isInCart
      ? dispatch(updateCart(productData))
      : dispatch(addToCart(productData));

    helpers.showInfoMessage(
      `${count} items ${product.title} was added to the cart `,
    );
  }, [product, count, dispatch, isInCart]);

  const handleCountChange = (newCount) => {
    setCount(newCount);
  };

  return (
    <div className="flex gap-6 justify-between w-full ">
      <CartItemQuantityControls
        count={count}
        onCountChange={handleCountChange}
      />

      <button
        onClick={handleAddToCart}
        className="border border-black rounded-md w-full h-14"
      >
        ADD TO CART
      </button>
    </div>
  );
}
