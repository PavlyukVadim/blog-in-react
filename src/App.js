import React, { Component } from 'react';

import Header from './Header';
import NewsContent from './NewsContent.jsx';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <NewsContent></NewsContent>
      </div>
    );
  }
}

export default App;
