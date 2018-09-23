import { AddCardField } from './add-card-field';
import { connect } from "react-redux";
import { collectAction } from '@state_action';
import { RootState } from "@root_state";
const mapDispatchToProps = {
    cardAddParamsAction: collectAction['cardAddParamsAction']
};
const mapStateToProps = (state: RootState) => ({
    cardAddParams: state['collect']['cardAddParams']
})
export default connect(mapStateToProps, mapDispatchToProps)(AddCardField)


