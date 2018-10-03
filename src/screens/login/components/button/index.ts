import { Button } from './button';
import { connect } from "react-redux";
import { custAction, collectAction } from "@state_action";
import { RootState } from "@root_state";
const mapDispatchToProps = {
    createCustomerAction: custAction['createCustomer'],
    loginParamsAction: collectAction['loginParamsAction']
}
const mapStateToProps = (state: RootState) => ({
    loginParams: state['collect']['loginParams']
})
export default connect(mapStateToProps, mapDispatchToProps)(Button)


