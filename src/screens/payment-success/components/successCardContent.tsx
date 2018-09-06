import * as React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export interface Props {

}

interface State {

}

export class SuccessCardContent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.content}>You have successfully</Text>
                <Text style={styles.content}>Placed your order</Text>
                <View style={styles.border}></View>

                <Text style={styles.content}>Order Number</Text>
                <Text style={styles.content1}># 032451</Text>
                <View style={styles.border}></View>

                <Text style={styles.content}>Estimated Pickup Time</Text>
                <Text style={styles.content1}>30 mins</Text>
            </View>
        )
    }
}
var styles = StyleSheet.create({
    container: {
        margin: '5%',
        marginTop: '10%',
        flex: 1,
    },
    content: {
        marginLeft: 10,
        marginTop: 2,
        fontSize: 15,
        color: 'black',
        alignSelf: 'center'
    },
    content1: {
        marginLeft: 10,
        marginTop: 2,
        fontSize: 25,
        color: 'black',
        alignSelf: 'center'
    },
    border: {
        marginTop: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    }
});