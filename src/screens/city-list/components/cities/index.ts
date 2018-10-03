import { Cities } from './cities';
import { connect } from "react-redux";
import { custAction } from '@state_action';
import { RootState } from "@root_state";
const mapDispatchToProps = {
    customerAction: custAction['createCustomer']
};
const mapStateToProps = (state: RootState) => ({
    customer: state['customer']['customer'],
    cities: state['cities']['cities']
})
export default connect(mapStateToProps, mapDispatchToProps)(Cities)


