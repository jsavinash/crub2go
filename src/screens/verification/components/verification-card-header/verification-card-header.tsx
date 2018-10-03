import * as React from "react";
import { View, Text } from "react-native";
import { styles } from './verification-card-header-style';
export interface VerificationCardHeaderProps {
    mobileNumber: string
}
export const VerificationCardHeader: React.StatelessComponent<VerificationCardHeaderProps> = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.content}>We have sent you access code via</Text>
            <Text style={styles.content}>SMS on {props['mobileNumber']}</Text>
        </View>
    )
}

