import AddToCartContainer from './AddToCartContainer';

import 'react-toastify/dist/ReactToastify.css';

//TODO разбить больше на модули.  походить подумать где еще что вынести

export default function ProductCard({ product }) {
  return (
    <div className="flex flex-col">
      <span className="mt-10 mb-1 text-l font-normal md:mb-6  lg:leading-9 lg:text-2xl text-ellipsis whitespace-nowrap overflow-hidden flex-none">
        {product.title}
      </span>

      <span className="font-medium text-accent-100 md:mb-16 mb-6 leading-6 text-xl	">
        ${product.price}
      </span>

      <span className="font-normal leading-7 mb-12 text-base text-dark-gray-100 text-ellipsis overflow-hidden whitespace-normal ">
        {product.description}
      </span>
      <div className="lg:flex lg:justify-between">
        <AddToCartContainer product={product} />
      </div>
    </div>
  );
}
