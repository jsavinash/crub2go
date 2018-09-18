import { combineReducers } from 'redux'
import { getType } from 'typesafe-actions'
import { OrderActions, orderAction, OrderState } from '../state_action'
import { ICheckoutParams, IOrderResponse, ICartTotal, ICartResponse } from '@models';
export const OrderReducer = combineReducers<OrderState, OrderActions>({
    checkoutParams: (state: ICheckoutParams = {}, action) => {
        switch (action.type) {
            case getType(orderAction.checkoutParams):
                return action['payload'];
            default:
                return state
        }
    },
    orders: (state: IOrderResponse[] = [], action) => {
        switch (action.type) {
            case getType(orderAction.orderList):
                return action['payload'];
            default:
                return state
        }
    },
    selectedOrder: (state: IOrderResponse = {}, action) => {
        switch (action.type) {
            case getType(orderAction.selectedOrder):
                return action['payload'];
            default:
                return state
        }
    },
    selectedOrderItem: (state: ICartResponse[] = [], action) => {
        switch (action.type) {
            case getType(orderAction.selectedOrderItem):
                return action['payload'];
            default:
                return state
        }
    },
    selectedOrderDetail: (state: ICartTotal = {}, action) => {
        switch (action.type) {
            case getType(orderAction.selectedOrderDetail):
                return action['payload'];
            default:
                return state
        }
    }
})

