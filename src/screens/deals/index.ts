import { Deals } from './container';
import { connect } from 'react-redux'
import { RootState } from '../../reducers/RootReducer';
import { dealAction } from '@state_action';

const mapDispatchToProps = {
    listDealsAction: dealAction['listDeals'],
}
const mapStateToProps = (state: RootState) => ({
    deals: state['deals']['deals']
})

export default connect(mapStateToProps, mapDispatchToProps)(Deals)





