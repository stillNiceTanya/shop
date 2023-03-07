import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import Item from "./Item";

export default function Items({ classNameOfItems, products }) {
  return (
    <>
      <ul className={classNames("grid grid-cols-3", classNameOfItems)}>
        {products.map((item) => (
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
