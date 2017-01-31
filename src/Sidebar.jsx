import React, { Component } from 'react';
import './Sidebar.scss';

import Filters from './Filters.jsx';


(function() {

  var toggles = document.querySelectorAll(".cmn-toggle-switch");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
    });
  }

})();



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
		    	<Filters setFilter={this.props.setFilter}
		    			 closeMobMenu={this.closeMenu}/>
		    </div>
	    );
	}

}

export default Sidebar;
