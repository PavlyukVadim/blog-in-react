import React, { Component } from 'react';
import './Filters.scss';

class Filters extends Component {
	
	constructor(props) {
	    super(props);
  	}


  	render() {
	    return (
		    <div className="filters">
				<ul>
				  <li>
				    <input type="radio" id="f-option" name="selector"/>
				    <label htmlFor="f-option">По новизне</label>
				    
				    <div className="check"></div>
				  </li>
				  
				  <li>
				    <input type="radio" id="s-option" name="selector"/>
				    <label htmlFor="s-option">По популярности</label>
				    
				    <div className="check"><div className="inside"></div></div>
				  </li>
				  
				  <li>
				    <input type="radio" id="t-option" name="selector"/>
				    <label htmlFor="t-option">По алфавиту</label>
				    
				    <div className="check"><div className="inside"></div></div>
				  </li>
				</ul>
		    </div>
	    );
	}

}

export default Filters;
