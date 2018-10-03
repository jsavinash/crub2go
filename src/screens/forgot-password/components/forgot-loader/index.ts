import { ForgotLoader } from './forgot-loader';
import { connect } from "react-redux";
import { RootState } from "@root_state";
const mapStateToProps = (state: RootState) => ({
    forgotParams: state['collect']['forgotParams']
})
export default connect(mapStateToProps)(ForgotLoader)


