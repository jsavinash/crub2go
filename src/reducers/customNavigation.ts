import { combineReducers } from 'redux'
import { getType } from 'typesafe-actions'
import { navAction, NavigationActions, NavigationState } from '../state_action';

export const CustomNavigatorReducer = combineReducers<NavigationState, NavigationActions>({
    screen: (state = '', action) => {
        switch (action.type) {
            case getType(navAction.createScreen):
                return action['payload'];
            default:
                return state
        }
    },
})
