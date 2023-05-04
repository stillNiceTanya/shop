import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/getProducts';
import { useEffect } from 'react';
import AddToCartQuantity from '../ProductCard/AddToCartQuantity';

import GalleryProduct from '../GalleryProduct';
import ProductInBagDescription from './ProductInBagDescription';

//TODO    <span>X</span> - сделать иконкой, которая удаляет
//TODO добавить возможность изменять товары в корзине
//TODO при нажатии на продукт - перенаправляемся на страницу товара

export default function ProductInBag({ product }) {
  const dispatch = useDispatch();

  const isLoaded = useSelector((state) => state.products.isLoaded);

  useEffect(() => {
    dispatch(getProducts({}));
  }, [dispatch]);

  let productId = product.id;

  const productInCart = useSelector((state) => {
    let result = state.products.data;

    return result.find((product) => product.id === productId);
  });

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-screen">loading</div>
    );
  }

  return (
    <div className="flex border-b border-solid border-grey-100 pb-10">
      <div className="h-120 w-120 flex justify-center items-center md:mr-2 lg:mr-4">
        <GalleryProduct imageSrc={productInCart.image} />
      </div>

      <ProductInBagDescription
        product={product}
        className="mr-3 md:mr-4 lg:mr-8"
      />
      <div className="hidden lg:block">
        <AddToCartQuantity
          count={product.quantity}
          onCountChange={() => console.log('я добавлю функционал позже')}
          // onCountChange={handleCountChange}
        />
      </div>
      <span className="ml-3 md:ml-4 lg:ml-8">X</span>
    </div>
  );
}
