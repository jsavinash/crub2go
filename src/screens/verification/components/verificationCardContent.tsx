import * as React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export interface Props {
    mobile: string

}

interface State {

}
export class VerificationCardContent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }
    componentWillReceiveProps(nextProps: any) {
        if (nextProps.mobile) {
            console.log(this.props.mobile);
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.content}>We have sent you access code via</Text>
                <Text style={styles.content}>SMS on {this.props.mobile}</Text>
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
        fontSize: 16,
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