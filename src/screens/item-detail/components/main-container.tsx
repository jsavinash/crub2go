import * as React from "react";
import { StyleSheet, View } from 'react-native';
import { ItemCard, Content, AddToCart } from './index';
import { IItem } from '@models';

export interface MainBoxProps {
    //Action
    totalPriceAction: (payload: any) => any,
    triggerAddToCard: () => any,
    seletedAttributeAction: (payload: any) => any,
    //Store Variable
    selectedItem: IItem,
    isItemPresent: any,
    selectedItemDetail: any,
    totalPrice: any,
    selectedAttribute: any
}

interface MainBoxState {
    //State Variable

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
                    seletedAttributeAction={this.props.seletedAttributeAction}
                    selectedAttribute={this.props.selectedAttribute}
                />
                <AddToCart
                    triggerAddToCard={this.props.triggerAddToCard}
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