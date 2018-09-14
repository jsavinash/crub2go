import { ItemDetail } from './container';
import { connect } from 'react-redux'
import { restaurantsAction } from '@state_action';
import { RootState } from '../../reducers/RootReducer';
const mapDispatchToProps = {
    selectedItemDetailAction: restaurantsAction['selectedItemDetail'],
    totalPriceAction: restaurantsAction['totalPrice'],
    seletedAttributeAction: restaurantsAction['selectedAttribute']
}
const mapStateToProps = (state: RootState) => ({
    customer: state['customer']['customer'],
    selectedItem: state['restaurants']['selectedItem'],
    selectedItemDetail: state['restaurants']['selectedItemDetail'],
    totalPrice: state['restaurants']['totalPrice'],
    selectedRestaurant: state['restaurants']['selectedRestaurant'],
    selectedMenu: state['restaurants']['selectedMenu'],
    selectedCategory: state['restaurants']['selectedCategory'],
    selectedAttribute: state['restaurants']['selectedAttribute']
})
export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail)


