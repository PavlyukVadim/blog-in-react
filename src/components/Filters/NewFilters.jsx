import React, { Component } from 'react';
import styles from './Filters.scss';

class NewFilters extends Component {
  render() {
    return (
      <div className={styles.filters}>
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
            <div className={styles.check} />
          </li>
          <li>
            <input
              type="radio"
              id="the-guardian-uk"
              name="selector"
              onChange={this.props.setNews}
            />
            <label htmlFor="the-guardian-uk">The Guardian</label>
            <div className={styles.check}>
              <div className={styles.inside} />
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default NewFilters;
