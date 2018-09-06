import { ActionType, createStandardAction } from 'typesafe-actions'
import { IUser } from '@models'
import { LIST, CREATE, UPDATE, DELETE } from '../constants/actionTypes'

export const actions = {
  listUser: createStandardAction(LIST)<IUser[]>(),
  createUser: createStandardAction(CREATE)<IUser>(),
  updateUser: createStandardAction(UPDATE)<IUser>(),
  deleteUser: createStandardAction(DELETE)<string>(),
}

export type UserActions = ActionType<typeof actions>

export type UserState = Readonly<{ users: IUser[] }>
