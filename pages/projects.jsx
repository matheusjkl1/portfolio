import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Navbar from '../components/navbar';
import { api, apiUrl } from '../services/api';
import 'bulma/css/bulma.css';
import Loading from '../components/loading';

export default function Projects() {
  const [loading, setLoading] = useState(true);
  const [projects, setPorjects] = useState([]);

  useEffect(() => {
    api.get('/projects')
      .then((response) => setPorjects(response.data))
      .catch((err) => (err));
    setLoading(false);
  }, [loading]);
  console.log(projects);
  return (
    <div className="container">
      <Navbar />
      <section className="box">
        {loading ? <Loading />
          : (
            <div
              key={uuidv4()}
              className="container"
            >
              {
            projects.map((project) => (
              <section>
                <img
                  src={`${apiUrl}${project.img}`}
                  alt={project.name}
                  className="image is-128x128"
                />
                <h1>{project.name}</h1>
              </section>
            ))
}
            </div>
          )}
      </section>
    </div>
  );
}
