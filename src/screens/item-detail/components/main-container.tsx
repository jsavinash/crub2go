import * as React from "react";
import { StyleSheet, View } from 'react-native';
import { ItemCard, Content, AddToCart } from './index';
import { IItem } from '@models';

export interface MainBoxProps {
    selectedItem: IItem,
    isItemPresent: any,
    selectedItemDetail: any,
    totalPriceAction: (payload: any) => any,
    totalPrice: any
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
                <ItemCard
                    image={this.props.selectedItem.item_image}
                    title={this.props.selectedItem.item_name}
                />
                <Content
                    selectedItem={this.props.selectedItem}
                    isItemPresent={this.props.isItemPresent}
                    selectedItemDetail={this.props.selectedItemDetail}
                    totalPriceAction={this.props.totalPriceAction}
                    totalPrice={this.props.totalPrice}


                />
                <AddToCart
                    price={this.props.totalPrice}
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