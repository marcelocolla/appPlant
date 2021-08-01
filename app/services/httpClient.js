import axios from 'axios'
import { API_BASE_URL } from '../constants/services'

const httpClient = axios.create({
  baseURL: API_BASE_URL,
})

export default httpClient
