import { ActionType, createStandardAction } from 'typesafe-actions';
import { CHECKOUT_PARAMS, LIST_ORDERS, SELECTED_ORDER, SELECTED_ORDER_DETAILS, SELECTED_ORDER_ITEM } from '../constants/actionTypes';
import { ICheckoutParams, IOrderResponse, ICartResponse, ICartTotal } from '@models';

export const orderAction = {
    checkoutParams: createStandardAction(CHECKOUT_PARAMS)<ICheckoutParams>(),
    orderList: createStandardAction(LIST_ORDERS)<IOrderResponse[]>(),
    selectedOrder: createStandardAction(SELECTED_ORDER)<IOrderResponse>(),
    selectedOrderItem: createStandardAction(SELECTED_ORDER_ITEM)<ICartResponse[]>(),
    selectedOrderDetail: createStandardAction(SELECTED_ORDER_DETAILS)<ICartTotal>(),
}
export type OrderActions = ActionType<typeof orderAction>
export type OrderState = Readonly<{
    checkoutParams: ICheckoutParams,
    orders: IOrderResponse[],
    selectedOrder: IOrderResponse,
    selectedOrderItem: ICartResponse[],
    selectedOrderDetail: ICartTotal
}>
