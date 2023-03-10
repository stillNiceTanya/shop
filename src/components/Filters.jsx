import React from 'react';
import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { debounce } from 'throttle-debounce';

import { setFilter } from '../redux/actions/setFilter';
import { resetFilters } from '../redux/actions/resetFilters';
import Select from './Select';
import InputSearch from './InputSearch';

export default function Filters({ products }) {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(resetFilters());
  }, []);

  const allCategories = useSelector((state) => state.allCategories);
  const prices = useSelector((state) =>
    state.products.data.map((el) => el.price),
  );

  const minPrice = useSelector((state) => state.filters.minPrice);
  const maxPrice = useSelector((state) => state.filters.maxPrice);

  const minProductPrice = useMemo(
    () => Math.floor(Math.min(...prices)),
    [prices],
  );

  const maxProductPrice = useMemo(
    () => Math.ceil(Math.max(...prices)),
    [prices],
  );

  const defaultPriceFilter = [minProductPrice, maxProductPrice];

  const handleFilterCategoryChange = (event) => {
    dispatch(setFilter({ category: event.target.value }));
  };

  const handleInputSearch = (event) => {
    dispatch(setFilter({ search: event.target.value }));
  };

  const debounceSearch = debounce(500, handleInputSearch);

  function handleFilerPriceChange(values) {
    dispatch(setFilter({ minPrice: values[0] }));
    dispatch(setFilter({ maxPrice: values[1] }));
  }

  const debounceChange = debounce(500, handleFilerPriceChange);

  return (
    <form className="flex flex-col mr-9 gap-9">
      <div>
        <InputSearch onChange={debounceSearch} />
      </div>

      <Select onChange={handleFilterCategoryChange} options={allCategories} />

      <div>
        <Slider
          range
          min={minProductPrice}
          max={maxProductPrice}
          onChange={debounceChange}
          defaultValue={defaultPriceFilter}
          trackStyle={{ backgroundColor: '#D8D8D8' }}
          handleStyle={{
            borderColor: '#707070',
            width: 1,
          }}
        />
        <div className="flex justify-between font-normal text-sm">
          <span className="text-darkGray-100">
            Price: ${minPrice || minProductPrice} - $
            {maxPrice || maxProductPrice}
          </span>
          <span className="text-accent-100">Filter</span>
        </div>
      </div>

      <label className="switch">
        On sale
        <input type="checkbox" />
      </label>

      <label className="switch">
        In stock
        <input type="checkbox" />
      </label>
    </form>
  );
}
