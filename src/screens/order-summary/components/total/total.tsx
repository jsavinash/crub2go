import * as React from "react";
import { View, Text } from 'react-native';
import { styles } from './total-style';
export interface TotalProps {
    selectedOrderDetail: any,
}
export const Total: React.StatelessComponent<TotalProps> = (props) => {
    const getData = () => {
        console.log(props.selectedOrderDetail);
    }
    getData();

    return (
        <View style={styles.container}>
            <View style={styles.contMargin}>
                <View style={styles.content}>
                    <View style={styles.content11}>
                        <Text style={styles.contentTxt}>Subtotal</Text>
                    </View>
                    <View style={styles.content22}>
                        <Text style={styles.contentTxt}>${props['selectedOrderDetail']['order_total_amount']}</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={styles.content111}>
                        <Text style={styles.contentTxt}>Coupon Discount</Text>
                    </View>
                    <View style={styles.content222}>
                        <Text style={styles.contentTxt}>-${props['selectedOrderDetail']['order_total_discount']}</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={styles.content111}>
                        <Text style={styles.contentTxt}>Tax({props['selectedOrderDetail']['order_tax_percentage']} %)</Text>
                    </View>
                    <View style={styles.content222}>
                        <Text style={styles.contentTxt}>${props['selectedOrderDetail']['order_tax_amount']}</Text>
                    </View>
                </View>
                <View style={styles.border}></View>
                <View style={styles.content}>
                    <View style={styles.content111}>
                        <Text style={styles.contentTxt1}>Grand Total</Text>
                    </View>
                    <View style={styles.content222}>
                        <Text style={styles.contentTxt1}>${props['selectedOrderDetail']['order_total_amount_paid']}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

