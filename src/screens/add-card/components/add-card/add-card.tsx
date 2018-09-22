import * as React from "react";
import { View } from "react-native";
import { styles } from './add-card-style';
import { AddCardField } from '../index';

export const CardView: React.StatelessComponent<{}> = () => {
    return (
        <View style={styles.container}>
            <AddCardField />
        </View>
    )
}
