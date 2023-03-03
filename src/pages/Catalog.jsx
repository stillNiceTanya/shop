import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { getProductsCategories } from "../redux/actions/getProductsCategories";
import { getProducts } from "../redux/actions/getProducts";

import Items from "../components/Items/Items";
import Filters from "../components/Filters";

//DONE ссылки маршрутиз реакт роутер
// разделить получение данных для главной стр и каталога
// фильтры по катергориям
// фильтр поиска по названию
// фильтр по цене от 0 до 1000
// проверить все кейсы по фильтру
// вынести отдельные компоненты
// когда в options defoult - сделать что его невозможно выбрать пользователю, а то при перевыборе на него не отображаются товары в корзине, ведь он не соответствует категории
// ----------------------------------------

// контейнер для картинок

// фильтр по рейтингу(не обяз)
//вынести api запросы в отдельные модули(создать в папке src папку апи и там сделать модули)

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
        (item) => item.category === state.filters.category
      );
    }

    if (currentSearch) {
      filteredProducts = filteredProducts.filter((item) =>
        item.title.toLowerCase().includes(currentSearch.toLowerCase())
      );
    }

    if (minPrice && maxPrice) {
      filteredProducts = filteredProducts.filter(
        (item) => item.price >= minPrice && item.price <= maxPrice
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
      <div className="mx-24 mt-24">
        <Link to="/">
          Вернуться на предыдущую страницу {<br />}
          <h2 className="text-3xl font-medium">Shop The Latest</h2>
        </Link>

        <div className="flex items-start pt-10">
          <Filters products={products} />

          <Items
            product={products}
            classNameOfItems="gap-x-6 gap-y-40"
          />
        </div>
      </div>
    </>
  );
}
