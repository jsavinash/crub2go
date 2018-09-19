import { VerificationCard } from "./verification-card";
import { connect } from "react-redux";
import { collectAction } from '@state_action';
import { RootState } from "@root_state";
const mapDispatchToProps = {
    registerParamsAction: collectAction['registerParamsAction']
};
const mapStateToProps = (state: RootState) => ({
    registerParams: state['collect']['registerParams']
})
export default connect(mapStateToProps, mapDispatchToProps)(VerificationCard)


