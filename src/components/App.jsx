import React, { Component } from 'react';

import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import Footer from './Footer.jsx';
import './App.scss';


class App extends Component {

    render() {
        return (
            <div className="App">
            	<Header/>
            	<main>
                    { this.props.children }
                    { this.props.location.pathname.indexOf('posts') === -1 &&
                      this.props.location.pathname.indexOf('admin') === -1 &&
                      this.props.location.pathname.indexOf('edit') === -1 &&
                       <Sidebar path={this.props.location.pathname}/>}
            	</main>
            	<Footer/>
          	</div>
        );
    }
}

export default App;
