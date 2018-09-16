import { Note } from './note';
import { connect } from 'react-redux';
import { orderAction } from '@state_action';
import { RootState } from '@root_state';
const mapDispatchToProps = {
    checkoutParamsAction: orderAction['checkoutParams']
}
const mapStateToProps = (state: RootState) => ({
    checkoutParams: state['order']['checkoutParams']
})
export default connect(mapStateToProps, mapDispatchToProps)(Note)


