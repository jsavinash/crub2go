import { combineReducers } from 'redux'
import { getType } from 'typesafe-actions'
import { OrderActions, orderAction, OrderState } from '../state_action'
import { ICheckoutParams } from '@models';
export const OrderReducer = combineReducers<OrderState, OrderActions>({
    checkoutParams: (state: ICheckoutParams = {}, action) => {
        switch (action.type) {
            case getType(orderAction.checkoutParams):
                return action['payload'];
            default:
                return state
        }
    }
})




