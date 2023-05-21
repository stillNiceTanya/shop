import React from 'react';
import { debounce } from 'throttle-debounce';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions/setFilter';

import SearchIcon from './SearchIcon';

export default function SearchInput() {
  const dispatch = useDispatch();

  const handleSearchInput = (event) => {
    dispatch(setFilter({ search: event.target.value }));
  };

  const debounceSearch = debounce(500, handleSearchInput);

  return (
    <>
      <div className="flex relative">
        <SearchIcon />

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
