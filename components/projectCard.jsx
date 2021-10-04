/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { api, apiUrl } from '../services/api';
import Loading from './loading';
import styles from './css/projectCard.module.css';
import ProjectCardColumns from './projectCardColumns';

export default function projectCard() {
  const [projectsFront, setProjectsFront] = useState([]);
  const [projectsBack, setProjectsBack] = useState([]);
  const [hide, setHide] = useState('');
  useEffect(() => {
    try {
      api.get('front-end/projects')
        .then((response) => setProjectsFront(response.data))
        .catch((err) => console.error(err));
    } catch (error) {
      console.log(error);
    }
    try {
      api.get('back-end/projects')
        .then((response) => setProjectsBack(response.data))
        .catch((err) => console.error(err));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getIndex = (id) => {
    setHide((previHide) => ({
      ...previHide,
      [id]: !previHide[id],
    }));
  };

  const projectsColumn = (img, name) => (
    <div key={uuidv4()} className={styles.cardProjectHide}>
      <figure className="image">
        <img
          src={`${apiUrl}${img}`}
          alt={name}
        />
      </figure>
      <h1>{name}</h1>
      <h4>passe o mouse para mais detalhes.</h4>
    </div>
  );

  return (
    <section className={`box ${styles.cardMainContent}`}>
      {projectsFront.length <= 0 && projectsBack.length <= 0 ? <Loading /> : (
        <div
          key={uuidv4()}
          className={styles.cardMainContentColumn}
        >
          <div
            key={uuidv4()}
            className={styles.ColumnDiv}
          >
            <h1>Front-End</h1>
            {
              projectsFront.map(({
                id, img, name, sinopse, url, gitUrl, stacks,
              }) => (
                <button
                  className={`box ${styles.cardProjectShowButton}`}
                  type="button"
                  onMouseEnter={() => getIndex(id)}
                  onMouseLeave={() => getIndex(id)}
                >
                  {hide[id] ? (
                    <ProjectCardColumns
                      projectProps={{
                        id, img, name, sinopse, url, gitUrl, stacks,
                      }}
                    />
                  ) : (projectsColumn(img, name))}
                </button>
              ))
            }
          </div>
          <div
            key={uuidv4()}
            className={styles.ColumnDiv}
          >
            <h1>Back-End</h1>
            {
            projectsBack.map(({
              id, img, name, sinopse, url, gitUrl, stacks,
            }) => (
              <button
                className={`box ${styles.cardProjectShowButton}`}
                type="button"
                onMouseEnter={() => getIndex(id)}
                onMouseLeave={() => getIndex(id)}
              >
                {hide[id] ? (
                  <ProjectCardColumns
                    projectProps={{
                      id, img, name, sinopse, url, gitUrl, stacks,
                    }}
                  />
                ) : (projectsColumn(img, name))}
              </button>
            ))
          }
          </div>
        </div>
      )}
    </section>
  );
}
