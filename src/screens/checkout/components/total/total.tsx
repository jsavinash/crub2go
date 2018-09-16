import * as React from "react";
import { View, Text } from 'react-native';
import { styles } from './total-style';
import { Button } from 'react-native-elements';

export interface TotalProps {
    cartTotal: any,
    checkoutParams: any,
}

export const Total: React.StatelessComponent<TotalProps> = (props) => {
    const checkout = () => {
        console.log("checkoutParams", props.checkoutParams);

    }
    return (
        <View style={styles.container}>
            <View style={styles.contMargin}>
                <View style={styles.content}>
                    <View style={styles.content1}>
                        <Text style={styles.contentTxt}>Subtotal</Text>
                    </View>
                    <View style={styles.content2}>
                        <Text style={styles.contentTxt}>${props['cartTotal']['cart_sub_total']}</Text>
                    </View>
                </View>
                <View style={styles.border}></View>
                <View style={styles.content}>
                    <View style={styles.content11}>
                        <Text style={styles.contentTxt}>Total</Text>
                    </View>
                    <View style={styles.content22}>
                        <Text style={styles.contentTxt}>${props['cartTotal']['cart_sub_total']}</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={styles.content111}>
                        <Text style={styles.contentTxt}>Tax({props['cartTotal']['cart_tax_percentage']} %)</Text>
                    </View>
                    <View style={styles.content222}>
                        <Text style={styles.contentTxt}>${props['cartTotal']['cart_tax']}</Text>
                    </View>
                </View>
                <View style={styles.border}></View>
                <View style={styles.content}>
                    <View style={styles.content111}>
                        <Text style={styles.contentTxt1}>Grand Total</Text>
                    </View>
                    <View style={styles.content222}>
                        <Text style={styles.contentTxt1}>${props['cartTotal']['cart_grand_total']}</Text>
                    </View>
                </View>
                <View style={styles.border1}></View>

                <View style={{
                    alignSelf: 'center',
                    width: '50%',
                    marginBottom: '20%'
                }}>
                    <Button
                        onPress={() => {
                            checkout();
                            // props.onSubmitPress(true)
                        }}
                        title="PROCEED"
                        buttonStyle={styles.containerInBtnStyle}
                        containerViewStyle={styles.containerInBtnCnt} />
                </View>
            </View>
        </View>
    )
}

