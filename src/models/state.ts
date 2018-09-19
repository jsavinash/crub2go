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
    reset_key: string
}
export {
    LoginState as ILoginState,
    RegisterState as IRegisterState
}