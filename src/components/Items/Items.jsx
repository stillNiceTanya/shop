import React from "react";
import classNames from "classnames";

import Item from "../Item/Item";

export default function Items({ classNameOfItems, props }) {
  return (
    <>
      <ul className={classNames("grid grid-cols-3", classNameOfItems)}>
        {props.map((item) => (
          <li key={item.id}>
            <Item item={item} />
          </li>
        ))}
      </ul>
    </>
  );
}
