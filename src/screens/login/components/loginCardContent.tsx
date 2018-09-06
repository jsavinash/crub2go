import * as React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export interface Props {

}

interface State {

}

export class LoginCardContent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Hello There,</Text>
                <Text style={styles.content}>Welcome Back</Text>
                <View style={styles.border}></View>
            </View>
        )
    }
}
var styles = StyleSheet.create({
    container: {
        marginTop: 3,
        flex: 0.2,
    },
    title: {
        marginLeft: 10,
        marginTop: 2,
        fontSize: 13,
        color: 'black',
    },
    content: {
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