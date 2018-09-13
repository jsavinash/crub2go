interface Login {
  user_name?: string,
  user_password?: string
}
interface Deals {
  restaurant_name?: string,
  coupon_code?: string,
  restaurant_image?: string,
  offer_id?: string,
  percentage?: string,
}
interface Cities {
  city_name: string,
  city_id: string
}
interface EditProfile {
  user_name?: any,
  user_profile?: any
}
interface Register {
  user_profile?: any,
  user_name?: string,
  mobile_number?: string,
  user_email?: string,
  user_password?: string,
  device_token?: string,
  device_type?: string
  '@@err'?: boolean,
  otp?: string,
  photo?: any
}
interface ChangePass {
  old_password: string,
  new_password: string,
}
interface Forgot {
  mobile_number: string,
  new_password: string,
  reset_key: string
}
interface Verification {
  mobile_number: string,
  user_email: string
}
interface Customer {
  user_name?: string
  user_mobile_number?: string,
  user_email?: string,
  user_id?: string,
  user_profile?: string,
  user_access_token?: string,
  user_city?: string,
  user_city_id?: string,
  user_stripe_id?: string
}

interface Restaurants {
  restaurant_id?: string,
  restaurant_name?: string,
  restaurant_distance?: string,
  restaurant_open?: string,
  restaurant_rating?: string,
  restaurant_review_count?: string,
  restaurant_favourite?: string,
  restaurant_address?: string,
  restaurant_latitude?: string,
  restaurant_longitude?: string,
  restaurant_image?: any,
  restaurant_city?: string,
  restaurant_cuisines?: string,
  restaurant_slug?: string,
  restaurant_time_zone?: string,
  restaurant_message?: string,
  restaurant_time?: any
}
interface RestaurantsParams {
  city_id?: any,
  filter?: any,
  keyword?: any,
  user_latitude?: any,
  user_longitude?: any,
  user_id?: any,
  page_index?: any,
  num_records?: any
}
interface LocationParams {
  user_longitude?: any,
  user_latitude?: any
}
interface Page {
  content: string,
  title: string
};
interface FavoriteParams {
  restaurant_id?: any
}
interface CustomerCard {
  user_stripe_id: string
}

interface Categories {
  cat_id?: any
  cat_menu_id?: any,
  cat_restaurant_id?: any,
  cat_name?: any
}

interface MenuParams {
  restaurant_id?: any
}
interface ItemAttribute {
  attribute_id: string,
  attribute_description: string,
  attribute_price: string,
  attribute_variation_id: string,
  attribute_item_id: string,
  attribute_selected: string,
  attribute_name: string,
}
interface ItemListResponse {
  variation_id: string,
  variation_description: string,
  variation_min_selection: string,
  variation_max_selection: string,
  variation_name: string,
  variation_item_id: string,
  attribute: ItemAttribute[]
}
interface MenuList {
  item_id: any,
  item_cat_id: any,
  item_name: any,
  item_discription: any,
  item_vegetarian: any,
  item_discounted_price: any,
  item_original_price: any,
  item_cat_name: any,
  item_image: any,
}
interface Item {
  item_cat_id?: string,
  item_cat_name?: string,
  item_discounted_price?: string,
  item_discription?: string,
  item_id?: string,
  item_image?: string,
  item_name?: string,
  item_original_price?: string,
  item_vegetarian?: string
}

interface TotalPrice {
  realPrice?: number,
  totalPrice?: number,
  quantity?: number,
  extraAmount?: any
}

export {
  Customer as ICustomer,
  Login as ILogin,
  Register as IRegister,
  Verification as IVerification,
  Forgot as IForgot,
  ChangePass as IChangePass,
  Deals as IDeals,
  Cities as ICities,
  RestaurantsParams as IRestaurantsParams,
  Restaurants as IRestaurants,
  Page as IPage,
  EditProfile as IEditProfile,
  FavoriteParams as IFavoriteParams,
  CustomerCard as ICustomerCard,
  LocationParams as ILocationParams,
  Categories as ICategories,
  MenuList as IMenuList,
  MenuParams as IMenuParams,
  ItemListResponse as IItemListResponse,
  Item as IItem,
  TotalPrice as ITotalPrice
}
