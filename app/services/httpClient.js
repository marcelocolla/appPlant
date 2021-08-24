import axios from 'axios'
import { API_BASE_URL } from '../constants/services'

const httpClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Authorization',
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  },
})

export default httpClient
