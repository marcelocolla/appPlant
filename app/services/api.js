import httpClient from './httpClient'

export const Auth = {
  register: (first, last, email, password) =>
    httpClient.post('api/auth/register', { name: { first, last }, email, password }),
  signIn: (email, password) => httpClient.post('api/auth/login', { email, password }),
}

export const Plants = {
  getAll: () => httpClient.get('api/plant/getAll'),
  getById: (plant) => httpClient.get(`api/plant/info?plantId=${plant}`),
  getByName: (plant) => httpClient.get(`api/plant/getByName?plantName=${plant}`),
}

export const Users = {
  self: () => httpClient.get('api/user/info'),
  getById: (id) => httpClient.get(`api/user/getById?userId=${id}`),
  getByName: (name) => httpClient.get(`api/user/getByName?userName=${name}`),
  getPlants: (id) => httpClient.get(`api/user/plants?userId=${id}`),
  addPlant: (id) => httpClient.put(`api/user/addPlant?plantId=${id}`),
  removePlant: (id) => httpClient.delete(`api/user/deletePlant?plantId=${id}`),
}
