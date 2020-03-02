import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL;
const sessionKey = localStorage.getItem('session_key');

const headers = {
  'Content-Type': 'application/json',
  'Accepts': 'application/json',

}
if (sessionKey !== null) {
  headers['Authorization'] = `Bearer ${sessionKey}`;
}

const apiConnection = axios.create({
  baseURL: API_URL,
  headers: headers
});

export default apiConnection;
