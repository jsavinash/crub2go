import { ActionType, createStandardAction } from 'typesafe-actions';
import { CHECKOUT_PARAMS, LIST_ORDERS, SELECTED_ORDER } from '../constants/actionTypes';
import { ICheckoutParams, IOrderResponse } from '@models';

export const orderAction = {
    checkoutParams: createStandardAction(CHECKOUT_PARAMS)<ICheckoutParams>(),
    orderList: createStandardAction(LIST_ORDERS)<IOrderResponse[]>(),
    selectedOrder: createStandardAction(SELECTED_ORDER)<IOrderResponse>(),
}
export type OrderActions = ActionType<typeof orderAction>
export type OrderState = Readonly<{
    checkoutParams: ICheckoutParams,
    orders: IOrderResponse[],
    selectedOrder: IOrderResponse
}>
