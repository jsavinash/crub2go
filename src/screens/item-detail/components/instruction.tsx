import * as React from "react";
import { StyleSheet, View, Text } from 'react-native';
export interface InstructionProps {
    instructions: string
}
export const Instruction: React.StatelessComponent<InstructionProps> = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>{props.instructions}</Text>
        </View>
    )
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