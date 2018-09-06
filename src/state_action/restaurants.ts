import { ActionType, createStandardAction } from 'typesafe-actions'
import { IRestaurants } from '@models';
import { LIST_RESTAURANTS } from '../constants/actionTypes'

export const restaurantsAction = {
    listRestaurant: createStandardAction(LIST_RESTAURANTS)<IRestaurants[]>(),
}

export type RestaurantsActions = ActionType<typeof restaurantsAction>

export type RestaurantsState = Readonly<{
    restaurants: IRestaurants[]
}>
