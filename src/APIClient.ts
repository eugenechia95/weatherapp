import axios from 'axios'

const getAuthorization = () => {
  const token = localStorage.getItem('user-token')

  return token ? { Authorization: `Bearer ${token}` } : {}
}

const UNAUTHORIZED = 401
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_KOL_DOMAIN_SERVICE,
  timeout: 120000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...getAuthorization(),
  },
})

export default apiClient
