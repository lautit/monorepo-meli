import React from 'react';

import logo from 'logo.svg';

import { Image } from 'semantic-ui-react';

const Logo = () => {
  return <Image style={{ maxHeight: '2.5rem', paddingRight: '1rem' }} src={logo} alt="logo" />;
};

export default Logo;
