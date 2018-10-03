import { OrderCard } from './order-card';
import { connect } from 'react-redux'
import { orderAction } from '@state_action';
import { RootState } from '@root_state';
const mapDispatchToProps = {
    orderListAction: orderAction['orderList'],
    selectedOrderAction: orderAction['selectedOrder']
}
const mapStateToProps = (state: RootState) => ({
    orders: state['order']['orders'],
    customer: state['customer']['customer'],
    nav: state['nav']
})
export default connect(mapStateToProps, mapDispatchToProps)(OrderCard)

