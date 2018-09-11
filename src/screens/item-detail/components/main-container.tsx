import * as React from "react";
import { StyleSheet, View } from 'react-native';
import { ItemCard, Content, AddToCart } from './index';
export interface MainBoxProps {
}

interface MainBoxState {

}
export class MainContainer extends React.Component<MainBoxProps, MainBoxState> {
    constructor(props: MainBoxProps) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <ItemCard />
                <Content />
                <AddToCart/>
            </View>
        )
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});