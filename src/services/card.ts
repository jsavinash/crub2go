
import RestApiConfig from './restApiConfig'

const listCard = (params: any, token: any) => RestApiConfig.post('customer_stripe_cards', params, { headers: { 'AUTHTOKEN': token } });

export const CardRestService = {
    listCard
}

export type CardRestServiceType = typeof CardRestService
