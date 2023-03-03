import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";

import { getProducts } from "../redux/actions/getProducts";
import Gallery from "../components/Gallery";
import ProductCard from "../components/ProductCard";

export default function Product() {
  //   const navigate = useNavigate();

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
    <div className="flex justify-between my-32 mx-24 ">
      <div className="flex justify-between gap-10">
        <div className="flex flex-col gap-10">
          {
            <Gallery
              item={product.image}
              className={"h-120 w-120 object-contain"}
            />
          }
          {
            <Gallery
              item={product.image}
              className={"h-120 w-120 object-contain"}
            />
          }
          {
            <Gallery
              item={product.image}
              className={"h-120 w-120 object-contain"}
            />
          }
          {
            <Gallery
              item={product.image}
              className={"h-120 w-120 object-contain"}
            />
          }
        </div>
        <>
          {
            <Gallery
              item={product.image}
              className={"object-contain h-600 w-540"}
            />
          }
        </>
      </div>
      <>
        <ProductCard product={product} />
      </>
    </div>
  );
}
