import * as React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
export interface AccountTopProps {
    navigation?: any
}
interface AccountTopState {

}
export class AccountTop extends React.Component<AccountTopProps, AccountTopState> {
    constructor(props: AccountTopProps) {
        super(props);
    }
    render() {
        return (
            <View style={styles.topContainer}>
                <Text
                    style={styles.txt}>My Account</Text>
                <Image
                    source={require('../../../assets/app-images/started_user.png')}
                    resizeMode="stretch"
                    style={styles.img}>
                </Image>
                <Text style={styles.txt1}>Avinash P Nishad</Text>
                <Text style={styles.txt2}>7990073717</Text>
            </View>
        )
    }
}
var styles = StyleSheet.create({
    topContainer: {
        alignItems: 'center'
    },
    txt: {
        marginTop: '8%',
        color: 'white',
        fontSize: 22,
    },
    img: {
        marginTop: '8%',
        width: 150,
        height: 150,
        borderWidth: 1,
        backgroundColor: 'white'
    },
    txt1: {
        marginTop: '2%',
        color: 'white',
        fontSize: 22,
    },
    txt2: {
        marginTop: '2%',
        color: 'white',
        fontSize: 18,
    }
});