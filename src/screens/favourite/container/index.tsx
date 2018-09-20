import * as React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { MainBox } from '../components/mainBox';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import { ICities, IRestaurants, ICustomer, IRestaurantsParams } from '@models';
import { RestaurantRestService, CitiesRestService } from '../../../services';
import { transformToFromData } from '@common_service';
import SplashScreen from 'react-native-splash-screen';

export interface Props {
    listFavRestaurant: (payload: any) => any,
    favRestaurants: IRestaurants[],
    navigation: any,
    token: string
}
interface State {

}
export class Favourite extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }
    componentDidMount() {
        this.initRestaurants();
        SplashScreen.hide();
    }
    initRestaurants = () => {
        let params = {
            city_id: 10,
            page_index: 1,
            num_records: 10
        };
        const { token } = this.props;
        let reconstruct: any = [];
        RestaurantRestService.listFavoriteRestaurant({}, token).then((restaurantData: any) => {
            restaurantData['data']['data'].forEach((restaurant: any, idx: number) => {
                restaurant.restaurant_image = restaurant.restaurant_image[0];
                reconstruct.push(restaurant);
            });
            this.props.listFavRestaurant(reconstruct);
        }).catch((error) => {
            console.log("restaurantData error", error);
        })
    }



    render() {
        return (
            <View style={styles.container}>
                <MainBox
                    navigation={this.props.navigation}
                    favRestaurants={this.props.favRestaurants}
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