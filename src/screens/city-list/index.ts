import { CityList } from './container';
import { connect } from 'react-redux'
import { RootState } from '../../reducers/RootReducer';
import { citiesAction, restaurantsAction } from '@state_action';

const mapStateToProps = (state: RootState) => ({
    cities: state['cities']['cities']
})

export default connect(mapStateToProps)(CityList)


