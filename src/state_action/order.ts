import { ActionType, createStandardAction } from 'typesafe-actions';
import { CHECKOUT_PARAMS } from '../constants/actionTypes';
import { ICheckoutParams } from '@models';

export const orderAction = {
    checkoutParams: createStandardAction(CHECKOUT_PARAMS)<ICheckoutParams>(),
}
export type OrderActions = ActionType<typeof orderAction>

export type OrderState = Readonly<{
    checkoutParams: ICheckoutParams
}>
