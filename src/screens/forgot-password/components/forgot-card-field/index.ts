import { ForgotCardField } from './forgot-card-field';
import { connect } from "react-redux";
import { collectAction } from '@state_action';
import { RootState } from "@root_state";
const mapDispatchToProps = {
    forgotParamsAction: collectAction['forgotParamsAction']
};
const mapStateToProps = (state: RootState) => ({
    forgotParams: state['collect']['forgotParams']
})
export default connect(mapStateToProps, mapDispatchToProps)(ForgotCardField)
