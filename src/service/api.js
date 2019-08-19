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
  get: (url, callback) => {
    let headers = {
      baseURL: "http://192.168.200.96:8000",
      url: '/known/',
      headers : {
        'Content-Type': 'application/json',
        'Accept': "*/*",
        'Authorization': "Basic " + btoa("musketeer" + ':' + "123456")
      }
    }
    Axios.get(`${url}` ,headers).then(src => callback(src)).catch(function(e){
      console.log(e)
  })
  },
  put: (url, body) =>
    Axios.put(`${API_ROOT}${url}`, body).then(responseBody),
  post: (url, body, headers, callback) =>
    Axios.post(`${API_ROOT}${url}`, body, {headers: headers}).then(callback).catch(function(e){
      console.log(e)
      }),
  formData: (URL, blob) => {
    let data = new FormData()
    // data.append('name', 'image')
    data.append('file', blob)
    console.log(data)
  
    let config = {
      headers : {
        'Content-Type' : 'multipart/form-data',
        'Authorization': 'Basic ' + btoa("musketeer" + ':' + "123456")
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
    login: (username, password, callback) => {
      console.log(btoa(username + ':' + password))
      // requests.post('/account/login', `grant_type=password&username=${email}&password=${password}&client_id=ngAuthApp`, callback)
      requests.post('/account/login', {}, {'Authorization': 'Basic ' + btoa(username + ':' + password) }, callback)
    }
  }

const ImageService = {
  send: (URL, blob) => {
    requests.formData(URL, blob)
  }
}

const Kharesh = {
  check: (string) => {
    requests.post(URL, string)
  },
  get: (url, callback) => {
    requests.get(url, callback)
  }
}

export default {
    Auth,
    ImageService,
    Kharesh
};