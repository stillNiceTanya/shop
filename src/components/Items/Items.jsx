import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import Item from "../Item/Item";

export default function Items({ classNameOfItems, props }) {
  return (
    <>
      <ul className={classNames("grid grid-cols-3", classNameOfItems)}>
        {props.map((item) => (
          <li key={item.id}>
            <Link
              to={"/product/" + item.id}
              className="text-accent-100 text-xl"
            >
              <Item item={item} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
