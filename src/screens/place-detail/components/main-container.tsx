import * as React from "react";
import { StyleSheet, View } from 'react-native';
import { PlaceCard, Menu, ScrollText, ItemList } from './index';
export interface MainBoxProps {
    resturant: any,
    categories: any,
    menuList: any,
    onMenuSelect: (data: any) => any
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
                <PlaceCard resturant={this.props.resturant} />
                <Menu />
                <ScrollText
                    categorySelect={this.props.onMenuSelect}
                    categories={this.props.categories} />
                <ItemList
                    menuList={this.props.menuList}
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