import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLimitProducts } from "../redux/actions/getLimitProducts";
import { Link } from "react-router-dom";

import Items from "../components/Items/Items";

export default function Home() {
  const dispatch = useDispatch();

  const limitProducts = useSelector((state) => state.limitProducts);

  useEffect(() => {
    dispatch(getLimitProducts({ limit: 6 }));
    return;
  }, []);

  return (
    <div className="mt-16 ml-44 mr-6">
      <div className="flex justify-between self-center mb-10 font-medium">
        <h2 className="text-4xl">Shop The Latest</h2>
        <Link
          to="/catalog"
          className="text-accent-100 text-xl"
        >
          View All
        </Link>
      </div>

      <div className="">
        <Items
          classNameOfItems="gap-x-14 gap-y-20"
          props={limitProducts}
        />
      </div>
    </div>
  );
}
