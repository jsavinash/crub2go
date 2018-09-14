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

export {
    ItemVariationParams as IItemVariationParams,
    AddToCardParams as IAddToCardParams
}