import { combineReducers } from 'redux'
import { getType } from 'typesafe-actions'
import { CollectActions, CollectState, collectAction } from '../state_action'
import { ILoginParams, IRegisterParams, LoginStateDefault, RegisterStateDefault } from '@models';
export const CollectReducer = combineReducers<CollectState, CollectActions>({
    loginParams: (state: ILoginParams = LoginStateDefault, action) => {
        switch (action.type) {
            case getType(collectAction.loginParamsAction):
                return action['payload'];
            default:
                return state
        }
    },
    registerParams: (state: IRegisterParams = RegisterStateDefault, action) => {
        switch (action.type) {
            case getType(collectAction.registerParamsAction):
                return action['payload'];
            default:
                return state
        }
    },
})




