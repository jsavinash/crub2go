import { Total } from './total';
import { connect } from 'react-redux';
import { orderAction } from '@state_action';
import { RootState } from '@root_state';
const mapDispatchToProps = {
    checkoutParamsAction: orderAction['checkoutParams']
}
const mapStateToProps = (state: RootState) => ({
    nav: state['nav'],
    checkoutParams: state['order']['checkoutParams'],
    cartTotal: state['cart']['cartTotal']
})
export default connect(mapStateToProps, mapDispatchToProps)(Total);


