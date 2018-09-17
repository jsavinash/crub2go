import * as React from "react";
import { View, StyleSheet } from 'react-native'
import { Header, SearchBar, Card } from './';
import { IRestaurants, IFavoriteParams } from '@models';
import ActionSheet from 'react-native-actionsheet';

export interface MainContainerProps {
    navigation: any,
    customer: any,
    reactToEnd: () => any,
    searchTerm: (keyword: string) => any,
    sortTo: (param: string) => any,
    selectedResturant: (resturant: string) => any,
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
            this.props.sortTo('Distance');
            console.log("idx", idx, 'Distance');
        } else if (idx === 1) {
            console.log("idx", idx, 'Rating');
            this.props.sortTo('Rating');
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Header
                    customer={this.props.customer}
                    navigation={this.props.navigation}
                    onSort={this.openActionSheet} />
                <SearchBar searchTerm={this.props.searchTerm} />
                <Card
                    customer={this.props.customer}
                    selectedResturant={this.props.selectedResturant}
                    navigation={this.props.navigation}
                    restaurants={this.props.restaurants}
                    reactToEnd={this.props.reactToEnd} />
                <ActionSheet
                    title={'Sort By'}
                    ref={o => this.ActionSheet = o}
                    options={['Distance', 'Rating', 'cancel']}
                    cancelButtonIndex={2}
                    onPress={this.onAction}
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