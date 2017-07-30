import React, { Component } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import styles from './App.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Header/>
        <main>
          {this.props.children}
          {!/posts|admin|edit/.test(this.props.location.pathname) &&
          <Sidebar path={this.props.location.pathname}/>}
        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
