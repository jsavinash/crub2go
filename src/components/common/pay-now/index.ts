import { PayNow } from './pay-now';
import { connect } from 'react-redux';
import { RootState } from '@root_state';
const mapStateToProps = (state: RootState) => ({
    cart: state['cart']['cart'],
    total: state['cart']['cartTotal']['cart_grand_total'],
    nav: state['nav'],
    checkoutParams: state['order']['checkoutParams'],
    token: state['customer']['customer']['user_access_token']
})

export default connect(mapStateToProps)(PayNow)


