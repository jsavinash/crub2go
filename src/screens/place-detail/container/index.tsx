import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import SplashScreen from 'react-native-splash-screen';
import { MainContainer } from '../components';
import * as _ from 'lodash';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import { IMenuParams, IRestaurants, IMenuList, ICategories } from '@models';
import { RestaurantRestService } from '../../../services';
import { transformToFromData } from '@common_service';
export interface PlaceDetailProps {
    navigation: any,
    customer: any,
    listMenuListAction: (payload: any) => any,
    listCategoriesAction: (payload: any) => any,
    selectedCategoryAction: (payload: any) => any,
    selectedMenuAction: (payload: any) => any,
    selectedCategory: ICategories
    selectedMenu: IMenuList[],
    selectedResturant: IRestaurants,
    categories: ICategories[],
    menuList: IMenuList[]
}
interface PlaceDetailPropsState {

}
export class PlaceDetail extends React.Component<PlaceDetailProps, PlaceDetailPropsState> {
    constructor(props: PlaceDetailProps) {
        super(props)
    }
    componentDidMount() {
        SplashScreen.hide();
        this.getMenuDetails();
    }

    getMenuDetails = () => {
        let menuParams: IMenuParams = {
            restaurant_id: this.props.selectedResturant['restaurant_id']
        };
        let currentCategory: any = {};
        let filterData: any = [];
        RestaurantRestService.listMenuRestaurant(transformToFromData(menuParams)).then((menu: any) => {
            if (menu['data']['settings']['success'] == 1) {
                this.props.listCategoriesAction(menu['data']['data'][0]['category']);
                this.props.listMenuListAction(menu['data']['data'][0]['item']);
                currentCategory = menu['data']['data'][0]['category'][0];
                filterData = _.filter(menu['data']['data'][0]['item'], function (o) {
                    return o.item_cat_id == currentCategory['cat_id'];
                });
                this.props.selectedCategoryAction(currentCategory);
                this.props.selectedMenuAction(filterData);
            } else if (menu['data']['settings']['success'] == 0) {

            }
        }).catch((error) => {
            console.log("error", error);
        })
    }
    menuSelect = (data: any) => {
        const { menuList } = this.props;
        const filterData = _.filter(menuList, (menu) => {
            return menu.item_cat_id == data['cat_id'];
        });
        this.props.selectedMenuAction(filterData);
    }
    render() {
        return (
            <View style={styles.container}>
                <MainContainer
                    onMenuSelect={this.menuSelect}
                    resturant={this.props.selectedResturant}
                    categories={this.props.categories}
                    menuList={this.props.selectedMenu}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    card: {
        flex: 1

    },
    cardImg: {
        width: SCREEN_WIDTH,
        height: ((SCREEN_HEIGHT * 28) / 100)
    },
    fav: {
        marginTop: 4,
        right: 4,
        position: 'absolute'
    },

    favImg: {
        height: 30,
        width: 30
    },
    info: {
        bottom: 4,
        right: 4,

        position: 'absolute'
    },
    infoImg: {
        height: 30,
        width: 30,
        marginBottom: ((SCREEN_HEIGHT * 15) / 100)
    },
    cardContent: {
        width: SCREEN_WIDTH,
        height: ((SCREEN_HEIGHT * 15) / 100),
        backgroundColor: 'white',
        borderBottomWidth: 2,
    },


    container: {
        flex: 1
    },

    div1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: 'white',
        height: '8%',
        borderBottomColor: '#aaa',
        borderBottomWidth: 1
    },
    div2: {
        marginTop: '2%',
        marginLeft: '5%'
    },
    div3: {
        marginTop: '2%',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        marginLeft: 0
    },
    div3Txt1: {
        fontSize: 14,
        color: '#ACD472'
    },
    div3Txt2: {
        color: 'black',
        fontSize: 16,
        fontWeight: '600'
    },
    scrollContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    scrollContainer1: {
        marginTop: '2%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    content1left: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        color: 'black',
        fontSize: 16,
        marginLeft: '2%'
    },

    content1leftHeading: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        color: 'black',
        fontSize: 20,
        fontWeight: '400',
        marginLeft: '5%'
    },
    content1right: {
        marginRight: "2%"
    },
    content2left: {
        flex: 1,
        flexDirection: 'row',
        fontSize: 12,
        justifyContent: 'flex-start',
        marginLeft: '5%',
        color: '#aaa',
    },
    content2right: {
        marginRight: "5%"
    },
    content2right1: {
        marginRight: "5%",
        color: '#ACD472',
        fontSize: 22,
        fontWeight: '500'
    }
})