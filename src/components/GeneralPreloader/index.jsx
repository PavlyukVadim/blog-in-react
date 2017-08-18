import React from 'react';
import styles from './GeneralPreloader.scss';

export default () => {
  return (
    <div className={styles.loaderWrapper}>
      <span className={styles.loader}>
        <span className={styles.loaderInner} />
      </span>
    </div>
  );
};
