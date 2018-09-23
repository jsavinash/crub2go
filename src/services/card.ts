
import RestApiConfig from './restApiConfig'

const listCard = (params: any, token: any) => RestApiConfig.post('customer_stripe_cards', params, { headers: { 'AUTHTOKEN': token } });
const addCard = (params: any, token: any) => RestApiConfig.post('save_card', params, { headers: { 'AUTHTOKEN': token } });
const removeCard = (params: any, token: any) => RestApiConfig.post('remove_card_from_stripe', params, { headers: { 'AUTHTOKEN': token } });
export const CardRestService = {
    listCard,
    addCard,
    removeCard
}

export type CardRestServiceType = typeof CardRestService
