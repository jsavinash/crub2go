
import RestApiConfig from './restApiConfig'

const placeOrder = (params: any, token: any) => RestApiConfig.post('place_order', params, { headers: { 'AUTHTOKEN': token } });
const myOrder = (params: any, token: any) => RestApiConfig.post('my_orders', params, { headers: { 'AUTHTOKEN': token } });
const clearCart = (params: any, token: any) => RestApiConfig.post('get_order_details', params, { headers: { 'AUTHTOKEN': token } });
const cancelOrRefund = (params: any, token: any) => RestApiConfig.post('cancel_order_and_refund', params, { headers: { 'AUTHTOKEN': token } });
const repeatOrder = (params: any, token: any) => RestApiConfig.post('repeat_order', params, { headers: { 'AUTHTOKEN': token } });
const checkPickUpTime = (params: any, token: any) => RestApiConfig.post('check_pickup_time_available', params, { headers: { 'AUTHTOKEN': token } });

export const OrderRestService = {
    placeOrder,
    myOrder,
    clearCart,
    cancelOrRefund,
    repeatOrder,
    checkPickUpTime
}

export type OrderRestServiceType = typeof OrderRestService
