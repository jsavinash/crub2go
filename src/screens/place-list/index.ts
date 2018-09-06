import { PlaceList } from './container';
import { connect } from 'react-redux'
import { RootState } from '../../reducers/RootReducer';
import { citiesAction, restaurantsAction } from '@state_action';

const mapDispatchToProps = {
    listCites: citiesAction.listCites,
    listRestaurants: restaurantsAction.listRestaurant
}

const mapStateToProps = (state: RootState) => ({
    cities: state['cities']['cities'],
    restaurants: state['restaurants']['restaurants'],
    customer: state['customer']['customer']
})

export default connect(mapStateToProps, mapDispatchToProps)(PlaceList)


