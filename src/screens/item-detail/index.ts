import { ItemDetail } from './container';
import { connect } from 'react-redux'
import { restaurantsAction } from '@state_action';
import { RootState } from '../../reducers/RootReducer';
const mapDispatchToProps = {
    selectedItemDetailAction: restaurantsAction['selectedItemDetail']
}
const mapStateToProps = (state: RootState) => ({
    customer: state['customer']['customer'],
    selectedItem: state['restaurants']['selectedItem'],
    selectedItemDetail: state['restaurants']['selectedItemDetail']
})
export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail)


