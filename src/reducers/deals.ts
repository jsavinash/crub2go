import { combineReducers } from 'redux'
import { getType } from 'typesafe-actions'
import { DealsActions, DealsState, dealAction } from '../state_action'
import { IDeals } from '@models';
export const DealsReducer = combineReducers<DealsState, DealsActions>({
    deals: (state: IDeals[] = [], action) => {
        switch (action.type) {
            case getType(dealAction.listDeals):
                return action['payload'];
            default:
                return state
        }
    },
})

