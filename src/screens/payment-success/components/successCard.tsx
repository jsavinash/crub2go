import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { SuccessCardContent } from './successCardContent';
import { SuccessCardField } from './successCardField';
import { SuccessCardBottom } from './successCardBottom';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export interface Props {

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
                <SuccessCardContent />
                <SuccessCardBottom />
            </View>
        )
    }
}
var styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        borderColor: 'black',
        borderRadius: 10,
        width: ((SCREEN_WIDTH * 90) / 100),
        height: ((SCREEN_HEIGHT * 48) / 100),
        backgroundColor: 'white',
    }
});