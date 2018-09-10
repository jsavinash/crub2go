import RestApiConfig from './restApiConfig'

const customerLogin = (customer: any) => RestApiConfig.post('customer_login', customer);
const customerRegister = (customer: any) => RestApiConfig.post('customer_signup', customer);
const customerVerification = (customer: any) => RestApiConfig.post('check_unique_user', customer);
const customerForgot = (customer: any) => RestApiConfig.post('forgot_password', customer);
const customerPassword = (customer: any) => RestApiConfig.post('reset_password', customer);
const customerPasswordChange = (customer: any) => RestApiConfig.post('change_password', customer);
const customerProfileEdit = (customer: any) => RestApiConfig.post('edit_profile', customer);

export const CustomerRestService = {
    customerLogin,
    customerRegister,
    customerVerification,
    customerForgot,
    customerPassword,
    customerPasswordChange,
    customerProfileEdit
}

export type CustomerRestServiceType = typeof CustomerRestService
