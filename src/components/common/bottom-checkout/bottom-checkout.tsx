import * as React from "react";
import { View, Text } from 'react-native'
import { styles } from './bottom-checkout-style';
export interface BottomCheckoutProps {
    customerCreate: (data: any) => any,
    customer: any
}
interface BottomCheckoutState {

}
export class BottomCheckout extends React.Component<BottomCheckoutProps, BottomCheckoutState> {
    constructor(props: BottomCheckoutProps) {
        super(props);
        this.get();
    }
    get = () => {
        console.log("props", this.props.customer);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.div1}>
                    <View style={styles.txtDiv1}>
                        <Text style={styles.txtDiv1text1}>$125.00</Text>
                    </View>
                    <View style={styles.txtDiv2}>
                        <Text style={styles.txtDiv2text1}>Checkout</Text>
                        <Text style={styles.txtDiv2text2}>TGB Cafe n Bakery</Text>
                    </View>
                    <View style={styles.txtDiv3}>
                        <Text
                            style={styles.txtDiv3text1}>1</Text>
                    </View>
                </View>
            </View>
        )
    }
}


