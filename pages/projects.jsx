/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Navbar from '../components/navbar';
import { api, apiUrl } from '../services/api';
import 'bulma/css/bulma.css';
import Loading from '../components/loading';
import './project.module.css';

export default function Projects() {
  const [loading, setLoading] = useState(true);
  const [projects, setPorjects] = useState([]);

  useEffect(() => {
    api.get('/projects')
      .then((response) => setPorjects(response.data))
      .catch((err) => console.error(err));
    setLoading(false);
  }, [loading]);

  console.log(projects);

  return (
    <div className="container">
      <Navbar path="/projects" />
      <section className="box">
        {loading ? <Loading />
          : (
            <div
              key={uuidv4()}
              className="container"
            >
              {
                projects.map((project) => (
                  <div className="card project-card" key={uuidv4()}>
                    <div className="card-image project-card">
                      <figure className="image project-card">
                        <img
                          src={`${apiUrl}${project.img}`}
                          alt={project.name}
                        />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="media">
                        <div className="media-left">
                          <figure className="image is-48x48">
                            <img
                              src={`${apiUrl}${project.img}`}
                              alt={project.name}
                            />
                          </figure>
                        </div>
                        <div className="media-content">
                          <p className="title is-4">{project.name}</p>
                          <a href={project.url} target="_blank" rel="noreferrer">
                            <p className="subtitle is-6">
                              <span className="tag is-link is-light">Url do Projeto:</span>
                              &nbsp;&nbsp;
                              {project.url}
                            </p>
                          </a>
                          <a href={project.gitUrl} target="_blank" rel="noreferrer">
                            <p className="subtitle is-6">
                              <span className="tag is-link is-light">Url do repositorio:</span>
                              &nbsp;&nbsp;
                              {project.gitUrl}
                            </p>
                          </a>
                        </div>
                      </div>

                      <div className="content">
                        {project.sinopse}
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          )}
      </section>
    </div>
  );
}
