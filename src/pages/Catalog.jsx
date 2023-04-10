import React from 'react';
import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { getProductsCategories } from '../redux/actions/getProductsCategories';
import { getProducts } from '../redux/actions/getProducts';
import InputSearch from '../components/InputSearch';

import Items from '../components/Items';
import Filters from '../components/Filters';
import classNames from 'classnames';

export default function Catalog() {
  const dispatch = useDispatch();

  const minPrice = useSelector((state) => state.filters.minPrice);
  const maxPrice = useSelector((state) => state.filters.maxPrice);

  const products = useSelector((state) => {
    let filteredProducts = state.products.data;

    const currentChoosenCategory = state.filters.category;
    const currentSearch = state.filters.search;

    if (currentChoosenCategory) {
      filteredProducts = filteredProducts.filter(
        (item) => item.category === state.filters.category,
      );
    }

    if (currentSearch) {
      filteredProducts = filteredProducts.filter((item) =>
        item.title.toLowerCase().includes(currentSearch.toLowerCase()),
      );
    }

    if (minPrice && maxPrice) {
      filteredProducts = filteredProducts.filter(
        (item) => item.price >= minPrice && item.price <= maxPrice,
      );
    }

    return filteredProducts;
  });

  useEffect(() => {
    dispatch(getProductsCategories());
    dispatch(getProducts({}));
  }, []);

  const isLoaded = useSelector((state) => state.products.isLoaded);

  const isEmptyCatalog = useMemo(
    () => isLoaded && products.length === 0,
    [isLoaded, products],
  );

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)',
  });

  return (
    <>
      <div className="lg:px-24 lg:pt-24 p-4 mobile:p-10">
        <Link to="/">
          <h2 className="text-3xl font-medium">
            {isDesktopOrLaptop ? 'Shop The Latest' : ''}
          </h2>
        </Link>

        <div className="md:flex md:items-start lg:pt-10 pt-4">
          <div className="mb-6 md:block">
            {isDesktopOrLaptop ? (
              <Filters products={products} className="outline-none" />
            ) : (
              <InputSearch />
            )}
          </div>
          <h2 className="text-3xl font-medium mb-4">
            {isDesktopOrLaptop ? '' : 'Shop'}
          </h2>
          {isEmptyCatalog ? (
            <span
              className={classNames('text-xl text-accent-100', {
                'ml-24': isDesktopOrLaptop,
              })}
            >
              please,try another search, there is no match
            </span>
          ) : (
            <Items
              products={products}
              className="md:gap-x-6 lg:gap-y-40 lg:gap-x-14 mobile:gap-x-3.5 mobile:gap-y-7 flex-1"
            />
          )}
        </div>
      </div>
    </>
  );
}
