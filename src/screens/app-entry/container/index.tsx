import * as React from "react"
import { StyleSheet, View, Text } from "react-native";
import { CartRestService, DealsRestService } from '../../../services';
import { AsyncStorage } from "react-native";
// import { ICustomer, ICartResponse, ICartTotal } from '@models';
export interface AppEntryProps {
    customerCreate: (customer: any) => any,
    cartAction: (cart: any) => any,
    cartTotalAction: (cartTotal: any) => any,
    listDealsAction:  (data: any) => any,
    navigation: any,
    customer: any
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
                this.deals();
                navigation.navigate('Home');
            } else {
                this.deals();
                navigation.navigate('Login');
            }
        }
        AsyncStorage.getItem("user").then(getUser);
    }
    getCartDetails = () => {
        const _self = this;
        const { customer } = this.props;
        CartRestService.viewCart(customer['user_access_token']).then((cart: any) => {
            if (cart['data']['settings']['success'] == 1) {
                _self.props.cartAction(cart['data']['data']['cart_item']);
                _self.props.cartTotalAction(cart['data']['data']['cart_final_total']);
            }
        }).catch((error) => {

        })
    }

    deals = () => {
        DealsRestService.listDeals().then((dealsList: any) => {
            console.log("dealsList", dealsList['data']['data']);
            this.props.listDealsAction(dealsList['data']['data']);
        }).catch((error) => {
            console.log('error', error);
        });
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