import { Link } from 'react-router-dom';

import CartDeleteButton from './CartDeleteButton';
import ProductImage from '../ProductImage';
import CartItemDescription from './CartItemDescription';
import CartItemQuantityControls from '../ProductCard/CartItemQuantityControls';

export default function CartItem({ product, onRemove, onCountChange }) {
  function handleUpdateQuantity(count) {
    onCountChange(count, product.id);
  }

  return (
    <div className="flex justify-between border-b border-solid border-grey-100 pb-10 w-full">
      <Link to={`/product/${product.id}`}>
        <div className="flex md:gap-x-2 lg:gap-x-4">
          <div className="h-120 w-120 flex justify-center items-center">
            <ProductImage imageSrc={product.image} />
          </div>

          <CartItemDescription product={product} />
        </div>
      </Link>

      <CartItemQuantityControls
        count={product.quantity}
        onCountChange={handleUpdateQuantity}
      />

      <CartDeleteButton onClick={onRemove} />
    </div>
  );
}
