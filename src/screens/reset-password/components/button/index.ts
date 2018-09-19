import { Button } from './button';
import { connect } from "react-redux";
import { custAction, collectAction } from "@state_action";
import { RootState } from "@root_state";
const mapDispatchToProps = {
    createCustomerAction: custAction['createCustomer'],
    resetParamsAction: collectAction['resetParamsAction']
}
const mapStateToProps = (state: RootState) => ({
    resetParams: state['collect']['resetParams']
})
export default connect(mapStateToProps, mapDispatchToProps)(Button)


