import React, { useState } from 'react';

import TotalCartAmount from './TotalCartAmount';
import Row from './Row';
import CartButton from '../CartButton';

//TODO сделать паддинги для моб версии
//TODO вынести отдельно в компоненты выбор локации. Реализовать выбор
//TODO SUBTOTAL и TOTAL не отличаются. В макете не очень понятно ценообразование. Придумать что-то
//TODO пока поставлена заглушка, при нажатии на подсчет SUBTOTAL и TOTAL - добавить реальный функционал, убрать useState

const GRID_CLASS = 'grid-cols-2 grid text-base gap-y-6';
const INPUT_SEARCH_CONTAINER_CLASS =
  'col-start-2 uppercase text-dark-gray-100 text-sm border-b border-solid border-grey-100 pb-3 outline-none appearance-none focus:outline-none';

export default function CartSummary() {
  const [isCountAmontClicked, setIsCountAmontClicked] = useState(false);
  const [isCountClicked, setIsCountClicked] = useState(false);

  const handleAmountClicked = () => {
    setIsCountAmontClicked(true);
  };

  const handleClicked = () => {
    setIsCountClicked(true);
  };

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
          {isCountClicked ? (
            <p>
              Sorry, this functionality is currently unavailable. It will be
              implemented for recalibration in the future. Thank you for your
              understanding!
              {setTimeout(() => {
                window.location.reload();
              }, 5000)}
            </p>
          ) : (
            <p>
              <CartButton className="px-16" onClick={handleClicked}>
                update totals
              </CartButton>
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-between mt-10 font-bold border-t border-solid border-grey-100 pt-10">
        <span className="uppercase">total</span>
        <TotalCartAmount />
      </div>
      {isCountAmontClicked ? (
        <p>
          Sorry, this functionality is currently unavailable. It will be
          implemented for recalibration in the future. Thank you for your
          understanding!
          {setTimeout(() => {
            window.location.reload();
          }, 5000)}
        </p>
      ) : (
        <p>
          <CartButton
            className="mt-16 bg-black text-white"
            onClick={handleAmountClicked}
          >
            proceed to checkout
          </CartButton>
        </p>
      )}
    </div>
  );
}
