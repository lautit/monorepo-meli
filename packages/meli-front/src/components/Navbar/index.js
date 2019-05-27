import React from 'react';

import { Grid, Menu } from 'semantic-ui-react';

import Logo from 'components/Navbar/Logo';
import SearchBar from 'components/Navbar/SearchBar';

const renderGrid = () => (
  <Grid centered>
    <Grid.Row stretched verticalAlign="middle" color="yellow">
      <Grid.Column only="computer" width={3} />
      <Grid.Column as="a" href="/">
        <Logo />
      </Grid.Column>
      <Grid.Column>
        <SearchBar />
      </Grid.Column>
      <Grid.Column only="computer" width={3} />
    </Grid.Row>
  </Grid>
);

const renderMenu = () => (
  <Menu borderless fixed="top">
    <Menu.Item>
      <Logo />
    </Menu.Item>
    <Menu.Item>
      <SearchBar />
    </Menu.Item>
  </Menu>
);

const Navbar = () => {
  return renderMenu();
};

export default Navbar;
