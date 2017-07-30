import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, NavItem } from 'react-materialize';
import styles from './Header.scss';

class Header extends Component {
  render() {
    return (
      <header>
        <Navbar
          className={styles.navBar}
          brand='Blog'
          right
        >
          <Link to="/">Blog</Link>
          <Link to="/news">News</Link>
          <Link to="/admin">Admin</Link>
        </Navbar>
      </header>
    );
  }
}

export default Header;
