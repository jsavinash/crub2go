import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';
import { CustomerReducer as customer } from './customer';
import { CustomNavigatorReducer as screen } from './customNavigation';
import { DealsReducer as deals } from './deals';
import { CitiesReducer as cities } from './cities';
import { RestaurantReducer as restaurants } from './restaurants';
import { StaticPageReducer as page } from './static-pages';
import { FAQReducer as faq } from './faq';
import { CardsReducer as cards } from './card';
import { CartReducer as cart } from './cart';
import { OrderReducer as order } from './order';
import { CollectReducer as collect } from './collect';
import { reducer as network } from 'react-native-offline';
import { NavigationReducer as navReducer } from './navigation';
/* ------------- Assemble The Reducers ------------- */
const rootReducer = combineReducers({
  nav: navReducer,
  customer,
  network,
  screen,
  deals,
  cities,
  cards,
  restaurants,
  page,
  faq,
  cart,
  order,
  collect
})
export type RootState = StateType<typeof rootReducer>
export default rootReducer
