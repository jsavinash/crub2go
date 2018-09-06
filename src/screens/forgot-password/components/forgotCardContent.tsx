import * as React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export interface Props {

}

interface State {

}

export class ForgotCardContent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.content}>No worries! Enter your</Text>
                <Text style={styles.title}>Mobile number</Text>
                <Text style={styles.content}>we will send the Verification code</Text>
                <View style={styles.border}></View>
            </View>
        )
    }
}
var styles = StyleSheet.create({
    container: {
        marginTop: 3,
        flex: 0.3,
        alignItems: 'center'
    },
    content: {
        marginLeft: 10,
        marginTop: 2,
        fontSize: 13,
        color: 'black',
    },
    title: {
        color: '#ACD472',
        marginLeft: 10,
        fontWeight: "400",
        fontSize: 18,
        marginBottom: 5
    },

    border: {
        borderBottomColor: '#DCDCDC',
        borderBottomWidth: 1,
    }
});