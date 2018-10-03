import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { SuccessCardContent } from './successCardContent';
import { SuccessCardField } from './successCardField';
import { SuccessCardBottom } from './successCardBottom';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export interface Props {
    navigation: any,
    order: any
}

interface State {


}

export class SuccessCard extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }
    render() {

        return (
            <View style={styles.container}>
                <SuccessCardContent
                    order={this.props.order} />
                <SuccessCardBottom
                    navigation={this.props.navigation} />
            </View>
        )
    }
}
var styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        borderColor: 'black',
        borderRadius: 22,
        width: ((SCREEN_WIDTH * 90) / 100),
        height: ((SCREEN_HEIGHT * 44) / 100),
        backgroundColor: 'white',
    }
});