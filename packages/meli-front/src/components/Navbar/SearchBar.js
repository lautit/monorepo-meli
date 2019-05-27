import React from 'react';

const SearchBar = () => {
  return (
    <form
      className="nav-search"
      action={[process.env.PUBLIC_URL, `/api/items?q=:query`].join(``)}
      method="GET"
      role="search"
    >
      <input type="text" className="nav-search-input" placeholder="Nunca dejes de buscar" />
      <button type="submit" className="nav-search-btn">
        <i className="material-icons">search</i>
      </button>
    </form>
  );
};

export default SearchBar;
