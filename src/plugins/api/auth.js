// eslint-disable-next-line import/extensions
import api from './index'

class Auth {
  login(credentials) {
    return api.post('/login', credentials)
      .then(response => response.data)
      .catch(error => {
        if (error.response && error.response.status === 401) {
          throw new Error('Invalid credentials.')
        }
        throw error
      })
  }

  register(credentials) {
    return api.post('/register', credentials)
      .then(response => response.data)
      .catch(error => {
        if (error.response && error.response.status === 401) {
          throw new Error('Invalid credentials.')
        }
        throw error
      })
  }
  logout() {
    return api.post('/logout')
      .then(response => response.data)
      .catch(error => {
        throw error
      })
  }

  getUserProfile() {
    return api.get('/user/profile')
      .then(response => response.data)
      .catch(error => {
        throw error
      })
  }
}

const auth = new Auth()

export default auth
