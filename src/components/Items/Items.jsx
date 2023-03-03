import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import Item from "../Item/Item";

export default function Items({ classNameOfItems, product }) {
  return (
    <>
      <ul className={classNames("grid grid-cols-3", classNameOfItems)}>
        {product.map((item) => (
          <li key={item.id}>
            <Link to={"/product/" + item.id}>
              <Item item={item} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
