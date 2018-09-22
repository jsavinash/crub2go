import * as React from "react";
import { TextInput, View } from "react-native";
import { styles } from './search-style';

export const Search: React.StatelessComponent<{}> = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.txtField}
                placeholder={'Serach city name'}
            ></TextInput>
        </View>
    )
}
