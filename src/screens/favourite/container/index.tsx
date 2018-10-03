import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { MainContainer } from '../components';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import { ICities, IRestaurants, ICustomer, IRestaurantsParams } from '@models';
import { RestaurantRestService } from '../../../services';
import { transformToFromData } from '@common_service';
import SplashScreen from 'react-native-splash-screen';
import * as _ from 'lodash';

export interface Props {
    listCites: (payload: any) => any,
    listFavRestaurant: (payload: any) => any,
    restaurantParamsAction: (payload: any) => any,
    selectedRestaurantAction: (payload: any) => any,
    cities: ICities[],
    favRestaurants: IRestaurants[],
    customer: ICustomer,
    restaurantParamsValue: IRestaurantsParams,
    selectedRestaurantValue: IRestaurants,
    navigation: any
}
interface State {
    latitude: any,
    longitude: any,
    error?: any
}
export class Favourite extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            latitude: '',
            longitude: ''
        };
    }
    componentDidMount() {
        SplashScreen.hide();
        this.initRestaurants();
    }
    initRestaurants = () => {
        const _self = this;
        const { customer } = this.props;
        let reconstruct: any = [];
        RestaurantRestService.listFavoriteRestaurant(customer['user_access_token'] ? customer['user_access_token'] : '').then((restaurantData: any) => {
            if (restaurantData['data']['settings']['success'] == 1) {
                restaurantData['data']['data'].forEach((restaurant: any, idx: number) => {
                    restaurant.restaurant_image = restaurant.restaurant_image[0];
                    reconstruct.push(restaurant);
                });
                _self.props.listFavRestaurant(reconstruct);
            } else if (restaurantData['data']['settings']['success'] == 0) {

            }
        }).catch((error) => {
            console.log("restaurantData error", error);
        })

    }

    pullToRefresh = () => {
        const _self = this;
        let { restaurantParamsValue } = _self.props;
        let params: IRestaurantsParams = restaurantParamsValue;
        params.page_index += 1;
        let reconstruct: any = [];
        let appendData: any = [];
        RestaurantRestService.listRestaurant(transformToFromData(params)).then((restaurantData: any) => {
            if (restaurantData['data']['settings']['success'] == 1) {
                if (restaurantData['data']['data'].length > 0)
                    restaurantData['data']['data'].forEach((restaurant: any, idx: number) => {
                        restaurant.restaurant_image = restaurant.restaurant_image[0];
                        reconstruct.push(restaurant);
                    });
                appendData = _.concat(_self.props.favRestaurants, reconstruct);
                _self.props.listFavRestaurant(appendData);
            } else if (restaurantData['data']['settings']['success'] == 0) {

            }
        }).catch((error) => {
            console.log("pullToRefresh error", error);
        })
    }
    scrollEnd = () => {
        console.log("Card scroll aned");
        this.pullToRefresh();
    }
    selected = (resturant: any) => {
        const _self = this;
        _self.props.selectedRestaurantAction(resturant);
        _self.props.navigation.navigate('PlaceDetail');
    }
    render() {
        return (
            <View style={styles.container}>
                <MainContainer
                    reactToEnd={this.scrollEnd}
                    init={this.initRestaurants}
                    customer={this.props.customer}
                    selectedResturant={this.selected}
                    navigation={this.props.navigation}
                    restaurants={this.props.favRestaurants}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 0,
        left: 0,
        position: 'absolute',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
    },
    headerContainer: {
        flex: 0.1,
        borderColor: '#aaa',
        borderWidth: 2,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    headerText: {
        //   fontSize: 20,

        marginTop: '4%',
        color: 'black',
        fontWeight: '700'
    },
})