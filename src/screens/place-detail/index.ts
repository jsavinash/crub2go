import { PlaceDetail } from './container';
import { connect } from 'react-redux'
import { restaurantsAction } from '@state_action';
import { RootState } from '../../reducers/RootReducer';

const mapDispatchToProps = {
    listMenuListAction: restaurantsAction['listMenuList'],
    listCategoriesAction: restaurantsAction['listcategories'],
    selectedCategoryAction: restaurantsAction['selectedCategory'],
    selectedMenuAction: restaurantsAction['selectedMenu']
}
const mapStateToProps = (state: RootState) => ({
    customer: state['customer']['customer'],
    selectedResturant: state['restaurants']['selectedRestaurant'],
    categories: state['restaurants']['categories'],
    menuList: state['restaurants']['menuList'],
    selectedCategory: state['restaurants']['selectedCategory'],
    selectedMenu: state['restaurants']['selectedMenu']
})
export default connect(mapStateToProps, mapDispatchToProps)(PlaceDetail)


