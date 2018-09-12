import * as React from "react";
import { View, StyleSheet } from 'react-native'
import { Header, SearchBar, Card } from './';
import { IRestaurants, IFavoriteParams } from '@models';
import ActionSheet from 'react-native-actionsheet';

export interface MainContainerProps {
    navigation: any,
    restaurants: IRestaurants[]
}

interface MainContainerState {

}
export class MainContainer extends React.Component<MainContainerProps, MainContainerState> {
    constructor(props: MainContainerProps) {
        super(props);
    }
    openActionSheet = () => {
        this.ActionSheet.show()
    }
    onAction = (idx: number) => {
        if (idx === 0) {
            console.log("idx", idx, 'Distance');
        } else if (idx === 1) {
            console.log("idx", idx, 'Rating');
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Header
                    navigation={this.props.navigation}
                    onSort={this.openActionSheet} />
                <SearchBar />
                <Card
                    navigation={this.props.navigation}
                    restaurants={this.props.restaurants} />
                <ActionSheet
                    title={'Sort By'}
                    ref={o => this.ActionSheet = o}
                    options={['Distance', 'Rating']}
                    onPress={this.onAction}
                />
            </View>
        )
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});