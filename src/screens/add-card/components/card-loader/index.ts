import { CardLoader } from './card-loader';
import { connect } from "react-redux";
import { RootState } from "@root_state";
const mapStateToProps = (state: RootState) => ({
    cardAddParams: state['collect']['cardAddParams']
})
export default connect(mapStateToProps)(CardLoader)


