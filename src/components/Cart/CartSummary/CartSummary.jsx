import React from 'react';

import TotalCartAmount from './TotalCartAmount';
import Row from './Row';
import CartButton from '../CartButton';

//TODO сделать паддинги для моб версии
//TODO вынести отдельно в компоненты выбор локации. Реализовать выбор

const GRID_CLASS = 'grid-cols-2 grid text-base';
const INPUT_SEARCH_CONTAINER_CLASS =
  'col-start-2 uppercase text-dark-gray-100 text-sm border-b border-solid border-grey-100 pb-3';

export default function CartSummary() {
  return (
    <div className="font-normal md:py-10 md:px-8">
      <h3 className="mb-11 text-2xl">Cart totals</h3>

      <Row
        firstCol="subtotal"
        secondCol={<TotalCartAmount className="text-dark-gray-100" />}
      />

      <Row
        firstCol="shipping"
        secondCol="Shipping costs will be calculated once you have provided address."
      />

      <div className={GRID_CLASS}>
        <div className="col-start-2 uppercase mb-6">Calculate shipping</div>
        <div className={`${INPUT_SEARCH_CONTAINER_CLASS} mb-6`}>
          Select a country
        </div>
        <div className={`${INPUT_SEARCH_CONTAINER_CLASS} mb-6`}>City</div>
        <div className={INPUT_SEARCH_CONTAINER_CLASS}>Post code / zip</div>
      </div>

      <div className={GRID_CLASS}>
        <CartButton
          className="col-start-2 mt-6 px-16 mt-10 border-black"
          textButton="update totals"
          onClick={() => console.log('функионал позже')}
        />
      </div>

      <div className="flex justify-between mt-10 font-bold border-t border-solid border-grey-100 pt-10">
        <span className="uppercase">total</span>
        <TotalCartAmount />
      </div>

      <CartButton
        className="mt-16 bg-black text-white"
        textButton="proceed to checout"
        onClick={() => console.log('функионал позже')}
      />
    </div>
  );
}
