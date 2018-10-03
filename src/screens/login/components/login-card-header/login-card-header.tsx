import * as React from "react";
import { View, Text } from "react-native";
import { styles } from './login-card-header-style';

export const LoginCardHeader: React.StatelessComponent<{}> = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello There,</Text>
            <Text style={styles.content}>Welcome Back</Text>
            <View style={styles.border}></View>
        </View>
    )
}
