import * as React from "react";
import { View } from "react-native";
import { styles } from './forgot-card-style';
import { ForgotCardHeader, ForgotCardField, ForgotCardFooter } from "../";

export const ForgotCard: React.StatelessComponent<{}> = () => {
    return (
        <View style={styles.container}>
            <ForgotCardHeader />
            <ForgotCardField />
        </View>
    )
}
