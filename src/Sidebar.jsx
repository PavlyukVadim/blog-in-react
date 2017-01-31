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
  	}

  	openMenu() {
  		console.log(this.buttonMenu);
  		this.buttonMenu.classList.toggle("active");
  	}

  	render() {
	    return (
		    <div className="sidebar">
				<button className="cmn-toggle-switch cmn-toggle-switch__htx"
						ref={(button) => {this.buttonMenu = button;}} 
						onClick={this.openMenu} >
					<span>toggle menu</span>
				</button>
		    	<Filters setFilter={this.props.setFilter}/>
		    </div>
	    );
	}

}

export default Sidebar;
