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
        backgroundColor: '#f3f3f3'
    },
    txt: {
        marginTop: '4%',
        marginBottom: '4%',
        left: '4%',
        fontSize: 16,
        color: 'black'
    }
});