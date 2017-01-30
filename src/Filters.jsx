import React, { Component } from 'react';
import './Filters.scss';

class Filters extends Component {
	
	constructor(props) {
	    super(props);
	    this.handleChange = this.handleChange.bind(this);
  	}

	handleChange(e) {
		this.props.setFilter(e.target.id);
  	}

  	render() {
	    return (
		    <div className="filters">
				<ul>
				  <li>
				    <input type="radio" id="date" name="selector" onChange={this.handleChange}/>
				    <label htmlFor="date">По новизне</label>
				    <div className="check"></div>
				  </li>
				  
				  <li>
				    <input type="radio" id="popular" name="selector" onChange={this.handleChange}/>
				    <label htmlFor="popular">По популярности</label>
				    <div className="check"><div className="inside"></div></div>
				  </li>
				  
				  <li>
				    <input type="radio" id="alphabet" name="selector" onChange={this.handleChange}/>
				    <label htmlFor="alphabet">По алфавиту</label>
				    <div className="check"><div className="inside"></div></div>
				  </li>
				</ul>
		    </div>
	    );
	}

}

export default Filters;
