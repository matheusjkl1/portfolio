import axios from 'axios';

export const apiUrl = 'http://localhost:3001/';

// export const apiUrl = 'https://projects-api-matheus.herokuapp.com/';

export const api = axios.create({
  baseURL: apiUrl,
});
