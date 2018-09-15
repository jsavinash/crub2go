interface CartResponse {
    cat_id?: string,
    item_cart_id?: string,
    item_id?: string,
    item_image?: string,
    item_name?: string,
    item_price?: string,
    item_quantity?: string,
    item_special_instruction?: string,
    item_status?: string,
    item_sub_total?: string,
    item_variation_total?: string,
    menu_id?: string,
    restaurant_id?: string,
    restaurant_name?: string,
    variation?: any
}
interface CartTotal {
    can_place_order?: string,
    cart_discount?: string,
    cart_grand_total?: string,
    cart_sub_total?: string,
    cart_tax?: string,
    cart_tax_percentage?: string,
    cart_total?: string,
    customer_mobile_number?: string,
    customer_name?: string,
    restaurant_id?: string,
    restaurant_name?: string,
    restaurant_state_id?: string
}
export {
    CartResponse as ICartResponse,
    CartTotal as ICartTotal
}