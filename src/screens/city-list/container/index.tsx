import { CityList } from './city-list/city-list';
import { connect } from 'react-redux'
import { RootState } from '@root_state';
import { citiesAction } from '@state_action';
const mapDispatchToProps = {
    cityAction: citiesAction['listCites']
}
const mapStateToProps = (state: RootState) => ({
    
})
export default connect(mapStateToProps, mapDispatchToProps)(CityList)


