import { Login } from './container';
import { connect } from 'react-redux'
import { custAction } from '@state_action';
import { RootState } from '../../reducers/RootReducer';
const mapDispatchToProps = {
    customerCreate: custAction.createCustomer,
}

const mapStateToProps = (state: RootState) => ({
    customer: state.customer,
    connection: state.network.isConnected
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)


