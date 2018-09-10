import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';
import { CustomerReducer as customer } from './customer';
import { CustomNavigatorReducer as screen } from './customNavigation';
import { DealsReducer as deals } from './deals';
import { CitiesReducer as cities } from './cities';
import { RestaurantReducer as restaurants } from './restaurants';
import { StaticPageReducer as page } from './static-pages';
import { FAQReducer as faq } from './faq';
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
  restaurants,
  page,
  faq
})
export type RootState = StateType<typeof rootReducer>
export default rootReducer
