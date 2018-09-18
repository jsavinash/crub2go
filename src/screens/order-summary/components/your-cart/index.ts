import { YourCart } from './your-cart';
import { connect } from 'react-redux';
import { RootState } from '@root_state';
const mapStateToProps = (state: RootState) => ({
    nav: state['nav'],
    selectedOrderItem: state['order']['selectedOrderItem']
})
export default connect(mapStateToProps)(YourCart);


