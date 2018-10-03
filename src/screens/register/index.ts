import { Register } from './container/register/register';
import { connect } from 'react-redux'
import { custAction } from '@state_action';
import { RootState } from '../../reducers/RootReducer';
const mapDispatchToProps = {
    customerCreate: custAction.createCustomer,
    registerCustomer: custAction.registerCustomer
}
const mapStateToProps = (state: RootState) => ({
    customer: state.customer,
    connection: state.network.isConnected
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)


