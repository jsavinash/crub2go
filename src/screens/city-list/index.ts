import { CityList } from './container';
import { connect } from 'react-redux'
import { RootState } from '../../reducers/RootReducer';
import { custAction, citiesAction } from '@state_action';
const mapDispatchToProps = {
    customerAction: custAction['createCustomer'],
    cityAction: citiesAction['listCites']
}
const mapStateToProps = (state: RootState) => ({
    cities: state['cities']['cities'],
    customer: state['customer']['customer']
})
export default connect(mapStateToProps, mapDispatchToProps)(CityList)


