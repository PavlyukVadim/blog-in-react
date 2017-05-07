import React, { Component } from 'react';

import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import Footer from './Footer.jsx';
import './App.css';


class App extends Component {

    render() {
        return (
            <div className="App">
            	<Header/>
            	<main>
                    { this.props.children }
                    { !/posts|admin|edit/.test(this.props.location.pathname) &&
                      <Sidebar path={this.props.location.pathname}/>}
            	</main>
            	<Footer/>
          	</div>
        );
    }
}

export default App;
