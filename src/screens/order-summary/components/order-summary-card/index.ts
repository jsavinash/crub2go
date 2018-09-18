import { OrderSummaryCard } from './order-summary-card';
import { connect } from 'react-redux'
import { orderAction } from '@state_action';
import { RootState } from '@root_state';
const mapDispatchToProps = {
    selectedOrderItemAction: orderAction['selectedOrderItem'],
    selectedOrderDetailAction: orderAction['selectedOrderDetail']
}
const mapStateToProps = (state: RootState) => ({
    token: state['customer']['customer']['user_access_token'],
    selectedOrder: state['order']['selectedOrder'],
    selectedOrderItem: state['order']['selectedOrderItem'],
    selectedOrderDetail: state['order']['selectedOrderDetail']
})
export default connect(mapStateToProps, mapDispatchToProps)(OrderSummaryCard)

