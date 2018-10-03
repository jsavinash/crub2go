import { VerificationCardField } from "./verification-card-field";
import { connect } from "react-redux";
import { RootState } from "@root_state";
const mapStateToProps = (state: RootState) => ({
    otp: state['collect']['registerParams']['otp']
})
export default connect(mapStateToProps)(VerificationCardField)


