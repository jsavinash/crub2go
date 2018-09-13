
import RestApiConfig from './restApiConfig';

const listRestaurant = (params: any, token?: any) => RestApiConfig.post('restaurants_list', params, { headers: { 'AUTHTOKEN': token } });
const markFavoriteRestaurant = (params: any, token: any) => RestApiConfig.post('make_favourite_restaurant', params, { headers: { 'AUTHTOKEN': token } });
const listFavoriteRestaurant = (params: any, token: any) => RestApiConfig.post('favourite_restaurant_list', params, { headers: { 'AUTHTOKEN': token } });
const listMenuRestaurant = (params: any) => RestApiConfig.post('get_menu_list', params);
const listItemDetail = (params: any) => RestApiConfig.post('get_item_variation', params);

export const RestaurantRestService = {
    listRestaurant,
    markFavoriteRestaurant,
    listFavoriteRestaurant,
    listMenuRestaurant,
    listItemDetail
}
export type RestaurantRestServiceType = typeof RestaurantRestService;
