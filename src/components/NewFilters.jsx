import React, { Component } from 'react';
import './Filters.css';

class NewFilters extends Component {
  render() {
    return (
      <div className="filters">
        <ul>
          <li>
            <input
              type="radio"
              id="time"
              name="selector"
              onChange={this.props.setNews}
              defaultChecked
            />
            <label htmlFor="time">Time</label>
            <div className="check" />
          </li>
          <li>
            <input
              type="radio"
              id="the-guardian-uk"
              name="selector"
              onChange={this.props.setNews}
            />
            <label htmlFor="the-guardian-uk">The Guardian</label>
            <div className="check">
              <div className="inside" />
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default NewFilters;
