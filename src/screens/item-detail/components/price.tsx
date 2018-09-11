import * as React from "react";
import { StyleSheet, View, Text, Image } from 'react-native';
export interface PriceProps {
}

interface PriceState {

}
export class Price extends React.Component<PriceState, PriceProps> {
    constructor(props: PriceState) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.contentTxt}>Original Price: </Text><Text style={{
                        color: '#ACD472',
                        fontSize: 18,
                    }}>$125.00</Text>
                </View>
                <View style={styles.imageCtn}>
                    <Image
                        source={require('../../../assets/app-images/unsilrk_minus_s_4a.png')}
                        style={styles.minusImage}
                    ></Image>

                    <Text style={styles.counter}>{'1'}</Text>
                    <Image
                        source={require('../../../assets/app-images/unsilrk_pluce_s_4a.png')}
                        style={styles.plusImage}
                    ></Image>
                </View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: '12%',
        width: '100%',
        backgroundColor: 'white'
    },
    content: {
        alignSelf: 'center',
        marginLeft: '2%',
        flexDirection: 'row'
    },
    contentTxt: {
        color: '#aaa',
        fontSize: 14
    },
    imageCtn: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    minusImage: {
        height: 23,
        width: 23,
    },
    plusImage: {
        height: 23,
        width: 23,
        marginLeft: '2%'
    },
    counter: {
        marginLeft: 14,
        marginRight: 14,
        fontSize: 18,
        color: 'black'
    }
});