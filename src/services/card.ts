
import RestApiConfig from './restApiConfig'

const listCard = (params: any) => RestApiConfig.post('customer_stripe_cards', params);

export const CardRestService = {
    listCard
}

export type CardRestServiceType = typeof CardRestService
