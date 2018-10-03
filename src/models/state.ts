interface LoginState {
    user_name?: string,
    user_password?: string,
    isLoading?: boolean
}
interface RegisterState {
    user_profile: any,
    user_name: string,
    mobile_number: string,
    user_email: string,
    user_password: string,
    user_cnf_password: string,
    device_token: string,
    device_type: string
    '@@err': boolean,
    otp: string,
    photo: any,
    isLoading: boolean,
    reset_key: string,
    screen: string
}
interface ChangePasswordState {
    old_password: string,
    cnf_password: string,
    new_password: string,
    isLoading: boolean
}

interface ResetPasswordState {
    new_password: string,
    cnf_password: string,
    mobile_number: string,
    reset_key: string,
    isLoading: boolean
}

interface ForgotPasswordState {
    mobile_number: string,
    isLoading: boolean
}
interface AddCardState {
    name: string,
    cardNumber: string,
    expiryDate: string,
    cvv: string,
    isLoading: boolean
}
export {
    LoginState as ILoginState,
    RegisterState as IRegisterState,
    ChangePasswordState as IChangePasswordState,
    ResetPasswordState as IResetPasswordState,
    ForgotPasswordState as IForgotPasswordState,
    AddCardState as IAddCardState
}