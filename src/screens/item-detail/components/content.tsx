import * as React from "react";
import { StyleSheet, View, Text, Image } from 'react-native';
import { Price, Instruction, AddNote } from './';
export interface ContentProps {
}

interface ContentState {

}
export class Content extends React.Component<ContentProps, ContentState> {
    constructor(props: ContentProps) {
        super(props);
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Price />
                <Instruction />
                <AddNote />
            </View>
        )
    }
}
var styles = StyleSheet.create({

});