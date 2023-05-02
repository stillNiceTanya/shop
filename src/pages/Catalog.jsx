import React from 'react';
import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getProductsCategories } from '../redux/actions/getProductsCategories';
import { getProducts } from '../redux/actions/getProducts';
import SearchInput from '../components/SearchInput';
import { Header } from '../components/Header';

import Items from '../components/Items';
import Filters from '../components/Filters';

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

  return (
    <>
      <Header />
      <div className="lg:px-24 px-4 mobile:px-10 smalltablet:px-14 md:mt-12 lg:mt-24">
        <Link to="/">
          <h2 className="md:text-3xl md:font-medium md:block hidden">
            Shop The Latest
          </h2>
        </Link>

        <div className="md:flex md:items-start lg:pt-10 pt-4">
          <div className="mb-6 md:block">
            <div className="hidden md:block">
              <Filters products={products} className="outline-none" />
            </div>
            <div className="md:hidden">
              <SearchInput />
            </div>
          </div>
          <h2 className="text-xl font-normal mb-4 md:hidden">Shop</h2>
          {isEmptyCatalog ? (
            <span className="text-xl text-accent-100 md:ml-24">
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
