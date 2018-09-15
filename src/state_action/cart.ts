import { ActionType, createStandardAction } from 'typesafe-actions';
import { VIEW_CART, VIEW_TOTAL } from '../constants/actionTypes';
import { ICartResponse, ICartTotal } from '@models';

export const cartAction = {
    viewCart: createStandardAction(VIEW_CART)<ICartResponse[]>(),
    cartTotal: createStandardAction(VIEW_TOTAL)<ICartTotal>(),
}
export type CartActions = ActionType<typeof cartAction>

export type CartState = Readonly<{
    cart: ICartResponse[],
    cartTotal: ICartTotal
}>
