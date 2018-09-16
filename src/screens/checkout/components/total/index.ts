import { Total } from './total';
import { connect } from 'react-redux';
import { RootState } from '@root_state';
const mapStateToProps = (state: RootState) => ({
    nav: state['nav'],
    checkoutParams: state['order']['checkoutParams'],
    cartTotal: state['cart']['cartTotal']
})
export default connect(mapStateToProps)(Total);


