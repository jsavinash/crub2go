const LoginStateDefault = {
    user_name: "",
    user_password: "",
    isLoading: false
}
const IResponseDefault = {
    cat_id: "",
    item_cart_id: "",
    item_id: "",
    item_image: "",
    item_name: "",
    item_price: "",
    item_quantity: "",
    item_special_instruction: "",
    item_status: "",
    item_sub_total: "",
    item_variation_total: "",
    menu_id: "",
    restaurant_id: "",
    restaurant_name: ""
}

const CartTotalDefault = {
    can_place_order: '',
    cart_discount: '',
    cart_grand_total: '',
    cart_sub_total: '',
    cart_tax: '',
    cart_tax_percentage: '',
    cart_total: '',
    customer_mobile_number: '',
    customer_name: '',
    restaurant_id: '',
    restaurant_name: '',
    restaurant_state_id: '',
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
const ForgotPasswordDefault = {
    mobile_number: '',
    isLoading: false
}

const AddCardDefault = {
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    isLoading: false
}

export {
    LoginStateDefault,
    RegisterStateDefault,
    ChangePasswordDefault,
    ResetPasswordDefault,
    IResponseDefault,
    CartTotalDefault,
    ForgotPasswordDefault,
    AddCardDefault
}