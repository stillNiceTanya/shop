import React from 'react';
import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames';
import { FaSearch } from 'react-icons/fa';
import { debounce } from 'throttle-debounce';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions/setFilter';

const SearchIcon = () => {
  return (
    <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-dark-gray-100 text-sm md:left-auto md:ml-auto md:top-1/2 md:right-2" />
  );
};

export default function SearchInput() {
  const dispatch = useDispatch();

  const isScreenLargerThan768 = useMediaQuery({
    query: '(min-width: 768px)',
  });

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
          className={classNames(
            'outline-none appearance-none focus:outline-none',
            {
              'bg-light-gray-100 w-full rounded py-1.5 px-7':
                !isScreenLargerThan768,
            },
          )}
        />
      </div>
      <div className="md:border-b md:border-solid md:mt-3 md:border-grey-100 md:mt-3"></div>
    </>
  );
}
