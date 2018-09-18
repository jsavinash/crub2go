import { Button } from './button';
import { connect } from "react-redux";
import { custAction, loginAction } from "@state_action";
import { RootState } from "@root_state";
const mapDispatchToProps = {
    createCustomerAction: custAction['createCustomer'],
    loginParamsAction: loginAction['loginParamsAction']
}
const mapStateToProps = (state: RootState) => ({
    loginParams: state['login']['loginParams']
})
export default connect(mapStateToProps, mapDispatchToProps)(Button)


