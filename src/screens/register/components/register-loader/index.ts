import { RegisterLoader } from './register-loader';
import { connect } from "react-redux";
import { RootState } from "@root_state";
const mapStateToProps = (state: RootState) => ({
    registerParams: state['collect']['registerParams']
})
export default connect(mapStateToProps)(RegisterLoader)


