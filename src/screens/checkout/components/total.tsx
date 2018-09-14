import * as React from "react";
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';

export interface TotalProps {
}
export const Total: React.StatelessComponent<TotalProps> = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.contMargin}>
                <View style={styles.content}>
                    <View style={styles.content1}>
                        <Text style={styles.contentTxt}>Subtotal</Text>
                    </View>
                    <View style={styles.content2}>
                        <Text style={styles.contentTxt}>$233.00</Text>
                    </View>
                </View>
                <View style={styles.border}></View>
                <View style={styles.content}>
                    <View style={styles.content11}>
                        <Text style={styles.contentTxt}>Total</Text>
                    </View>
                    <View style={styles.content22}>
                        <Text style={styles.contentTxt}>$233.00</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={styles.content111}>
                        <Text style={styles.contentTxt}>Tax(6 %)</Text>
                    </View>
                    <View style={styles.content222}>
                        <Text style={styles.contentTxt}>$13.00</Text>
                    </View>
                </View>
                <View style={styles.border}></View>
                <View style={styles.content}>
                    <View style={styles.content111}>
                        <Text style={styles.contentTxt1}>Grand Total</Text>
                    </View>
                    <View style={styles.content222}>
                        <Text style={styles.contentTxt1}>$246.98</Text>
                    </View>
                </View>
                <View style={styles.border1}></View>

                <View style={{
                    alignSelf: 'center',
                    width: '50%',
                    marginBottom: '20%'
                }}>
                    <Button
                        onPress={() => { props.onSubmitPress(true) }}
                        title="PROCEED"
                        buttonStyle={styles.containerInBtnStyle}
                        containerViewStyle={styles.containerInBtnCnt} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderColor: '#cdcdcd'
    },
    contMargin: {
        marginLeft: '4%',
        marginRight: '4%'
    },
    content: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',

    },
    content1: {
        marginTop: '4%',
        marginLeft: '2%',
        marginBottom: '4%'
    },
    content2: {
        marginTop: '4%',
        marginRight: '2%',
        marginBottom: '4%'
    },
    content11: {
        marginTop: '2%',
        marginLeft: '2%',
        marginBottom: '2%'
    },
    content22: {
        marginTop: '2%',
        marginRight: '2%',
        marginBottom: '2%'
    },
    content111: {
        marginLeft: '2%',
        marginBottom: '2%'
    },
    content222: {
        marginTop: '2%',
        marginRight: '2%',
        marginBottom: '2%'
    },
    contentTxt: {
        color: 'black',
        fontSize: 14
    },
    contentTxt1: {
        color: 'black',
        fontSize: 18,
        fontWeight: '500'
    },
    border: {
        borderBottomWidth: 1,
        borderBottomColor: '#cdcdcd',
        marginBottom: '2%'
    },
    border1: {
        borderBottomWidth: 2,
        borderBottomColor: '#cdcdcd',
        marginBottom: '2%'
    },
    containerInBtnStyle: {
        backgroundColor: '#ACD472',
        borderColor: 'transparent',
        borderWidth: 1,
        borderRadius: 30,
    },
    containerInBtnCnt: {
        marginBottom: '80%'
    }
});