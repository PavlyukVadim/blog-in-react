import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, NavItem } from 'react-materialize';
import config from './../../config';
import styles from './Header.scss';

class Header extends Component {
  render() {
    const links = config.navbar.map((item) => {
      return (
        <Link to={item.link}>
          {item.title}
        </Link>
      );
    });

    return (
      <header>
        <Navbar
          className={styles.navBar}
          brand='Blog'
          right
        >
          {links}
        </Navbar>
      </header>
    );
  }
}

export default Header;
