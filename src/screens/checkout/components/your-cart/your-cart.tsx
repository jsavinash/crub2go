import * as React from "react";
import { View, Text } from 'react-native';
import { styles } from './your-cart-style';
export interface YourCartProps {
    carts: any
}
export const YourCart: React.StatelessComponent<YourCartProps> = (props) => {
    return (
        <View style={styles.container}>
            {props.carts.map((cart: any, index: number) => {
                return (
                    <View style={styles.margin} key={index}>
                        <View style={styles.div1}>
                            <View style={styles.content1}>
                                <Text style={styles.contentTxt}>{cart['item_name']} X {cart['item_quantity']}</Text>
                                {cart.variation.map((variat: any, index: number) => {
                                    return (
                                        variat.attribute.map((attr: any, idc: number) => {
                                            return (
                                                <Text style={styles.contentTxtMini} key={idc * index}>{attr['attribute_name']} (${attr['attribute_price']})</Text>
                                            )
                                        })
                                    )
                                })}
                            </View>
                            <View style={styles.content2}>
                                <Text style={styles.contentTxt}>${cart['item_sub_total']}</Text>
                            </View>
                        </View>
                        <View style={styles.border}>
                        </View>
                    </View>
                )
            }
            )}
        </View>
    )
}

