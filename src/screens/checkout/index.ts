import { Checkout } from './container';
import { connect } from 'react-redux'
import { custAction } from '@state_action';
import { RootState } from '../../reducers/RootReducer';
const mapDispatchToProps = {
    customerCreate: custAction.createCustomer,
}
const mapStateToProps = (state: RootState) => ({
    customer: state['customer']['customer'],
    cart: state['cart']['cart'],
    cartTotal: state['cart']['cartTotal'],
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)


