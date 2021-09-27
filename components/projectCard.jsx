/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { api, apiUrl } from '../services/api';
import Loading from './loading';
import styles from './css/projectCard.module.css';

export default function projectCard() {
  const [projects, setPorjects] = useState([]);

  useEffect(() => {
    try {
      api.get('/projects')
        .then((response) => setPorjects(response.data))
        .catch((err) => console.error(err));
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(projects);

  return (
    <section className={`${styles.cardMainContent}`}>
      {projects.length <= 0 ? <Loading />
        : (
          <div
            key={uuidv4()}
            className="container"
          >
            {
            projects.map((project) => (
              <div className={`box ${styles.cardProject}`} key={uuidv4()}>
                <figure className="image">
                  <img
                    src={`${apiUrl}${project.img}`}
                    alt={project.name}
                  />
                  <p>
                    {project.sinopse}
                  </p>
                </figure>
                <div className={styles.cardProjectSinopse}>
                  <div>
                    <h1>{project.name}</h1>
                    <section className="tag is-link is-light">
                      <a href={project.url} target="_blank" rel="noreferrer">
                        <p>Url do Projeto</p>
                      </a>
                    </section>
                    <section className="tag is-link is-light">
                      <a href={project.gitUrl} target="_blank" rel="noreferrer">
                        <p>Url do Repositorio</p>
                      </a>
                    </section>
                  </div>
                  <h2>
                    <b>Tecnologias Utilizadas:</b>
                  </h2>
                  <h2>
                    {project.stacks}
                  </h2>
                </div>
              </div>
            ))
          }
          </div>
        )}
    </section>
  );
}
