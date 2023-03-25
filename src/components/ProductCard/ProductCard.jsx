import { useEffect, useMemo, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import classNames from 'classnames';

import { addToCart } from '../../redux/actions/addProductToCart';
import { updateCart } from '../../redux/actions/addProductToCart';

import helpers from '../../helpers';

import 'react-toastify/dist/ReactToastify.css';

//TODO при перезагрузке страницы стор сбрасывается - класть в локал сторадж или куки
//TODO выскакивает ошибка файла конфигурации в девтулзах. Валидность json проверила, что делать?

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const [count, setCount] = useState(1);

  const cart = useSelector((state) => state.cart);

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

    setCount(count - 1);
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
      </div>
      <ToastContainer />
    </div>
  );
}
