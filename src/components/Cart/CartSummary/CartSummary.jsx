import React from 'react';

import TotalCartAmount from './TotalCartAmount';
import Row from './Row';
import CartButton from '../CartButton';

//TODO сделать паддинги для моб версии
//TODO вынести отдельно в компоненты выбор локации. Реализовать выбор

const GRID_CLASS = 'grid-cols-2 grid text-base gap-y-6';
const INPUT_SEARCH_CONTAINER_CLASS =
  'col-start-2 uppercase text-dark-gray-100 text-sm border-b border-solid border-grey-100 pb-3 outline-none appearance-none focus:outline-none';

export default function CartSummary() {
  return (
    <div className="font-normal md:py-10 md:px-8">
      <h3 className="mb-11 text-2xl">Cart totals</h3>

      <Row
        title="subtotal"
        description={<TotalCartAmount className="text-dark-gray-100" />}
      />

      <Row
        title="shipping"
        description="Shipping costs will be calculated once you have provided address."
      />

      <div className={GRID_CLASS}>
        <span className="col-start-2 uppercase">Calculate shipping</span>
        <input
          placeholder="Select a country"
          type="text"
          className={INPUT_SEARCH_CONTAINER_CLASS}
        ></input>
        <input
          placeholder="City"
          type="text"
          className={INPUT_SEARCH_CONTAINER_CLASS}
        ></input>
        <input
          type="text"
          className={INPUT_SEARCH_CONTAINER_CLASS}
          placeholder="Post code / zip"
        ></input>
      </div>

      <div className={GRID_CLASS}>
        <div className="col-start-2 mt-6 mt-10 border-black">
          <CartButton
            className="px-16"
            onClick={() => console.log('функионал позже')}
          >
            update totals
          </CartButton>
        </div>
      </div>

      <div className="flex justify-between mt-10 font-bold border-t border-solid border-grey-100 pt-10">
        <span className="uppercase">total</span>
        <TotalCartAmount />
      </div>

      <CartButton
        className="mt-16 bg-black text-white"
        onClick={() => console.log('функионал позже')}
      >
        proceed to checkout
      </CartButton>
    </div>
  );
}
