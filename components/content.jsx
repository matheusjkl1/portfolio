/* eslint-disable react/prop-types */
import React from 'react';
import Image from 'next/image';
import styles from './content.module.css';

export default function Content({
  h1Txt, pTxt, imgTest,
}) {
  return (
    <div className={`box ${styles.mainContent}`}>
      <section className={styles.sectionTitle}>
        <h1>
          {h1Txt}
        </h1>
        <p>
          {pTxt}
        </p>
      </section>
      <section className={styles.sectionImg}>
        <Image src={imgTest} />
      </section>
    </div>
  );
}
