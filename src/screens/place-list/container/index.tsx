import * as React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { MainBox } from '../components/mainBox';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import { ICities, IRestaurants, ICustomer, IRestaurantsParams } from '@models';
import { RestaurantRestService, CitiesRestService } from '../../../services';
import { transformToFromData } from '@common_service';
export interface Props {
    listCites: (payload: any) => any,
    listRestaurants: (payload: any) => any,
    cities: ICities[],
    restaurants: IRestaurants[],
    customer: ICustomer,
    navigation: any
}
interface State {

}
export class PlaceList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }
    componentDidMount() {
        this.getCustomer();
        this.getCities();
        this.initRestaurants();
    }
    initRestaurants = () => {
        let params = {
            city_id: 10,
            page_index: 1,
            num_records: 10
        };
        let reconstruct: any = [];
        RestaurantRestService.listRestaurant(transformToFromData(params)).then((restaurantData: any) => {
            restaurantData['data']['data'].forEach((restaurant: any, idx: number) => {
                restaurant.restaurant_image = restaurant.restaurant_image[0];
                reconstruct.push(restaurant);
            });
            this.props.listRestaurants(reconstruct);
        }).catch((error) => {
            console.log("restaurantData error", error);
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

    getCustomer = () => {
        console.log(this.props.customer.user_access_token);
    };

    render() {
        return (
            <View style={styles.container}>
                <MainBox
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