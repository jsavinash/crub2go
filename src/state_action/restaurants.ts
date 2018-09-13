import { ActionType, createStandardAction } from 'typesafe-actions'
import {
    IRestaurants,
    IRestaurantsParams,
    ICategories,
    IMenuList,
    IItem,
    IItemListResponse,
    ITotalPrice
} from '@models';
import {
    LIST_RESTAURANTS,
    LIST_FAV_RESTAURANTS,
    RESTAURANTS_PARAMS,
    SELECTED_RESTAURANTS,
    LIST_CATEGORIES,
    LIST_MENULIST,
    SELECTED_CATEGORY,
    SELECTED_MENU,
    SELECTED_ITEM,
    SELECTED_ITEM_DETAILS,
    TOTAL_PRICE
} from '../constants/actionTypes'

export const restaurantsAction = {
    listRestaurant: createStandardAction(LIST_RESTAURANTS)<IRestaurants[]>(),
    listFavRestaurant: createStandardAction(LIST_FAV_RESTAURANTS)<IRestaurants[]>(),
    restaurantParamsValue: createStandardAction(RESTAURANTS_PARAMS)<IRestaurantsParams>(),
    selectedRestaurantValue: createStandardAction(SELECTED_RESTAURANTS)<IRestaurants>(),
    listcategories: createStandardAction(LIST_CATEGORIES)<ICategories[]>(),
    listMenuList: createStandardAction(LIST_MENULIST)<IMenuList[]>(),
    selectedCategory: createStandardAction(SELECTED_CATEGORY)<ICategories>(),
    selectedMenu: createStandardAction(SELECTED_MENU)<IMenuList[]>(),
    selectedItem: createStandardAction(SELECTED_ITEM)<IItem>(),
    selectedItemDetail: createStandardAction(SELECTED_ITEM_DETAILS)<IItemListResponse[]>(),
    totalPrice: createStandardAction(TOTAL_PRICE)<ITotalPrice>(),
}

export type RestaurantsActions = ActionType<typeof restaurantsAction>

export type RestaurantsState = Readonly<{
    restaurants: IRestaurants[],
    favRestaurants: IRestaurants[],
    restaurantParamsValue: IRestaurantsParams,
    selectedRestaurant: IRestaurants,
    categories: ICategories[]
    menuList: IMenuList[]
    selectedCategory: ICategories,
    selectedMenu: IMenuList[],
    selectedItem: IItem,
    selectedItemDetail: IItemListResponse[],
    totalPrice: ITotalPrice
}>
