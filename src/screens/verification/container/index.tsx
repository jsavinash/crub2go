import { Verification } from "./verification/verification";
import { connect } from "react-redux";
import { RootState } from "@root_state";
import { collectAction } from "@state_action";
const mapDispatchToProps = {
    registerParamsAction: collectAction['registerParamsAction']
}
const mapStateToProps = (state: RootState) => ({
    otp: state['collect']['registerParams']['otp'],
    registerParams: state['collect']['registerParams']
})
export default connect(mapStateToProps, mapDispatchToProps)(Verification)


