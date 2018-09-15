import * as React from "react";
import { View } from "react-native";
import { styles } from './add-view-style';
import { AddCardField } from '../index';
import { AddCardBottom } from '../index';

export const CardView: React.StatelessComponent<{}> = () => {
    return (
        <View style={styles.container}>
            <AddCardField />
            <AddCardBottom />
        </View>
    )
}
