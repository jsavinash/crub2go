import { ResetPassword } from "./reset-password/reset-password";
import { connect } from "react-redux";
import { collectAction } from '@state_action';
import { RootState } from "@root_state";
const mapDispatchToProps = {
    resetParamsAction: collectAction['resetParamsAction']
};
const mapStateToProps = (state: RootState) => ({
    resetParams: state['collect']['resetParams']
})
export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword)


