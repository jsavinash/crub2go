import { Payment } from './container';
import { connect } from 'react-redux'
import { cardAction } from '@state_action';
import { RootState } from '../../reducers/RootReducer';
const mapDispatchToProps = {
    listCards: cardAction.listCards,
}

const mapStateToProps = (state: RootState) => ({
    cards: state['cards']['cards'],
    customer: state['customer']['customer']
})

export default connect(mapStateToProps, mapDispatchToProps)(Payment)


