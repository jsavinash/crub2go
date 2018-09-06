import { ActionType, createStandardAction } from 'typesafe-actions'
import { IDeals } from '@models';
import { LIST_DEALS } from '../constants/actionTypes'

export const dealAction = {
    listDeals: createStandardAction(LIST_DEALS)<IDeals[]>(),
}

export type DealsActions = ActionType<typeof dealAction>

export type DealsState = Readonly<{
    deals: IDeals[]
}>
