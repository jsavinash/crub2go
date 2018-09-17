interface ItemVariationParams {
    item_id: any
}


interface AddToCardParams {
    restaurant_id?: any,
    item_variation?: any,
    menu_id?: any,
    cat_id?: any,
    item_id?: any,
    item_quantity?: any,
    item_price?: any,
    item_total_price?: any,
    item_special_instruction?: any,
    item_cart_id?: any
}
interface CheckoutParams {
    cart_grand_total?: string,
    pickup_time?: string,
    vehicle_color?: string,
    vehicle_type?: string,
    order_note?: string,
    card_id?: string,
    user_stripe_id?: string,
    promo_code?: string,
    time12?: string,
    isError?: boolean,
    error?: string,
    isCheckoutSheet?: boolean, 
    isCheckoutSubmit?: boolean
}
interface TimeCheckParams {
    pickup_time: string,
    restaurant_id: string
}
export {
    ItemVariationParams as IItemVariationParams,
    AddToCardParams as IAddToCardParams,
    CheckoutParams as ICheckoutParams,
    TimeCheckParams as ITimeCheckParams
}