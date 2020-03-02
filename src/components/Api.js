import axios from 'axios';

const Api = (url, method = 'GET', data = {}, headers = {}) => {
  const API_URL = process.env.REACT_APP_BACKEND_URL;
  const sessionKey = localStorage.getItem('session_key');
  const sendHeaders = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...headers
  }

  if (Object.keys(data).length > 0) {
    data = {
      data: data
    };
  }

  if (sessionKey) {
      sendHeaders['Authorization'] = `Bearer ${sessionKey}`;
  }

  return axios({
    method: method,
    url: `${API_URL}${url}`,
    headers: sendHeaders,
    ...data
  }).then(response => response);
};

export default Api;
