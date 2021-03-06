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
interface OrderResponse {
    order_id?: string,
    order_pickup_time?: string,
    order_status?: string,
    restaurant_name?: string,
    order_total_amount_paid?: string,
    restaurant_id?: string,
    order_rating?: string,
    restaurant_image?: any,
    order_total_discount?: string,
    order_tax_amount?: string,
    order_total_amount?: string,
    restaurant_address?: string,
    restaurant_mobile_number?: string,
    restaurant_open?: string,
    restaurant_rating?: string,
    restaurant_review_count?: string,
    restaurant_favourite?: string,
    restaurant_latitude?: string,
    restaurant_longitude?: string,
    restaurant_city?: string,
    restaurant_message?: string,
    restaurant_city_slug?: string,
}
interface FAQResponse {
    title: string,
    content: string
}
export {
    CartResponse as ICartResponse,
    CartTotal as ICartTotal,
    OrderResponse as IOrderResponse,
    FAQResponse as IFAQResponse
}