import * as React from "react"
import { StyleSheet, View, Text } from "react-native";
import { CartRestService, DealsRestService, OrderRestService } from '../../../services';
import { AsyncStorage } from "react-native";
import {
    InternalServerError, InternalServerErrorTitle
} from '@constant';
import { showAlert, logger, transformToFromData } from '@common_service';
// import { ICustomer, ICartResponse, ICartTotal } from '@models';
export interface AppEntryProps {
    customerCreate: (customer: any) => any,
    cartAction: (cart: any) => any,
    cartTotalAction: (cartTotal: any) => any,
    dealAction: (data: any) => any,
    orderListAction: (data: any) => any,
    navigation: any,
    customer: any
}
export class AppEntry extends React.Component<AppEntryProps, {}> {
    constructor(props: AppEntryProps) {
        super(props);
    }
    componentDidMount() {
        const _self = this;
        _self.checkToken();
    }

    private checkToken = () => {
        const _self = this;
        const { navigation } = this.props;
        const getUser = (retrievedUser: any) => {
            const user = JSON.parse(retrievedUser[0][1]);
            const city = JSON.parse(retrievedUser[1][1]);
            let userWithCity: any = {};
            if (city) {
                userWithCity['user_city'] = city['city_name'];
                userWithCity['user_city_id'] = city['city_id'];
                if (user) {
                    user['user_city'] = city['city_name'];
                    user['user_city_id'] = city['city_id'];
                }
            }
            if (!user)
                _self.props.customerCreate(userWithCity);
            else
                _self.props.customerCreate(user);
            if (user != null) {
                _self.getCartDetails();
                _self.deal();
                navigation.navigate('Home');
            } else {
                _self.deal();
                if (city) {
                    navigation.navigate('Home');
                }
                else {
                    navigation.navigate('Login');
                }
            }
        }
        AsyncStorage.multiGet(["user", "city"]).then(getUser);
    }
    private getCartDetails = () => {
        const { customer, cartAction, cartTotalAction } = this.props;
        CartRestService.viewCart(customer['user_access_token']).then((cartData: any) => {
            if (cartData['data']['settings']['success'] == 1) {
                cartAction(cartData['data']['data']['cart_item']);
                cartTotalAction(cartData['data']['data']['cart_final_total']);
            }
        }).catch((error) => {
            logger('App Entry', 'ERROR', error);
            showAlert(InternalServerErrorTitle, InternalServerError, 'warning');
        })
    }


    private deal = () => {
        const { dealAction } = this.props;
        DealsRestService.listDeals().then((dealData: any) => {
            console.log("dealData", dealData);
            if (dealData['data']['settings']['success'] == 1) {
                dealAction(dealData['data']['data']);
            }
        }).catch((error) => {
            logger('App Entry', 'ERROR', error);
            showAlert(InternalServerErrorTitle, InternalServerError, 'warning');
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Loading.....</Text>
            </View>
        )
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});