import React, { Component } from 'react';

import './Filters.scss';

class Filters extends Component {


  	render() {
  		//console.log(this.props.state);
	    return (
		    <div className="filters">
				<ul>
				  <li>
				    <input type="radio" id="date" name="selector" onChange={this.props.setDate} defaultChecked/>
				    <label htmlFor="date">По новизне</label>
				    <div className="check"></div>
				  </li>
				  
				  <li>
				    <input type="radio" id="popular" name="selector" onChange={this.props.setPopular}/>
				    <label htmlFor="popular">По популярности</label>
				    <div className="check"><div className="inside"></div></div>
				  </li>
				  
				  <li>
				    <input type="radio" id="alphabet" name="selector" onChange={this.props.setAlphabet}/>
				    <label htmlFor="alphabet">По алфавиту</label>
				    <div className="check"><div className="inside"></div></div>
				  </li>
				</ul>
		    </div>
	    );
	}

}

export default Filters;
