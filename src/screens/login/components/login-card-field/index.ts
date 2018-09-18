import { LoginCardField } from "./login-card-field";
import { connect } from "react-redux";
import { loginAction } from '@state_action';
import { RootState } from "@root_state";
const mapDispatchToProps = {
    loginParamsAction: loginAction['loginParamsAction']
};
const mapStateToProps = (state: RootState) => ({
    loginParams: state['login']['loginParams']
})
export default connect(mapStateToProps, mapDispatchToProps)(LoginCardField)


