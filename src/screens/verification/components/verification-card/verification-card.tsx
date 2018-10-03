import * as React from "react";
import { View } from "react-native";
import { styles } from './verification-card-style';
import  {VerificationCardHeader, VerificationCardField } from '../';
export const VerificationCard: React.StatelessComponent<{}> = () => {
    return (
        <View style={styles.container}>
            <VerificationCardHeader/>
            <VerificationCardField/>
        </View>
    )
}
