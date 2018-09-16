import { PickUp } from './pickup';
import { connect } from 'react-redux';
import { orderAction } from '@state_action';
import { RootState } from '@root_state';
const mapDispatchToProps = {
    checkoutParamsAction: orderAction['checkoutParams']
}
const mapStateToProps = (state: RootState) => ({
    token: state['customer']['customer']['user_access_token'],
    resturantId: state['cart']['cartTotal']['restaurant_id'],
    checkoutParams: state['order']['checkoutParams']
})
export default connect(mapStateToProps, mapDispatchToProps)(PickUp);


