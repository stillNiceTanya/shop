import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getLimitProducts } from '../redux/actions/getLimitProducts';

import Items from '../components/Items';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLimitProducts({ limit: 6 }));
  }, []);

  const limitProducts = useSelector((state) => state.limitProducts.data);
  const isLoaded = useSelector((state) => state.limitProducts.isLoaded);

  if (!isLoaded) {
    return <div>loading...</div>;
  }

  return (
    <div className="md:mt-16 lg:ml-44 md:mr-6 m-4 mobile:m-10">
      <div className="flex justify-between self-center mb-10 font-medium">
        <h2 className="md:text-4xl text-xl">Shop The Latest</h2>
        <Link
          to="/catalog"
          className="text-accent-100 text-sm md:text-xl self-center"
        >
          View All
        </Link>
      </div>

      <Items
        className="lg:gap-x-14 lg:gap-y-20 mobile:gap-x-3.5 mobile:gap-y-7"
        products={limitProducts}
      />
    </div>
  );
}
