import * as React from "react";
import { View } from "react-native";
import { styles } from './chang-password-card-style';
import { ChangePasswordCardField } from '../';

export const ChangePasswordCard: React.StatelessComponent<{}> = () => {
    return (
        <View style={styles.container}>
            <ChangePasswordCardField />
        </View>
    )
}

