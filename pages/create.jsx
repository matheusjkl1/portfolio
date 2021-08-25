/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { api } from '../services/api';
import Navbar from '../components/navbar';
import 'bulma/css/bulma.css';

export default function Create() {
  const [loginState, setLoginState] = useState({
    name: '', gitUrl: '', sinopse: '', file: '', url: '',
  });
  // const [file, setFile] = useState('');
  const [data, setData] = useState([]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setLoginState({ ...loginState, [name]: value });
  };

  const fileSelectedHandle = ({ target }) => {
    const { name, files } = target;
    setLoginState({ ...loginState, [name]: files[0] });
  };

  const createProject = async () => {
    const fd = new FormData();
    fd.append('name', loginState.name);
    fd.append('file', loginState.file);
    fd.append('file', loginState.url);
    fd.append('gitUrl', loginState.gitUrl);
    fd.append('sinopse', loginState.sinopse);
    api
      .post('/projects', fd,
        {
          headers: {
            'Content-Type': `multipart/form-data; boundary=${fd._boundary}`,
          },
        })
      .then((response) => setData(JSON.stringify(response.data)))
      .catch((err) => (err));
  };
  return (
    <div className="container">
      <Navbar />
      <form className="box">
        <label htmlFor="name" className="label">
          <input
            className="input is-success"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="url" className="label">
          <input
            className="input is-success"
            type="text"
            id="url"
            name="url"
            placeholder="Url do Projeto"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="gitUrl" className="label">
          <input
            className="input is-success"
            type="text"
            id="gitUrl"
            name="gitUrl"
            placeholder="Url do GitHub"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="sinopse" className="label">
          <input
            className="input is-success"
            type="text"
            id="sinopse"
            name="sinopse"
            placeholder="Sinopse do Projeto"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="file" className="label">
          <input
            className="input is-success"
            type="file"
            id="file"
            name="file"
            onChange={fileSelectedHandle}
          />
        </label>
        <input
          className="button is-success is-light"
          type="button"
          value="Cadastrar Projeto"
          onClick={createProject}
        />
      </form>
      <div>
        {data}
      </div>
    </div>
  );
}
