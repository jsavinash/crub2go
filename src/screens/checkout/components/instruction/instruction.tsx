import * as React from "react";
import { View, Text } from 'react-native';
import { styles } from './instruction-styles';
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

