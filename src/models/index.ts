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
  restaurant_id: string,
  restaurant_name: string,
  restaurant_distance: string,
  restaurant_open: string,
  restaurant_rating: string,
  restaurant_review_count: string,
  restaurant_favourite: string,
  restaurant_address: string,
  restaurant_latitude: string,
  restaurant_longitude: string,
  restaurant_image: any,
  restaurant_city: string,
  restaurant_cuisines: string,
  restaurant_slug: string,
  restaurant_time_zone: string,
  restaurant_message: string,
  restaurant_time: any

}
interface RestaurantsParams {
  city_id?: number,
  filter?: number,
  keyword?: number,
  user_latitude?: number,
  user_longitude?: number,
  user_id?: number,
  page_index?: number,
  num_records?: number
}
interface Page {
  content: string,
  title: string
};
interface FavoriteParams {
  restaurant_id?: any
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
  FavoriteParams as IFavoriteParams
}
