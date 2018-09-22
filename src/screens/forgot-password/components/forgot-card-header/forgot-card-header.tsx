import * as React from "react";
import { View, Text } from "react-native";
import { styles } from './forgot-card-header-style';

export const ForgotCardHeader: React.StatelessComponent<{}> = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.content}>No worries! Enter your</Text>
            <Text style={styles.title}>Mobile number</Text>
            <Text style={styles.content}>we will send the Verification code</Text>
            <View style={styles.border}></View>
        </View>
    )
}
