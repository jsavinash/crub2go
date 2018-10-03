import * as React from "react";
import { View } from "react-native";
import { styles } from './reset-card-style';
import { ResetCardContent, ResetCardField } from "../";

export const ResetCard: React.StatelessComponent<{}> = () => {
    return (
        <View style={styles.container}>
            <ResetCardContent />
            <ResetCardField />
        </View>
    )
}
