import React from 'react';

import 'components/Navbar/Navbar.scss';

import Logo from 'components/Navbar/Logo';
import SearchBar from 'components/Navbar/SearchBar';

const Navbar = () => {
  return (
    <header className="nav-header">
      <div className="nav-bounds">
        <Logo />
        <SearchBar />
      </div>
    </header>
  );
};

export default Navbar;
