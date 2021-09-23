import React from 'react';
import styles from './css/loading.module.css';
import 'bulma/css/bulma.css';

export default function Loading() {
  return (
    <div className={`box ${styles.loadingDiv}`}>
      <progress className="progress is-medium is-dark" />
    </div>
  );
}
