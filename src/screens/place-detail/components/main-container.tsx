import * as React from "react";
import { StyleSheet, View } from 'react-native';
import { PlaceCard, Menu, ScrollText, ItemList } from './index';
export interface MainBoxProps {
    resturant: any,
    categories: any,
    menuList: any,
    navigation: any,
    customer: any,
    onMenuSelect: (data: any) => any,
    onItemSelect: (data: any) => any,
}

interface MainBoxState {
    categorie: any
}

export class MainContainer extends React.Component<MainBoxProps, MainBoxState> {
    constructor(props: MainBoxProps) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <PlaceCard
                    navigation={this.props.navigation}
                    resturant={this.props.resturant}
                    customer={this.props.customer} />
                <Menu />
                <ScrollText
                    categorySelect={this.props.onMenuSelect}
                    categories={this.props.categories} />
                <ItemList
                    onItemSelect={this.props.onItemSelect}
                    menuList={this.props.menuList}
                    navigation={this.props.navigation}
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