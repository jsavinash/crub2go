import RestApiConfig from './restApiConfig'

const listUser = () => RestApiConfig.get('/user/list')
const createUser = (user: any) => RestApiConfig.post('/user/create', user)
const updateUser = (user: any) => RestApiConfig.post('/user/update', user)
const deleteUser = (id: any) => RestApiConfig.post('/user/delete', id)

export const UserRestService = {
  listUser,
  createUser,
  updateUser,
  deleteUser,
}

export type UserRestServiceType = typeof UserRestService
