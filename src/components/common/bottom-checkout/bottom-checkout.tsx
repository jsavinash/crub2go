import * as React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { addNavigationHelpers, NavigationState } from 'react-navigation';
import { Dispatch } from 'redux';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import { styles } from './bottom-checkout-style';
import { ICartResponse, ICartTotal } from '@models';
export interface BottomCheckoutProps {
    cart: ICartResponse[],
    cartTotal: ICartTotal,
    nav: NavigationState
    dispatch: Dispatch
}
interface BottomCheckoutState {

}
export class BottomCheckout extends React.Component<BottomCheckoutProps, BottomCheckoutState> {
    private navigation = addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
        addListener: createReduxBoundAddListener('root'),
    });
    constructor(props: BottomCheckoutProps) {
        super(props);
    }
    render() {
        const { cartTotal, cart, nav } = this.props;
        console.log(" render this.props", this.props);
        console.log("render this.nav", nav);
        let currentRouteName = "";
        if (nav && nav['routes']) {
            currentRouteName = nav['routes'][nav['routes'].length - 1]['routeName'];
        }
        if (nav && nav['routes'] && cartTotal && (cart.length > 0) && (currentRouteName == "Home" || currentRouteName == "PlaceDetail")) {
            return (
                <TouchableOpacity onPress={() => {
                    this.navigation.navigate('Checkout', { resturantId: cartTotal['restaurant_id'] });
                }} style={currentRouteName == "PlaceDetail" ? styles.container2 : styles.container1}>
                    <View>
                        <View style={styles.div1}>
                            <View style={styles.txtDiv1}>
                                <Text style={styles.txtDiv1text1}>{this.props.cartTotal.cart_grand_total}</Text>
                            </View>
                            <View style={styles.txtDiv2}>
                                <Text style={styles.txtDiv2text1}>Checkout</Text>
                                <Text style={styles.txtDiv2text2}>{this.props.cartTotal.restaurant_name}</Text>
                            </View>
                            <View style={styles.txtDiv3}>
                                <Text
                                    style={styles.txtDiv3text1}>{this.props.cart.length}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            )

        } else {
            return (
                <View>
                </View>
            )
        }
    }
}


