import { AppEntry } from './container';
import { connect } from 'react-redux'
import { custAction, cartAction, dealAction } from '@state_action';
import { RootState } from '../../reducers/RootReducer';
const mapDispatchToProps = {
    customerCreate: custAction['createCustomer'],
    cartAction: cartAction['viewCart'],
    cartTotalAction: cartAction['cartTotal'],
    dealAction: dealAction['listDeals'],
}
const mapStateToProps = (state: RootState) => ({
    customer: state['customer']['customer']
})

export default connect(mapStateToProps, mapDispatchToProps)(AppEntry)


