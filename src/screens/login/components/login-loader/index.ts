import { LoginLoader } from './login-loader';
import { connect } from "react-redux";
import { RootState } from "@root_state";
const mapStateToProps = (state: RootState) => ({
    loginParams: state['collect']['loginParams']
})
export default connect(mapStateToProps)(LoginLoader)


