import { BottomCheckout } from './bottom-checkout';
import { connect } from 'react-redux';
//import { custAction } from '@state_action';
import { RootState } from '@root_state';
const mapDispatchToProps = {

}
const mapStateToProps = (state: RootState) => ({
    customer: state['customer']['customer'],
})
export default connect(mapStateToProps, mapDispatchToProps)(BottomCheckout)


