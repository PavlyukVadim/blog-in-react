import React, { Component } from 'react';

import './App.scss';

import Header from './Header';
import Sidebar from './Sidebar.jsx';
import Footer from './Footer.jsx';
import NewsContainer from './../containers/NewsContainer';


class App extends Component {


    constructor(props) {
        super(props);
        this.state = {sortBy: "date"};
        this.handleFilter = this.handleFilter.bind(this);
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
            		<NewsContainer />
            		<Sidebar setFilter={this.handleFilter}/>
            	</main>
            	<Footer />
          	</div>
        );
    }
}

export default App;
