import { ActionType, createStandardAction } from 'typesafe-actions'
import { ICustomer, IRegister } from '@models'
import { CREATE_CUSTOMER, REGISTER_CUSTOMER } from '../constants/actionTypes'

export const custAction = {
    createCustomer: createStandardAction(CREATE_CUSTOMER)<ICustomer>(),
    registerCustomer: createStandardAction(REGISTER_CUSTOMER)<IRegister>(),
}

export type CustomerActions = ActionType<typeof custAction>

export type CustomerState = Readonly<{
    customer: ICustomer
    registerCustomer: IRegister
}>
