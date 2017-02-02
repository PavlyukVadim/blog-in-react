import React, { Component } from 'react';

import './App.scss';

import Header from './Header';
import Sidebar from './Sidebar.jsx';
import Footer from './Footer.jsx';
import NewsContainer from './../containers/NewsContainer';


class App extends Component {

    render() {
        return (
            <div className="App">
            	<Header/>
            	<main>
            		<NewsContainer/>
            		<Sidebar/>
            	</main>
            	<Footer/>
          	</div>
        );
    }
}

export default App;
