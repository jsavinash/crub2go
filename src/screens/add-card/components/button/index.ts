import { Button } from './button';
import { connect } from "react-redux";
import { custAction, collectAction } from "@state_action";
import { RootState } from "@root_state";
const mapDispatchToProps = {
    createCustomerAction: custAction['createCustomer'],
    cardAddParamsAction: collectAction['cardAddParamsAction']
}
const mapStateToProps = (state: RootState) => ({
    cardAddParams: state['collect']['cardAddParams'],
    customer: state['customer']['customer']
})
export default connect(mapStateToProps, mapDispatchToProps)(Button)


