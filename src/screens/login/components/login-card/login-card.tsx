import * as React from "react";
import { View } from "react-native";
import { styles } from './login-card-style';
import { LoginCardHeader, LoginCardField, LoginCardFooter } from "../";

export const LoginCard: React.StatelessComponent<{}> = () => {
    return (
        <View style={styles.container}>
            <LoginCardHeader />
            <LoginCardField />
            <LoginCardFooter />
        </View>
    )
}
