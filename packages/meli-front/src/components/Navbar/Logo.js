import React from 'react';

import logo from 'logo.svg';

import { Image } from 'semantic-ui-react';

const Logo = () => {
  return <Image fluid style={{ maxHeight: '3rem' }} src={logo} alt="logo" />;
};

export default Logo;
