import * as React from "react";
import { StyleSheet, View, Text, Image } from 'react-native';
import { Price } from './';
export interface InstructionProps {
}

interface InstructionState {

}
export class Instruction extends React.Component<InstructionProps, InstructionState> {
    constructor(props: InstructionProps) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.txt}>Special Instructions</Text>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '11%',
        backgroundColor: '#f3f3f3'
    },
    txt: {
        marginTop: '3%',
        left: '2%',
        fontSize: 16,
        color: 'black'
    }
});