import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import Item from './Item';

export default function Items({ className, products }) {
  return (
    <ul
      className={classNames(
        'grid grid-cols-1 mobile:grid-cols-2 lg:grid-cols-3 justify-items-center ',
        className,
      )}
    >
      {products.map((item) => (
        <li key={item.id}>
          <Link to={`/product/${item.id}`}>
            <Item item={item} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
