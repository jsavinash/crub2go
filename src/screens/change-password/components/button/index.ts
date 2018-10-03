import { Button } from './button';
import { connect } from "react-redux";
import { custAction, collectAction } from "@state_action";
import { RootState } from "@root_state";
const mapDispatchToProps = {
    createCustomerAction: custAction['createCustomer'],
    changePasswordParamsAction: collectAction['changePasswordParamsAction']
}
const mapStateToProps = (state: RootState) => ({
    changePasswordParams: state['collect']['changePasswordParams'],
    token: state['customer']['customer']['user_access_token']
})
export default connect(mapStateToProps, mapDispatchToProps)(Button)


