import { DealCard } from './deal-card';
import { connect } from 'react-redux'
import { orderAction } from '@state_action';
import { RootState } from '@root_state';
const mapDispatchToProps = {
    checkoutAction: orderAction['checkoutParams']
}
const mapStateToProps = (state: RootState) => ({
    deals: state['deals']['deals'],
    checkoutParams: state['order']['checkoutParams']
})
export default connect(mapStateToProps, mapDispatchToProps)(DealCard)

