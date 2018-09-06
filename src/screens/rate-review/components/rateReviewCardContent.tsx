import * as React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
export interface Props {

}

interface State {

}

export class RateReviewCardContent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.content}>You have successfully verified</Text>
                <Text style={styles.content}>Please enter your new password</Text>
                <View style={styles.border}></View>
            </View>
        )
    }
}
var styles = StyleSheet.create({
    container: {
        marginTop: '8%',
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