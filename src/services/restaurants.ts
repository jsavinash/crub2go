
import RestApiConfig from './restApiConfig';

const listRestaurant = (params: any) => RestApiConfig.post('restaurants_list', params);
export const RestaurantRestService = {
    listRestaurant
}
export type RestaurantRestServiceType = typeof RestaurantRestService;
