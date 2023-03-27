import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';

import { getProducts } from '../redux/actions/getProducts';
import GalleryProduct from '../components/GalleryProduct';
import ProductCard from '../components/ProductCard/ProductCard';

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
    <div className="p-4 w-screen smalltablet:px-14 md:flex md:justify-between md:py-24 gap-10">
      <div className="lg:flex lg:justify-between lg:gap-10">
        <div className="lg:flex lg:flex-col lg:gap-10 hidden lg:block">
          <GalleryProduct imageSrc={product.image} className="h-120 w-120" />

          <GalleryProduct imageSrc={product.image} className="h-120 w-120" />

          <GalleryProduct imageSrc={product.image} className="h-120 w-120" />

          <GalleryProduct imageSrc={product.image} className="h-120 w-120" />
        </div>

        <GalleryProduct
          imageSrc={product.image}
          className="w-auto mx-auto mobile:w-2/3 smalltablet:w-1/2 md:w-2/3 bigtablet:w-2/3 lg:max-h-600 lg:max-w-540 "
        />
      </div>

      <ProductCard product={product} className="shrink" />
    </div>
  );
}
