import React from 'react';
import { useMediaQuery } from 'react-responsive';
import classNames from 'classnames';
import { FaSearch } from 'react-icons/fa';
import { debounce } from 'throttle-debounce';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions/setFilter';

export default function InputSearch() {
  const dispatch = useDispatch();

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const handleInputSearch = (event) => {
    dispatch(setFilter({ search: event.target.value }));
  };

  const debounceSearch = debounce(500, handleInputSearch);

  return (
    <>
      <div className="flex relative">
        {isDesktopOrLaptop ? (
          ''
        ) : (
          <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-darkGray-100 text-sm" />
        )}
        <input
          onChange={debounceSearch}
          type="search"
          placeholder={isDesktopOrLaptop ? 'Search...' : 'Search'}
          className={classNames(
            'outline-none appearance-none focus:outline-none',
            {
              'bg-lightGray-100 w-full rounded placeholder-padding py-1.5 px-7':
                !isDesktopOrLaptop,
            },
          )}
        />

        {isDesktopOrLaptop ? (
          <FaSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-darkGray-100 text-sm" />
        ) : (
          ''
        )}
      </div>
      {isDesktopOrLaptop ? (
        <div className="border-b border-solid mt-3 border-grey-100 mt-3"></div>
      ) : (
        ''
      )}
    </>
  );
}
