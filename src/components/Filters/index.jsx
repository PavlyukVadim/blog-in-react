import React, { Component } from 'react';
import config from './../../config';
import styles from './Filters.scss';

class Filters extends Component {
  render() {
    const filterType = `${this.props.type}Filter`;
    const filters = config.filters[filterType].map((item) => {
      return (
        <li key={item.id}>
          <div className={styles.check} />
          <input
            type="radio"
            id={item.id}
            name="selector"
            onChange={this.props[item.onChange]}
            defaultChecked={item.defaultChecked}
          />
          <label htmlFor={item.id}>
            {item.label}
          </label>
        </li>
      );
    });

    return (
      <div className={styles.filters}>
        <ul>
          {filters}
        </ul>
      </div>
    );
  }
}

export default Filters;
