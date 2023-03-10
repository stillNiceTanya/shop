import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getProductsCategories } from '../redux/actions/getProductsCategories';
import { getProducts } from '../redux/actions/getProducts';

import Items from '../components/Items';
import Filters from '../components/Filters';

//вынести отдельно фильтры, чтобы можно было в моб версии делать фильтр согласно макету в Каталог и Home

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

  return (
    <>
      <div className="lg:px-24 lg:pt-24 p-4 mobile:p-10">
        <Link to="/">
          Вернуться на предыдущую страницу {<br />}
          <span className="text-3xl font-medium lg:hidden">Shop</span>
          <h2 className="lg:text-3xl lg:font-medium lg:block hidden ">
            Shop The Latest
          </h2>
        </Link>

        <div className="md:flex md:items-start lg:pt-10 pt-4">
          <div className="hidden md:block">
            <Filters products={products} />
          </div>
          <Items
            products={products}
            className="md:gap-x-6 lg:gap-y-40 lg:gap-x-14 mobile:gap-x-3.5 mobile:gap-y-7 flex-1"
          />
        </div>
      </div>
    </>
  );
}
