import { Payment } from './container';
import { connect } from 'react-redux'
import { cardAction, orderAction } from '@state_action';
import { RootState } from '../../reducers/RootReducer';
const mapDispatchToProps = {
    listCards: cardAction['listCards'],
    checkoutParamsAction : orderAction['checkoutParams'],
}

const mapStateToProps = (state: RootState) => ({
    cards: state['cards']['cards'],
    total: state['cart']['cartTotal'],
    customer: state['customer']['customer'],
    checkoutParams: state['order']['checkoutParams'],
    nav: state['nav']
})

export default connect(mapStateToProps, mapDispatchToProps)(Payment)


