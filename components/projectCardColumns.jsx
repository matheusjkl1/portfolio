import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './css/projectCard.module.css';

function projectCardColumns({
  projectProps: {
    name, sinopse, url, gitUrl, stacks,
  },
}) {
  return (
    <div className={styles.cardProjectShow} key={uuidv4()}>
      <figure className={styles.cardProjectSinopseShow}>
        <h1>{name}</h1>
        <p>
          {sinopse}
        </p>
      </figure>
      <div className={styles.cardProjectSinopseShow}>
        <div>
          <section className="tag is-link is-light">
            <a href={url} target="_blank" rel="noreferrer">
              <p>Url do Projeto</p>
            </a>
          </section>
          <section className="tag is-link is-light">
            <a href={gitUrl} target="_blank" rel="noreferrer">
              <p>Url do Repositorio</p>
            </a>
          </section>
        </div>
        <h2>
          <b>Tecnologias Utilizadas:</b>
        </h2>
        <h2>
          {stacks}
        </h2>
      </div>
    </div>
  );
}

export default projectCardColumns;
