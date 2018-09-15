import { AccountTop } from './account-top';
import { connect } from 'react-redux'
import { RootState } from '../../../../reducers/RootReducer';
const mapStateToProps = (state: RootState) => ({
    customer: state['customer']['customer']
})
export default connect(mapStateToProps)(AccountTop)


