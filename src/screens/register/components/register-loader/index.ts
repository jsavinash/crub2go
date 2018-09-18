import { RegisterLoader } from './register-loader';
import { connect } from "react-redux";
import { RootState } from "@root_state";
const mapStateToProps = (state: RootState) => ({
    loginParams: state['login']['loginParams']
})
export default connect(mapStateToProps)(RegisterLoader)


