import * as React from "react"
import { StyleSheet, View, Text } from "react-native";
import { CartRestService } from '../../../services';
import { AsyncStorage } from "react-native";
import { ICustomer, ICartResponse, ICartTotal } from '@models';
export interface AppEntryProps {
    customerCreate: (customer: ICustomer) => any,
    cartAction: (cart: ICartResponse) => any,
    cartTotalAction: (cartTotal: ICartTotal) => any,
    navigation: any,
    customer: ICustomer
}
export class AppEntry extends React.Component<AppEntryProps, {}> {
    constructor(props: AppEntryProps) {
        super(props);
    }
    navigateIfToken = () => {
        const { navigation } = this.props;
        const getUser = (retrievedUser: any) => {
            const user = JSON.parse(retrievedUser);
            this.props.customerCreate(user);
            if (user != null) {
                this.getCartDetails();
                navigation.navigate('Home');
            } else {
                navigation.navigate('Login');
            }
        }
        AsyncStorage.getItem("user").then(getUser);
    }
    getCartDetails = () => {
        const _self = this;
        const { customer } = this.props;
        console.log("customer['user_access_token']", customer['user_access_token']);
        CartRestService.viewCart(customer['user_access_token']).then((cart: any) => {
            if (cart['data']['settings']['success'] == 1) {
                _self.props.cartAction(cart['data']['data']['cart_item']);
                _self.props.cartTotalAction(cart['data']['data']['cart_final_total']);
            }
        }).catch((error) => {

        })
    }

    componentDidMount() {
        this.navigateIfToken();
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