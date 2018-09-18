import { LoginCardFooter } from './login-card-footer';
import { connect } from 'react-redux'
import { RootState } from "@root_state";
const mapStateToProps = (state: RootState) => ({
    nav: state['nav'],
})
export default connect(mapStateToProps)(LoginCardFooter)


