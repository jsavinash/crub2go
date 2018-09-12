import RestApiConfig from './restApiConfig'

const customerLogin = (customer: any) => RestApiConfig.post('customer_login', customer);
const customerRegister = (customer: any) => RestApiConfig.post('customer_signup', customer);
const customerVerification = (customer: any) => RestApiConfig.post('check_unique_user', customer);
const customerForgot = (customer: any) => RestApiConfig.post('forgot_password', customer);
const customerPassword = (customer: any) => RestApiConfig.post('reset_password', customer);
const customerPasswordChange = (customer: any, token: any) => RestApiConfig.post('change_password', customer, { headers: { 'AUTHTOKEN': token } });
const customerProfileEdit = (customer: any, token: any) => RestApiConfig.post('edit_profile', customer, { headers: { 'AUTHTOKEN': token } });
const customerUpdateLocation = (customer: any, token: any) => RestApiConfig.post('update_user_location', customer, { headers: { 'AUTHTOKEN': token } });
export const CustomerRestService = {
    customerLogin,
    customerRegister,
    customerVerification,
    customerForgot,
    customerPassword,
    customerPasswordChange,
    customerProfileEdit,
    customerUpdateLocation
}

export type CustomerRestServiceType = typeof CustomerRestService
