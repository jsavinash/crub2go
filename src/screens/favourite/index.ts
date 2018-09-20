import { Favourite } from './container';
import { connect } from 'react-redux'
import { RootState } from '../../reducers/RootReducer';
import { citiesAction, restaurantsAction } from '@state_action';

const mapDispatchToProps = {
    listCites: citiesAction.listCites,
    listFavRestaurant: restaurantsAction.listFavRestaurant,
    restaurantParamsAction: restaurantsAction.restaurantParamsValue,
    selectedRestaurantAction: restaurantsAction.selectedRestaurantValue
}
const mapStateToProps = (state: RootState) => ({
    cities: state['cities']['cities'],
    favRestaurants: state['restaurants']['favRestaurants'],
    restaurantParamsValue: state['restaurants']['restaurantParamsValue'],
    selectedRestaurantValue: state['restaurants']['selectedRestaurant'],
    customer: state['customer']['customer']
})
export default connect(mapStateToProps, mapDispatchToProps)(Favourite)


