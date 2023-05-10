import CartItemQuantityControls from '../ProductCard/CartItemQuantityControls';

import ProductImage from '../ProductImage';
import CartItemDescription from './CartItemDescription';

//TODO <span>X</span> - сделать иконкой, которая удаляет
//TODO добавить возможность изменять товары в корзине
//TODO при нажатии на продукт - перенаправляемся на страницу товара

export default function CartItem({ product }) {
  return (
    <div className="flex border-b border-solid border-grey-100 pb-10">
      <div className="h-120 w-120 flex justify-center items-center md:mr-2 lg:mr-4">
        <ProductImage imageSrc={product.image} />
      </div>

      <CartItemDescription product={product} className="mr-3 md:mr-4 lg:mr-8" />
      <div className="hidden lg:block">
        <CartItemQuantityControls
          count={product.quantity}
          onCountChange={() => console.log('я добавлю функционал позже')}
          // onCountChange={handleCountChange}
        />
      </div>
      <span className="ml-3 md:ml-4 lg:ml-8">X</span>
    </div>
  );
}
