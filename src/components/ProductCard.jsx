import React from 'react';
import { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/storeProductToCart';
import { updateCart } from '../redux/actions/updateProductInCart';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//TODO при перезагрузке страницы стор сбрасывается - класть в локал сторадж или куки

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const [count, setCount] = useState(1);

  const cart = useSelector((state) => state.cart);

  const handleAddToCart = useCallback(() => {
    const productData = {
      id: product.id,
      price: product.price,
      quantity: count,
      name: product.title,
    };
    if (cart.some((el) => el.id === product.id && el.quantity !== count)) {
      dispatch(updateCart(productData));

      toast.info(
        `you have successfully changed the quantity of the product in the cart to ${count} items`,
        {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: 'light',
        },
      );
    } else if (
      cart.some((el) => el.id === product.id && el.quantity === count)
    ) {
      toast.error('this product with this quantity is already in the cart', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } else {
      dispatch(addToCart(productData));

      toast.success(`${product.title} was added to the cart`, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  }, [product, cart, count, dispatch]);

  useEffect(() => {
    console.log('cart:', cart);
  }, [cart]);

  const handleDecrement = useCallback(() => {
    setCount(count <= 1 ? 1 : count - 1);
  }, [count]);

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const handleInputChange = (event) => {
    const newValue = parseInt(event.target.value);
    if (!isNaN(newValue)) {
      setCount(newValue);
    }
  };

  return (
    <div className="flex flex-col lg:max-w-484 md:w-1/2">
      <>
        <span className="mt-10 mb-1 text-l font-normal md:mb-6 lg:leading-9 lg:text-2xl text-ellipsis whitespace-nowrap overflow-hidden">
          {product.title}
        </span>

        <span className="font-medium text-accent-100 md:mb-16 mb-6 leading-6 text-xl	">
          ${product.price}
        </span>
      </>
      <span className="font-normal leading-7 mb-12 text-base text-darkGray-100 ">
        {product.description}
      </span>
      <div className="lg:flex lg:justify-between ">
        <div className="hidden lg:block">
          {count === 1 ? (
            <button
              className="cursor-not-allowed mr-4"
              onClick={handleDecrement}
            >
              -
            </button>
          ) : (
            <button className="mr-4" onClick={handleDecrement}>
              -
            </button>
          )}

          <input
            placeholder={count}
            className="w-8"
            type="text"
            value={count}
            // value={setCount}
            onChange={handleInputChange}
          />

          <button className="cursor-pointer ml-4" onClick={handleIncrement}>
            +
          </button>
        </div>
        <button onClick={handleAddToCart}>ADD TO CART</button>
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
