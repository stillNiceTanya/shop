import { ToastContainer } from 'react-toastify';

import AddToCartContainer from './AddToCartContainer';

import 'react-toastify/dist/ReactToastify.css';

//TODO разбить все на модули. button block вынести, походить подумать где еще что вынести
//TODO при перезагрузке страницы стор сбрасывается - класть в локал сторадж или куки

export default function ProductCard({ product }) {
  return (
    <div className="flex flex-col lg:max-w-484 md:w-1/2">
      <span className="mt-10 mb-1 text-l font-normal md:mb-6 lg:leading-9 lg:text-2xl text-ellipsis whitespace-nowrap overflow-hidden">
        {product.title}
      </span>

      <span className="font-medium text-accent-100 md:mb-16 mb-6 leading-6 text-xl	">
        ${product.price}
      </span>

      <span className="font-normal leading-7 mb-12 text-base text-darkGray-100 ">
        {product.description}
      </span>
      <div className="lg:flex lg:justify-between">
        <AddToCartContainer product={product} />
      </div>
      <ToastContainer />
    </div>
  );
}
