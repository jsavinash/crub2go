import { LoginCardField } from "./login-card-field";
import { connect } from "react-redux";
import { collectAction } from '@state_action';
import { RootState } from "@root_state";
const mapDispatchToProps = {
    loginParamsAction: collectAction['loginParamsAction']
};
const mapStateToProps = (state: RootState) => ({
    loginParams: state['collect']['loginParams']
})
export default connect(mapStateToProps, mapDispatchToProps)(LoginCardField)


