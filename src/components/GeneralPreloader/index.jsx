import React from 'react';
import { Preloader } from 'react-materialize';
import styles from './GeneralPreloader.scss';

export default () => {
  return (
    <div className={styles.preloader}>
      <Preloader flashing/>
    </div>
  );
};
