import axios from 'axios';

import environment from '../config/env';

const api = axios.create({
  baseURL: environment.url,
});

export default api;
