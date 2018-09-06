import { Orders } from './container';
import { connect } from 'react-redux'
import { RootState } from '../../reducers/RootReducer';
import { dealAction } from '@state_action';

const mapDispatchToProps = {
      listDeals: dealAction.listDeals,

}
const mapStateToProps = (state: RootState) => ({
       deals: state.deals
})

export default connect(mapStateToProps, mapDispatchToProps)(Orders)





