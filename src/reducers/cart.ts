import { combineReducers } from 'redux'
import { getType } from 'typesafe-actions'
import { cartAction, CartActions, CartState } from '../state_action'
import { ICartResponse, ICartTotal } from '@models';
export const CartReducer = combineReducers<CartState, CartActions>({
    cart: (state: ICartResponse[] = [], action) => {
        switch (action.type) {
            case getType(cartAction.viewCart):
                return action['payload'];
            default:
                return state
        }
    },
    cartTotal: (state: ICartTotal = {}, action) => {
        switch (action.type) {
            case getType(cartAction.cartTotal):
                return action['payload'];
            default:
                return state
        }
    }
})




