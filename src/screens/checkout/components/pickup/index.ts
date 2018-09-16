import { PickUp } from './pickup';
import { connect } from 'react-redux';
import { RootState } from '@root_state';
const mapStateToProps = (state: RootState) => ({
    token: state['customer']['customer']['user_access_token'],
    resturantId: state['cart']['cartTotal']['restaurant_id']
})
export default connect(mapStateToProps)(PickUp);


