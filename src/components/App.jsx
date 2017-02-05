import React, { Component } from 'react';

import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import Footer from './Footer.jsx';
import './App.scss';


class App extends Component {

    render() {
        console.log()
        return (
            <div className="App">
            	<Header/>
            	<main>
                    { this.props.children }
                    <Sidebar path={this.props.location.pathname}/>
            	</main>
            	<Footer/>
          	</div>
        );
    }
}

export default App;
