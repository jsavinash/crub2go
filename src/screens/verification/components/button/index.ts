import { Button } from './button';
import { connect } from "react-redux";
import { collectAction, custAction } from "@state_action";
import { RootState } from "@root_state";
const mapDispatchToProps = {
    registerParamsAction: collectAction['registerParamsAction'],
    createCustomerAction: custAction['createCustomer']
}
const mapStateToProps = (state: RootState) => ({
    registerParams: state['collect']['registerParams']
})
export default connect(mapStateToProps, mapDispatchToProps)(Button)


