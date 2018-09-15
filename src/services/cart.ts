
import RestApiConfig from './restApiConfig'

const addToCart = (params: any, token: any) => RestApiConfig.post('add_to_cart', params, { headers: {
    'AUTHTOKEN': token } });
const viewCart = (token: any) => RestApiConfig.post('view_cart', {}, { headers: { 'AUTHTOKEN': token } });
const clearCart = (params: any, token: any) => RestApiConfig.post('clear_cart', params, { headers: { 'AUTHTOKEN': token } });

export const CartRestService = {
    addToCart,
    viewCart,
    clearCart
}

export type CartRestServiceType = typeof CartRestService
