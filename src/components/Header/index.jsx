import React, { Component } from 'react';
import { Link } from 'react-router';
import { config } from './../../config';
import styles from './Header.scss';

class Header extends Component {
  render() {
    const links = config.navbar.map((item) => {
      return (
        <div
          className={styles.navItem}
          key={item.title}
        >
          <Link to={item.link}>
            {item.title}
          </Link>
        </div>
      );
    });

    return (
      <header>
        <div className={styles.navBar}>
          <div className={styles.navBrand}>
            <Link to='/'>
              Blog
            </Link>
          </div>
          <div className={styles.navItems}>
            {links}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
