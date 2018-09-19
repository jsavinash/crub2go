import { combineReducers } from 'redux'
import { getType } from 'typesafe-actions'
import { CollectActions, CollectState, collectAction } from '../state_action'
import { ILoginState, IRegisterState, IChangePasswordState, IResetPasswordState, ResetPasswordDefault, ChangePasswordDefault, LoginStateDefault, RegisterStateDefault } from '@models';
export const CollectReducer = combineReducers<CollectState, CollectActions>({
    loginParams: (state: ILoginState = LoginStateDefault, action) => {
        switch (action.type) {
            case getType(collectAction.loginParamsAction):
                return action['payload'];
            default:
                return state
        }
    },
    registerParams: (state: IRegisterState = RegisterStateDefault, action) => {
        switch (action.type) {
            case getType(collectAction.registerParamsAction):
                return action['payload'];
            default:
                return state
        }
    },
    changePasswordParams: (state: IChangePasswordState = ChangePasswordDefault, action) => {
        switch (action.type) {
            case getType(collectAction.changePasswordParamsAction):
                return action['payload'];
            default:
                return state
        }
    },
    resetParams: (state: IResetPasswordState = ResetPasswordDefault, action) => {
        switch (action.type) {
            case getType(collectAction.resetParamsAction):
                return action['payload'];
            default:
                return state
        }
    },
})




