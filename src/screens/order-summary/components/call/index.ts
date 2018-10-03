import { Call } from './call';
import { connect } from 'react-redux';
import { RootState } from '@root_state';
const mapStateToProps = (state: RootState) => ({
    selectedOrderDetail: state['order']['selectedOrderDetail']
})
export default connect(mapStateToProps)(Call);


