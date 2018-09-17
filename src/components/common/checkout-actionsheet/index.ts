import { CheckoutActionSheet } from './checkout-actionsheet';
import { connect } from 'react-redux';
import { RootState } from '@root_state';
import { orderAction } from '@state_action';
const mapDispatchToProps = {
    checkoutParamsAction: orderAction['checkoutParams']
}
const mapStateToProps = (state: RootState) => ({
    cart: state['cart']['cart'],
    cartTotal: state['cart']['cartTotal'],
    checkoutParams: state['order']['checkoutParams']
})
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutActionSheet)



