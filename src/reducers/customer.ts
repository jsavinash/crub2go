import { combineReducers } from 'redux'
import { getType } from 'typesafe-actions'
import { CustomerActions, CustomerState, custAction } from '../state_action'
import { ICustomer, IRegister } from '@models';
export const CustomerReducer = combineReducers<CustomerState, CustomerActions>({
    customer: (state: ICustomer = {}, action) => {
        switch (action.type) {
            case getType(custAction.createCustomer):
                return action['payload'];
            default:
                return state
        }

    },
    registerCustomer: (state: IRegister = {}, action) => {
        switch (action.type) {
            case getType(custAction.registerCustomer):
                return action['payload'];
            default:
                return state
        }
    }
})

