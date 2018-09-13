import * as React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { Price, Instruction, AddNote, Selection } from './';

export interface ContentProps {
    selectedItem: any,
    isItemPresent: any,
    selectedItemDetail: any,
    totalPriceAction: (payload: any) => any,
    totalPrice: any


}
interface ContentState {

}
export class Content extends React.Component<ContentProps, ContentState> {
    constructor(props: ContentProps) {
        super(props);
    }
    isSelection = (): any => {
        if (this.props.isItemPresent)
            return <Selection
                selectedItemDetail={this.props.selectedItemDetail}
                totalPrice={this.props.totalPrice}
                totalPriceAction={this.props.totalPriceAction}
            />
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Price
                    totalPriceAction={this.props.totalPriceAction}
                    value={this.props.selectedItem.item_original_price}
                    totalPrice={this.props.totalPrice}
                />
                {this.isSelection()}
                <Instruction instructions={'Special Instructions'} />
                <AddNote />
            </View>
        )
    }
}
var styles = StyleSheet.create({

});