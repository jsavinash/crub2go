import { Promo } from './promo';
import { connect } from 'react-redux';
import { RootState } from '@root_state';
const mapStateToProps = (state: RootState) => ({
    nav: state['nav'],
    checkoutParams: state['order']['checkoutParams'],
    restaurant_name: state['cart']['cartTotal']['restaurant_name']
})
export default connect(mapStateToProps)(Promo);


