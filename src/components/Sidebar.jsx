import React, { Component } from 'react';
import './Sidebar.css';

import FilterBlog from './../containers/FilterBlog';
import FilterNews from './../containers/FilterNews';



class Sidebar extends Component {
	
	constructor(props) {
	    super(props);
	    this.openMenu = this.openMenu.bind(this);
	    this.closeMenu = this.closeMenu.bind(this);
  	}

  	openMenu() {
  		this.buttonMenu.classList.toggle("active");
  		this.sideBar.classList.toggle("mob-sidebar");
  	}

  	closeMenu() {
  		this.buttonMenu.classList.remove("active");
  		this.sideBar.classList.remove("mob-sidebar");
  	}


  	render() {
	    return (
		    <div className="sidebar"
				 ref={(sidebar) => {this.sideBar = sidebar;}}>
				<button className="cmn-toggle-switch cmn-toggle-switch__htx"
						ref={(button) => {this.buttonMenu = button;}} 
						onClick={this.openMenu} >
					<span>toggle menu</span>
				</button>
				{ this.props.path === '/' && <FilterBlog /> }
				{ this.props.path === '/news' && <FilterNews /> }
		    </div>
	    );
	}

}

export default Sidebar;
