import * as React from "react";
import { View, Text } from 'react-native'
import { styles } from './bottom-checkout-style';
import { ICartResponse, ICartTotal } from '@models';
export interface BottomCheckoutProps {
    cart: ICartResponse[],
    cartTotal: ICartTotal,
    nav: any

}
interface BottomCheckoutState {

}
export class BottomCheckout extends React.Component<BottomCheckoutProps, BottomCheckoutState> {
    constructor(props: BottomCheckoutProps) {
        super(props);
    }
    render() {
        const { cartTotal, cart, nav } = this.props;        
        if (cartTotal && (cart.length > 0) && ((nav.index == 1) || (nav && nav['routes'] && (nav['routes'].length == 3) && nav['routes'][2] && nav['routes'][2]['routeName'] && (nav['routes'][2]['routeName'] == "PlaceDetail")))) {
                return (
                    <View style={nav.index == 1 ? styles.container1 : styles.container2}>
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
                )
            
        } else {
            return (
                <View>
                </View>
            )
        }
    }
}


