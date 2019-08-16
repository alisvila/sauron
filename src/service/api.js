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
  post: (url, body, callback) =>
    Axios.post(`${API_ROOT}${url}`, body).then(callback).catch(function(e){
      console.log(e)
      }),
  formData: (URL, blob) => {
    let data = new FormData()
  
    data.append('name', 'image')
    data.append('file', blob)
    console.log(data)
  
    let config = {
      header : {
        'Content-Type' : 'multipart/form-data'
      }
    }

    Axios.post(URL, data, config).then(response => {
      console.log('response', response)
    }).catch(error => {
      console.log('error', error)
    })
  }
};

const Auth = {
    current: () => 
        requests.get('/account/login'),
    login: (email, password, callback) =>
        requests.post('/account/login', `grant_type=password&username=${email}&password=${password}&client_id=ngAuthApp`, callback)
}

const ImageService = {
  send: (URL, blob) => {
    requests.formData(URL, blob)
  }
}

export default {
    Auth,
    ImageService
};