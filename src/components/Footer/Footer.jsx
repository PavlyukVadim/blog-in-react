import React, { Component } from 'react';
import { Footer } from 'react-materialize';
import './grid.css';

class MyFooter extends Component {
  render() {
    return (
      <Footer
        className='example'
        copyrights="&copy; 2017 Copyright Text"
        moreLinks={<a className="grey-text text-lighten-4 right" href="#!">More Links</a>}
        links={
          <ul>
            <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
          </ul>}
      >
        <h5 className="white-text">Footer Content</h5>
        <p className="grey-text text-lighten-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, quaerat!
        </p>
      </Footer>
    );
  }
}

export default MyFooter;
