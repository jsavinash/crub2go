import * as React from "react";
import { View, Text } from 'react-native';
import { styles } from './your-cart-style';
export interface YourCartProps {
    selectedOrderItem: any
}
export const YourCart: React.StatelessComponent<YourCartProps> = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.margin}>
                {props.selectedOrderItem.map((item: any, idx: number) => {
                    console.log('item', item);
                    return (
                        <View style={styles.div1} key={idx}>
                            <View style={styles.content1}>
                                <Text style={styles.txt1}>{item['item_name']}</Text>
                                <View style={{
                                    flexDirection: 'row'
                                }}>
                                    <Text style={styles.txt2} >{'Qty'}</Text>
                                    <Text style={styles.txt3} >{item['item_quantity']}</Text>
                                </View>
                            </View>
                            <View style={styles.content2}>
                                <Text style={styles.txt4}>$ {item['item_price']}</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    alignSelf: 'flex-end'
                                }}>
                                    <Text style={styles.txt5}>{'Total Price'}</Text>
                                    <Text style={styles.txt6}>${item['item_total_amount']}</Text>
                                </View>
                            </View>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}

