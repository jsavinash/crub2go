
import RestApiConfig from './restApiConfig'

const listCities = () => RestApiConfig.get('get_all_city_list');

export const CitiesRestService = {
    listCities
}

export type CitiesRestServiceType = typeof CitiesRestService
