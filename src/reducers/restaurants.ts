import { combineReducers } from 'redux'
import { getType } from 'typesafe-actions'
import {
    RestaurantsActions,
    RestaurantsState,
    restaurantsAction
} from '../state_action'
import {
    IRestaurants,
    IRestaurantsParams,
    IItem,
    ICategories,
    IMenuList,
    IAttribute,
    ITotalPrice,
    IItemListResponse
} from '@models';
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
    },
    restaurantParamsValue: (state: IRestaurantsParams = {}, action) => {
        switch (action.type) {
            case getType(restaurantsAction.restaurantParamsValue):
                return action['payload'];
            default:
                return state
        }
    },
    selectedRestaurant: (state: IRestaurants = {}, action) => {
        switch (action.type) {
            case getType(restaurantsAction.selectedRestaurantValue):
                return action['payload'];
            default:
                return state
        }
    },
    categories: (state: ICategories[] = [], action) => {
        switch (action.type) {
            case getType(restaurantsAction.listcategories):
                return action['payload'];
            default:
                return state
        }
    },
    menuList: (state: IMenuList[] = [], action) => {
        switch (action.type) {
            case getType(restaurantsAction.listMenuList):
                return action['payload'];
            default:
                return state
        }
    },
    selectedCategory: (state: ICategories = {}, action) => {
        switch (action.type) {
            case getType(restaurantsAction.selectedCategory):
                return action['payload'];
            default:
                return state
        }
    },
    selectedMenu: (state: IMenuList[] = [], action) => {
        switch (action.type) {
            case getType(restaurantsAction.selectedMenu):
                return action['payload'];
            default:
                return state
        }
    },
    selectedItem: (state: IItem = {}, action) => {
        switch (action.type) {
            case getType(restaurantsAction.selectedItem):
                return action['payload'];
            default:
                return state
        }
    },
    selectedItemDetail: (state: IItemListResponse[] = [], action) => {
        switch (action.type) {
            case getType(restaurantsAction.selectedItemDetail):
                return action['payload'];
            default:
                return state
        }
    },
    totalPrice: (state: ITotalPrice = {}, action) => {
        switch (action.type) {
            case getType(restaurantsAction.totalPrice):
                return action['payload'];
            default:
                return state
        }
    },
    selectedAttribute: (state: IAttribute[] = [], action) => {
        switch (action.type) {
            case getType(restaurantsAction.selectedAttribute):
                return action['payload'];
            default:
                return state
        }
    },
})

