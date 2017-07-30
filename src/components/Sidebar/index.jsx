import React, { Component } from 'react';
import FilterBlog from '../../containers/FilterBlog';
import FilterNews from '../../containers/FilterNews';
import styles from './Sidebar.scss';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  openMenu() {
    this.buttonMenu.classList.toggle('active');
    this.sideBar.classList.toggle('mobSidebar');
  }

  closeMenu() {
    this.buttonMenu.classList.remove('active');
    this.sideBar.classList.remove('mobSidebar');
  }

  render() {
    return (
      <div
        className={styles.sidebar}
        ref={(sidebar) => {this.sideBar = sidebar;}}
      >
        <button 
          className={`${styles.toggleSwitch} ${styles.toggleSwitchHT}`}
          ref={(button) => {this.buttonMenu = button;}} 
          onClick={this.openMenu}
        >
          <span>toggle menu</span>
        </button>
        {this.props.path === '/' && <FilterBlog />}
        {this.props.path === '/news' && <FilterNews />}
      </div>
    );
  }
}

export default Sidebar;
