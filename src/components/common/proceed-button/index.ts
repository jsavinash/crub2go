import { CHeckoutButton } from './proceed-button';
import { connect } from 'react-redux';
import { RootState } from '@root_state';
const mapStateToProps = (state: RootState) => ({
    nav: state['nav'],
    checkoutParams: state['order']['checkoutParams']
})
export default connect(mapStateToProps)(CHeckoutButton)



