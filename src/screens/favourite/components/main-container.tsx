import * as React from "react";
import { View, StyleSheet } from 'react-native'
import { Card } from './';
import { IRestaurants } from '@models';

export interface MainContainerProps {
    navigation: any,
    customer: any,
    reactToEnd: () => any,
    selectedResturant: (resturant: string) => any,
    init: () => any,
    restaurants: IRestaurants[]
}

interface MainContainerState {

}
export class MainContainer extends React.Component<MainContainerProps, MainContainerState> {
    constructor(props: MainContainerProps) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Card
                    customer={this.props.customer}
                    selectedResturant={this.props.selectedResturant}
                    navigation={this.props.navigation}
                    restaurants={this.props.restaurants}
                    init={this.props.init}
                    reactToEnd={this.props.reactToEnd}
                />
            </View>
        )
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});