import React, { Component } from 'react';

import './App.scss';

import Header from './Header';
import NewsContent from './NewsContent.jsx';
import Sidebar from './Sidebar.jsx';
import Footer from './Footer.jsx';


class App extends Component {
  render() {
    return (
        <div className="App">
        	<Header/>
        	<main>
        		<NewsContent/>
        		<Sidebar/>
        	</main>
        	<Footer/>
      	</div>
    );
  }
}

export default App;
