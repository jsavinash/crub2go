import { ChangePasswordLoader } from './change-password-loader';
import { connect } from "react-redux";
import { RootState } from "@root_state";
const mapStateToProps = (state: RootState) => ({
    changePasswordParams: state['collect']['changePasswordParams']
})
export default connect(mapStateToProps)(ChangePasswordLoader)


