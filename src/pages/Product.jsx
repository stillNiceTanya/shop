import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { FaCheckCircle } from 'react-icons/fa';

import { getProducts } from '../redux/actions/getProducts';
import ProductImage from '../components/ProductImage';
import ProductCard from '../components/ProductCard/ProductCard';
import { Header } from '../components/Header';

//TODO исправить баг - тостКонтейнер появляется только после второго клика

export default function Product() {
  useEffect(() => {
    dispatch(getProducts({}));
  }, []);

  const { id } = useParams();

  const dispatch = useDispatch();

  const isLoaded = useSelector((state) => state.products.isLoaded);

  const product = useSelector((state) => {
    let productId = Number(id);
    if (Number.isNaN(productId)) {
      return null;
    }

    let result = state.products.data;

    return result.find((item) => item.id === productId);
  });

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-screen">loading</div>
    );
  }

  if (isLoaded && !product) {
    return <Navigate to="/error-page" />;
  }

  return (
    <>
      <Header />

      <div className="p-4 mobile:px-10 smalltablet:px-14 md:py-12 lg:py-32 lg:px-24 md:grid md:grid-cols-2 md:gap-x-10 lg:gap-x-24 h-screen">
        <div className="lg:flex lg:gap-10 items-center">
          <div className="lg:flex lg:flex-col lg:gap-8 hidden lg:block ">
            <ProductImage imageSrc={product.image} className="h-120 w-120" />

            <ProductImage imageSrc={product.image} className="h-120 w-120" />

            <ProductImage imageSrc={product.image} className="h-120 w-120" />

            <ProductImage imageSrc={product.image} className="h-120 w-120" />
          </div>
          <div className="h-80 lg:h-full lg:w-full">
            <ProductImage
              imageSrc={product.image}
              className="w-auto h-full block mx-auto pt-10 "
            />
          </div>
        </div>

        <div className="md:col-span-1 lg:col-span-1">
          <ProductCard product={product} />
        </div>
      </div>

      <ToastContainer
        position="top-center"
        pauseOnHover
        hideProgressBar
        autoClose={2000}
        limit={1}
        closeButton={false}
        toastClassName={() => 'bg-light-gray-100'}
        className={() =>
          'w-full top-[101px] mobile:px-10 smalltablet:px-14 lg:px-24 absolute'
        }
        bodyClassName={() => 'relative h-16 px-6 flex items-center'}
        icon={<FaCheckCircle className="text-accent-100 text-xl" />}
      />
    </>
  );
}
