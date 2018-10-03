import { VerificationCardHeader } from "./verification-card-header";
import { connect } from "react-redux";
import { RootState } from "@root_state";
const mapStateToProps = (state: RootState) => ({
    mobileNumber: state['collect']['registerParams']['mobile_number']
})
export default connect(mapStateToProps)(VerificationCardHeader)


