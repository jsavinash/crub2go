import { Total } from './total';
import { connect } from 'react-redux';
import { orderAction } from '@state_action';
import { RootState } from '@root_state';
const mapDispatchToProps = {
    checkoutParamsAction: orderAction['checkoutParams']
}
const mapStateToProps = (state: RootState) => ({
    selectedOrderDetail: state['order']['selectedOrderDetail']
})
export default connect(mapStateToProps, mapDispatchToProps)(Total);


