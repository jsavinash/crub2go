const LoginStateDefault = {
    user_name: "",
    user_password: "",
    isLoading: false
}

const RegisterStateDefault = {
    user_profile: {},
    user_name: "",
    mobile_number: "",
    user_email: "",
    user_password: "",
    user_cnf_password: "",
    device_token: "",
    device_type: "",
    '@@err': false,
    otp: "",
    photo: "",
    isLoading: false,
    reset_key: "",
    screen: ""
}
const ChangePasswordDefault = {
    old_password: "",
    cnf_password: "",
    new_password: "",
    isLoading: false
}
const ResetPasswordDefault = {
    new_password: '',
    cnf_password: '',
    mobile_number: '',
    reset_key: '',
    isLoading: false,
}
export {
    LoginStateDefault,
    RegisterStateDefault,
    ChangePasswordDefault,
    ResetPasswordDefault
}