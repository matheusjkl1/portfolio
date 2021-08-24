import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
import styles from './content.module.css';
import api from '../services/api';

export default function ProjectContent() {
  const [setData] = useState([]);

  useEffect(() => {
    api
      .get('/')
      .then((response) => setData(response.data))
      .catch((err) => (`ops! ocorreu um erro${err}`));
  }, []);
  return (
    <div className={styles.mainContent}>
      <h1>oi</h1>
    </div>
  );
}
