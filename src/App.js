import React, { Component } from 'react';

import './App.scss';

import Header from './Header';
import NewsContent from './NewsContent.jsx';
import Sidebar from './Sidebar.jsx';
import Footer from './Footer.jsx';


class App extends Component {


    constructor(props) {
        super(props);
        this.state = {sortBy: "date"};
        this.handleFilter = this.handleFilter.bind(this);
        this.getTypeSort = this.getTypeSort.bind(this);
    }

    handleFilter(value) {
        this.setState({sortBy: value});
    }

    getTypeSort() {
        return this.state.sortBy;
    }


    render() {
        return (
            <div className="App">
            	<Header/>
            	<main>
            		<NewsContent getTypeSort={this.getTypeSort}/>
            		<Sidebar setFilter={this.handleFilter}/>
            	</main>
            	<Footer/>
          	</div>
        );
    }
}

export default App;
