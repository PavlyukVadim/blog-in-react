import React, { Component } from 'react';
import './Sidebar.scss';

import Filters from './Filters.jsx';

class Sidebar extends Component {
	
	constructor(props) {
	    super(props);
  	}


  	render() {
	    return (
		    <div className="sidebar">
		    	<Filters/>
		    </div>
	    );
	}

}

export default Sidebar;
