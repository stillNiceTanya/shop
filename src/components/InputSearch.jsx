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

  const placeholderText = isDesktopOrLaptop ? 'Search...' : 'Search';

  const handleInputSearch = (event) => {
    dispatch(setFilter({ search: event.target.value }));
  };

  const debounceSearch = debounce(500, handleInputSearch);

  const SearchIcon = ({ isDesktopOrLaptop }) => {
    if (isDesktopOrLaptop) {
      return (
        <FaSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-darkGray-100 text-sm" />
      );
    }
    return (
      <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-darkGray-100 text-sm" />
    );
  };

  return (
    <>
      <div className="flex relative">
        <SearchIcon isDesktopOrLaptop={isDesktopOrLaptop} />
        <input
          onChange={debounceSearch}
          type="text"
          placeholder={placeholderText}
          className={classNames(
            'outline-none appearance-none focus:outline-none',
            {
              'bg-lightGray-100 w-full rounded py-1.5 px-7': !isDesktopOrLaptop,
            },
          )}
        />
      </div>
      {isDesktopOrLaptop ? (
        <div className="border-b border-solid mt-3 border-grey-100 mt-3"></div>
      ) : (
        ''
      )}
    </>
  );
}
