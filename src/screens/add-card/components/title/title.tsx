import * as React from "react";
import { View, Text } from "react-native";
import { styles } from './title-style';
export const Title: React.StatelessComponent<{}> = () => {
    return (
        <View style={styles.container}>
            <Text
                style={styles.txt1}>Add A Card</Text>
        </View>
    )
}
