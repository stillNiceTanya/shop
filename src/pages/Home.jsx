import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getLimitProducts } from '../redux/actions/getLimitProducts';

import Items from '../components/Items';
import { Header } from '../components/Header';
import SearchInput from '../components/SearchInput';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLimitProducts({ limit: 6 }));
  }, [dispatch]);

  const limitProducts = useSelector((state) => state.limitProducts.data);
  const isLoaded = useSelector((state) => state.limitProducts.isLoaded);

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-screen">
        loading...
      </div>
    );
  }

  return (
    <>
      <Header />

      <div className="px-4 mobile:px-10 smalltablet:px-14 md:mt-12 lg:mt-24 lg:px-24">
        <div className="pt-4 mb-6 md:hidden">
          <SearchInput />
        </div>
        <div className="flex justify-between self-center mb-10 font-medium">
          <h2 className="md:text-xl text-m">Here are latest 6 items</h2>
          <Link
            to="/catalog"
            className="text-accent-100 text-sm md:text-3xl self-center"
          >
            View All
          </Link>
        </div>

        <Items
          className="lg:gap-x-14 lg:gap-y-20 mobile:gap-x-3.5 mobile:gap-y-6"
          products={limitProducts}
        />
      </div>
    </>
  );
}
