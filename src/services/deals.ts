import RestApiConfig from './restApiConfig'

const listDeals = () => RestApiConfig.get('deal');

export const DealsRestService = {
    listDeals,
}

export type DealsRestServiceType = typeof DealsRestService
