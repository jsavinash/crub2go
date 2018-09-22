import * as React from "react";
import { Text, View } from "react-native";
import { styles } from './title-style';

export const Title: React.StatelessComponent<{}> = () => {
    return (
        <View>
            <Text style={styles.container}>We are available in</Text>
        </View>
    )
}
