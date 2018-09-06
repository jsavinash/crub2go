import { combineReducers } from 'redux'
import { getType } from 'typesafe-actions'
import { UserActions, UserState, actions } from '../state_action'

export const UserReducer = combineReducers<UserState, UserActions>({
  users: (state = [], action) => {
    switch (action.type) {
      case getType(actions.listUser):
        return state
      case getType(actions.updateUser):
        return state
      case getType(actions.createUser):
        return state
      case getType(actions.deleteUser):
        return state
      default:
        return state
    }
  },
})
