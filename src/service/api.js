import Axios from "axios";

const API_ROOT = 'http://test-service.sirang.sabinarya.net/api';

const encode = encodeURIComponent;
const responseBody = res => res.body;

let token = null;
const tokenPlugin = req => {
  if (token) {
    req.set('authorization', `Token ${token}`);
  }
}

const requests = {
  del: url =>
    Axios.del(`${API_ROOT}${url}`).then(responseBody),
  get: url =>
    Axios.get(`${API_ROOT}${url}`).then(responseBody),
  put: (url, body) =>
    Axios.put(`${API_ROOT}${url}`, body).then(responseBody),
  post: (url, body) =>
    Axios.post(`${API_ROOT}${url}`, body).then(responseBody)
};

const Auth = {
    current: () => 
        requests.get('/account/login'),
    login: (email, password) =>
        requests.post('/account/login', `grant_type=password&username=${email}&password=${password}&client_id=ngAuthApp`)
}

export default {
    Auth
};