import { useCallback, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { addToCart } from '../../redux/actions/addProductToCart';
import { updateCart } from '../../redux/actions/addProductToCart';
import { setInitialCart } from '../../redux/actions/setInitialCart';
import helpers from '../../helpers';
import AddToCartQuantity from './AddToCartQuantity';

const CART_STORAGE_KEY = 'cart';

export default function AddToCartContainer({ product }) {
  const dispatch = useDispatch();

  const [count, setCount] = useState(1);

  const cart = useSelector((state) => state.cart.data);
  const isLoaded = useSelector((state) => state.cart.isLoaded);

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

  const isInCart = useMemo(
    () => cart.some((el) => el.id === product.id),
    [cart, product],
  );

  const handleAddToCart = useCallback(() => {
    const productData = {
      id: product.id,
      price: product.price,
      quantity: count,
      name: product.title,
    };

    if (isInCart) {
      dispatch(updateCart(productData));

      helpers.showInfoMessage(
        `${count} items ${product.title} was added to the cart `,
      );
      return;
    }
    dispatch(addToCart(productData));
  }, [product, count, dispatch, isInCart]);

  const handleCountChange = (newCount) => {
    setCount(newCount);
  };

  return (
    <div className="flex gap-6 justify-between w-full ">
      <div className="hidden lg:block h-14">
        <AddToCartQuantity count={count} onCountChange={handleCountChange} />
      </div>

      <button
        onClick={handleAddToCart}
        className="border border-black rounded-md w-full"
      >
        ADD TO CART
      </button>
    </div>
  );
}
