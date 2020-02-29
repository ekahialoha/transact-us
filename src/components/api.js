import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL;

export default axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accepts': 'application/json'
  }
});