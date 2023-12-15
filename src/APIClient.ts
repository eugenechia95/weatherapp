import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_KOL_DOMAIN_SERVICE,
  timeout: 120000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default apiClient
