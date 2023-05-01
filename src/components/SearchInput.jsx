import React from 'react';

import Icon from './Icon';
import { FaSearch } from 'react-icons/fa';
import { debounce } from 'throttle-debounce';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions/setFilter';

export default function SearchInput() {
  const dispatch = useDispatch();

  const handleSearchInput = (event) => {
    dispatch(setFilter({ search: event.target.value }));
  };

  const debounceSearch = debounce(500, handleSearchInput);

  return (
    <>
      <div className="flex relative">
        <Icon className="absolute w-4 h-full md:left-auto md:right-2 left-2">
          <FaSearch className="text-dark-gray-100 text-sm w-full h-full" />
        </Icon>

        <input
          onChange={debounceSearch}
          type="text"
          placeholder="Search..."
          className="outline-none appearance-none focus:outline-none bg-light-gray-100 md:bg-transparent py-1.5 px-7 md:px-0 w-full rounded"
        />
      </div>
      <div className="md:border-b md:border-solid md:mt-3 md:border-grey-100 md:mt-3"></div>
    </>
  );
}
