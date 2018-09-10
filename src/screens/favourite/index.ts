import { Favourite } from './container';
import { connect } from 'react-redux'
import { RootState } from '../../reducers/RootReducer';
import { restaurantsAction } from '@state_action';

const mapDispatchToProps = {
    listFavRestaurant: restaurantsAction.listFavRestaurant
}

const mapStateToProps = (state: RootState) => ({
    favRestaurants: state['restaurants']['favRestaurants']
})

export default connect(mapStateToProps, mapDispatchToProps)(Favourite)


