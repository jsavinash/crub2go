import { Skip } from './skip';
import { connect } from 'react-redux'
import { RootState } from '../../../../reducers/RootReducer';
const mapStateToProps = (state: RootState) => ({
    nav: state['nav'],
})
export default connect(mapStateToProps)(Skip)

