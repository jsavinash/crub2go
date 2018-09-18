import { combineReducers } from 'redux'
import { getType } from 'typesafe-actions'
import { LoginActions, LoginState, loginAction } from '../state_action'
import { ILogin } from '@models';
export const LoginReducer = combineReducers<LoginState, LoginActions>({
    loginParams: (state: ILogin = {}, action) => {
        switch (action.type) {
            case getType(loginAction.loginParamsAction):
                return action['payload'];
            default:
                return state
        }
    }
})




