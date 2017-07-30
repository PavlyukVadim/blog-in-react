import React, { Component } from 'react';
import styles from './Filters.scss';

class BlogFilters extends Component {
  render() {
    return (
      <div className={styles.filters}>
        <ul>
          <li>
            <input
              type="radio"
              id="date"
              name="selector"
              onChange={this.props.setDate}
              defaultChecked
            />
            <label htmlFor="date">По новизне</label>
            <div className={styles.check} />
          </li>
          <li>
            <input
              type="radio"
              id="popular"
              name="selector"
              onChange={this.props.setPopular}
            />
            <label htmlFor="popular">По популярности</label>
            <div className={styles.check}>
              <div className={styles.inside} />
            </div>
          </li>
          <li>
            <input
              type="radio"
              id="alphabet"
              name="selector"
              onChange={this.props.setAlphabet}
            />
            <label htmlFor="alphabet">По алфавиту</label>
            <div className={styles.check}>
              <div className={styles.inside} />
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default BlogFilters;
