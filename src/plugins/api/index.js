import axios from 'axios'

const api = axios.create({
  baseURL: '127.0.0.1:8000/api/',
})

// Thêm interceptor để thêm Authorization header và kiểm tra token trong localStorage
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
// eslint-disable-next-line promise/no-promise-in-callback
}, error => Promise.reject(error))

// Thêm các phương thức GET, POST, PUT, DELETE cho API
export default {
  get(endpoint) {
    return api.get(endpoint)
  },

  post(endpoint, payload) {
    return api.post(endpoint, payload)
  },

  put(endpoint, payload) {
    return api.put(endpoint, payload)
  },

  delete(endpoint) {
    return api.delete(endpoint)
  },
}
