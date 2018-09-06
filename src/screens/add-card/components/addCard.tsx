import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { AddCardContent } from './addCardContent';
import { AddCardField } from './addCardField';
import { AddCardBottom } from './addCardBottom';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export interface Props {

}

interface State {

}

export class Card extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <AddCardField />
                <AddCardBottom />
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
        height: ((SCREEN_HEIGHT * 50) / 100),
        backgroundColor: 'white',
    }
});