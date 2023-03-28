import { useState, useCallback, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { addToCart } from '../../redux/actions/addProductToCart';
import { updateCart } from '../../redux/actions/addProductToCart';
import { setInitialCart } from '../../redux/actions/setInitialCart';
import helpers from '../../helpers';

const CART_STORAGE_KEY = 'cart';

export default function AddToCartContainer({ product }) {
  const dispatch = useDispatch();

  const [count, setCount] = useState(1);

  const cart = useSelector((state) => state.cart.data);
  const isAdded = useSelector((state) => state.cart.isAdded);

  useEffect(() => {
    if (isAdded) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    }
  }, [cart, isAdded]);

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
        `you have successfully added to the cart ${count} items`,
      );
      return;
    }
    dispatch(addToCart(productData));
    helpers.showSuccessMessage(`${product.title} was added to the cart`);
  }, [product, count, dispatch, isInCart]);

  const handleDecrement = useCallback(() => {
    if (count === 1) return;

    setCount((currentCount) => currentCount - 1);
  }, [count]);

  const handleIncrement = useCallback(() => {
    setCount((currentCount) => currentCount + 1);
  }, []);

  const handleInputChange = (event) => {
    const newValue = parseInt(event.target.value);
    if (!isNaN(newValue)) {
      setCount(newValue);
    }
  };

  return (
    <>
      <div className="hidden lg:block">
        <button
          className={classNames('mr-4', {
            'cursor-not-allowed': count === 1,
          })}
          onClick={handleDecrement}
        >
          -
        </button>
        <input
          className="w-8"
          type="text"
          value={count}
          onChange={handleInputChange}
        />
        <button className="cursor-pointer ml-4" onClick={handleIncrement}>
          +
        </button>
      </div>
      <button onClick={handleAddToCart}>ADD TO CART</button>
    </>
  );
}
