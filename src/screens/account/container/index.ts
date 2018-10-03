import { Account } from './account/account';
import { connect } from 'react-redux';
import { RootState } from '@root_state';
const mapStateToProps = (state: RootState) => ({
    customer: state['customer']['customer']
})
export default connect(mapStateToProps)(Account)


