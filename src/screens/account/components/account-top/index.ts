import { AccountTop } from './account-top';
import { connect } from 'react-redux'
import { RootState } from '../../../../reducers/RootReducer';
const mapStateToProps = (state: RootState) => ({
    customer: state['customer']['customer'],
    nav: state['nav'],
})
export default connect(mapStateToProps)(AccountTop)

