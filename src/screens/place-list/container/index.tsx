import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { MainContainer } from '../components';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import { ICities, IRestaurants, ICustomer, IRestaurantsParams, ILocationParams } from '@models';
import { RestaurantRestService, CitiesRestService, CustomerRestService } from '../../../services';
import { transformToFromData } from '@common_service';
import SplashScreen from 'react-native-splash-screen';
import * as _ from 'lodash';
import Geocoder from 'react-native-geocoder';
import PTRView from 'react-native-pull-to-refresh';

Geocoder.fallbackToGoogle('AIzaSyClIqoDD2VGA_FfWvFBrt_UacvjqNBLwao');


export interface Props {
    listCites: (payload: any) => any,
    listRestaurants: (payload: any) => any,
    restaurantParamsAction: (payload: any) => any,
    selectedRestaurantAction: (payload: any) => any,
    cities: ICities[],
    restaurants: IRestaurants[],
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
export class PlaceList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            latitude: '',
            longitude: ''
        };
    }
    componentDidMount() {
        this.getCustomer();
        this.getCities();
        this.initRestaurants();
        this.getLocation();
        SplashScreen.hide();
    }

    getLocation = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log("wokeeey");
                console.log(position);
                this.updateUserLocation(position.coords.latitude, position.coords.longitude);
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
        );
    };
    updateUserLocation = (latitude: any, longitude: any) => {
        const { user_access_token } = this.props.customer;
        console.log("user_access_token", user_access_token);
        let location: ILocationParams = {
            user_latitude: latitude,
            user_longitude: longitude
        }
        CustomerRestService.customerUpdateLocation(transformToFromData(location), user_access_token).then((locationUpdate: any) => {
            console.log("locationUpdate", locationUpdate);
            if (locationUpdate['data']['settings']['success'] == 1) {

            } else if (locationUpdate['data']['settings']['success'] == 0) {

            }
        }).catch((error) => {
            console.log("restaurantData error", error);
        })
    };
    initRestaurants = () => {
        const _self = this;
        const { customer } = this.props;
        const { latitude, longitude } = this.state;
        let params: IRestaurantsParams;
        if (customer['user_access_token']) {
            params = {
                user_id: customer['user_id'],
                city_id: customer['user_city_id'],
                user_latitude: latitude,
                user_longitude: longitude,
                page_index: 1,
                num_records: 10
            };
        } else {
            params = {
                page_index: 1,
                num_records: 10
            };
        }
        let reconstruct: any = [];
        RestaurantRestService.listRestaurant(transformToFromData(params)).then((restaurantData: any) => {
            if (restaurantData['data']['settings']['success'] == 1) {

            } else if (restaurantData['data']['settings']['success'] == 0) {

            }
            restaurantData['data']['data'].forEach((restaurant: any, idx: number) => {
                restaurant.restaurant_image = restaurant.restaurant_image[0];
                reconstruct.push(restaurant);
            });
            _self.props.restaurantParamsAction(params);
            _self.props.listRestaurants(reconstruct);
        }).catch((error) => {
            console.log("restaurantData error", error);
        })
    }
    search = (keyword: any) => {
        const _self = this;
        let { restaurantParamsValue } = this.props;
        let params: IRestaurantsParams = restaurantParamsValue;
        params.page_index = 0;
        params.keyword = keyword;
        let reconstruct: any = [];
        RestaurantRestService.listRestaurant(transformToFromData(params)).then((restaurantData: any) => {
            if (restaurantData['data']['settings']['success'] == 1) {
                if (restaurantData['data']['data'].length > 0)
                    restaurantData['data']['data'].forEach((restaurant: any) => {
                        restaurant.restaurant_image = restaurant.restaurant_image[0];
                        reconstruct.push(restaurant);
                    });
                _self.props.listRestaurants(reconstruct);
            } else if (restaurantData['data']['settings']['success'] == 0) {
                _self.props.listRestaurants([]);
            }
            _self.props.restaurantParamsAction(params);
        }).catch((error) => {
            console.log("pullToRefresh error", error);
        })

    }
    prepareParams = (sort: string) => {
        const _self = this;
        let { restaurantParamsValue } = _self.props;
        let params: IRestaurantsParams = restaurantParamsValue;
        params.page_index = 1;
        if (sort == 'Distance')
            params.keyword = 'restaurant_distance';
        if (sort == 'Rating')
            params.keyword = 'restaurant_rating';
        let reconstruct: any = [];
        console.log("params", params);
        RestaurantRestService.listRestaurant(transformToFromData(params)).then((restaurantData: any) => {
            if (restaurantData['data']['settings']['success'] == 1) {
                if (restaurantData['data']['data'].length > 0)
                    restaurantData['data']['data'].forEach((restaurant: any, idx: number) => {
                        restaurant.restaurant_image = restaurant.restaurant_image[0];
                        reconstruct.push(restaurant);
                    });
                _self.props.listRestaurants(reconstruct);
                _self.props.restaurantParamsAction(params);
            } else if (restaurantData['data']['settings']['success'] == 0) {

            }
        }).catch((error) => {
            console.log("pullToRefresh error", error);
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
                appendData = _.concat(_self.props.restaurants, reconstruct);
                _self.props.listRestaurants(appendData);
                _self.props.restaurantParamsAction(params);
            } else if (restaurantData['data']['settings']['success'] == 0) {

            }
        }).catch((error) => {
            console.log("pullToRefresh error", error);
        })
    }
    getCities = () => {
        CitiesRestService.listCities().then((citiesData: any) => {
            console.log(citiesData['data']['data']);
            this.props.listCites(citiesData['data']['data']);
        }).catch((error) => {
            console.log('citiesData error', error);
        })
    }

    scrollEnd = () => {
        console.log("Card scroll aned");
        this.pullToRefresh();
    }
    getCustomer = () => {
        console.log(this.props.customer.user_access_token);
    };

    sort = (sort: string) => {
        if (sort == "Distance")
            this.prepareParams('Distance');
        if (sort == "Rating")
            this.prepareParams('Rating');
    }
    selected = (resturant: any) => {
        console.log("resturant", resturant);

        
        const _self = this;
        _self.props.selectedRestaurantAction(resturant);
        _self.props.navigation.navigate('PlaceDetail');
    }
    render() {
        return (
            <View style={styles.container}>
                <MainContainer
                    searchTerm={_.debounce(this.search, 500)}
                    reactToEnd={this.scrollEnd}
                    sortTo={this.sort}
                    selectedResturant={this.selected}
                    navigation={this.props.navigation}
                    restaurants={this.props.restaurants}
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