import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { getProducts } from "../redux/actions/getProducts";
import Gallery from "../components/Gallery";

export default function Product() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const product = useSelector((state) => {
    let result = state.products;
    let numberId = Number(id);

    return result
      .filter((item) => item.id === numberId)
      .map((item) => item.image)
      .join();
  });

  useEffect(() => {
    dispatch(getProducts({}));
  }, []);

  return (
    <div className="flex justify-between my-32 mx-24 ">
      <div className="flex justify-between gap-10">
        <div className="flex flex-col gap-10">
          {
            <Gallery
              item={product}
              className={"h-120 w-120 object-contain"}
            />
          }
          {
            <Gallery
              item={product}
              className={"h-120 w-120 object-contain"}
            />
          }
          {
            <Gallery
              item={product}
              className={"h-120 w-120 object-contain"}
            />
          }
          {
            <Gallery
              item={product}
              className={"h-120 w-120 object-contain"}
            />
          }
        </div>
        <>
          {
            <Gallery
              item={product}
              className={"object-contain h-600 w-540"}
            />
          }
        </>
      </div>
      <div>id - {` ${+id}`}</div>
    </div>
  );
}
