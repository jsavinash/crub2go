import * as React from "react";
import { View, Text } from "react-native";
import { styles } from './reset-card-header-style';
export const ResetCardContent: React.StatelessComponent<{}> = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.content}>You have successfully verified</Text>
            <Text style={styles.content}>Please enter your new password</Text>
            <View style={styles.border}></View>
        </View>
    )

}
