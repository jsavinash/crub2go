import * as React from "react";
import { StyleSheet, View, Text, Image } from 'react-native';
import { Price, Instruction, AddNote, Selection } from './';
import { IItem } from '@models';

export interface ContentProps {
    selectedItem: IItem,
    isItemPresent: any,
    selectedItemDetail: any
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
            />
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Price
                    value={this.props.selectedItem.item_original_price}
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