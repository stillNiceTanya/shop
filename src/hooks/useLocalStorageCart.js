import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { setInitialCart } from '../redux/actions/setInitialCart';

const CART_STORAGE_KEY = 'cart';

export default function useLocalStorageCart() {
  const dispatch = useDispatch();

  useEffect(() => {
    const cartFromLocalStorage = localStorage.getItem(CART_STORAGE_KEY);
    const initialCart = cartFromLocalStorage
      ? JSON.parse(cartFromLocalStorage)
      : [];
    dispatch(setInitialCart(initialCart));
  }, [dispatch]);
}
