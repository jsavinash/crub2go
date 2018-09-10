
import RestApiConfig from './restApiConfig';

const listRestaurant = (params: any) => RestApiConfig.post('restaurants_list', params);
const markFavoriteRestaurant = (params: any) => RestApiConfig.post('make_favourite_restaurant', params);
const listFavoriteRestaurant = (params: any) => RestApiConfig.post('favourite_restaurant_list', params);

export const RestaurantRestService = {
    listRestaurant,
    markFavoriteRestaurant,
    listFavoriteRestaurant
}
export type RestaurantRestServiceType = typeof RestaurantRestService;
