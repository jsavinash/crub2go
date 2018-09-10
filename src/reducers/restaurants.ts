import { combineReducers } from 'redux'
import { getType } from 'typesafe-actions'
import { RestaurantsActions, RestaurantsState, restaurantsAction } from '../state_action'
import { IRestaurants } from '@models';
export const RestaurantReducer = combineReducers<RestaurantsState, RestaurantsActions>({
    restaurants: (state: IRestaurants[] = [], action) => {
        switch (action.type) {
            case getType(restaurantsAction.listRestaurant):
                return action['payload'];
            default:
                return state
        }
    },
    favRestaurants: (state: IRestaurants[] = [], action) => {
        switch (action.type) {
            case getType(restaurantsAction.listFavRestaurant):
                return action['payload'];
            default:
                return state
        }
    }
})

