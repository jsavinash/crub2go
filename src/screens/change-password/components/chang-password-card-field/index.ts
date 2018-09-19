import { ChangePasswordCardField } from "./chang-password-card-field";
import { connect } from "react-redux";
import { collectAction } from '@state_action';
import { RootState } from "@root_state";
const mapDispatchToProps = {
    changePasswordParamsAction: collectAction['changePasswordParamsAction']
};
const mapStateToProps = (state: RootState) => ({
    changePasswordParams: state['collect']['changePasswordParams']
})
export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordCardField)


