import { PaymentSuccess } from './container';
import { connect } from 'react-redux'
import { orderAction, cartAction } from '@state_action';
import { RootState } from '../../reducers/RootReducer';
const mapDispatchToProps = {
    checkoutParamsAction: orderAction['checkoutParams'],
    cartTotalAction: cartAction['cartTotal'],
    viewCartAction:cartAction['viewCart']
}
const mapStateToProps = (state: RootState) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(PaymentSuccess)



