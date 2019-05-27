import React from 'react';

const logo = `images/logo__small.png`;
const home = `/`;

const Logo = () => {
  return (
    <a className="nav-logo" href={home}>
      <img src={logo} alt="logo" />
    </a>
  );
};

export default Logo;
