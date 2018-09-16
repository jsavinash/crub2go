import { CheckoutActionSheet } from './checkout-actionsheet';
import { connect } from 'react-redux';
import { RootState } from '@root_state';
const mapStateToProps = (state: RootState) => ({
    cart: state['cart']['cart'],
    cartTotal: state['cart']['cartTotal'],
    nav: state['nav']
})
export default connect(mapStateToProps, null)(CheckoutActionSheet)


