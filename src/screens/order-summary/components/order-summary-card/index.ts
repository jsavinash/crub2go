import { OrderSummaryCard } from './order-summary-card';
import { connect } from 'react-redux'
import { orderAction } from '@state_action';
import { RootState } from '@root_state';
const mapDispatchToProps = {
    orderListAction: orderAction['orderList'],
    selectedOrderAction: orderAction['selectedOrder']
}
const mapStateToProps = (state: RootState) => ({
    orders: state['order']['orders'],
    customer: state['customer']['customer']
})
export default connect(mapStateToProps, mapDispatchToProps)(OrderSummaryCard)

