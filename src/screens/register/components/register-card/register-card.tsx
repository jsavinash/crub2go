import * as React from "react";
import { View } from "react-native";
import { styles } from './register-card-style';
import { RegisterCardField } from '../registerCardField';
import { RegisterCardBottom } from '../registerCardBottom';

export const RegisterCard: React.StatelessComponent<{}> = () => {

    return (
        <View style={styles.container}>
            <RegisterCardField />
            <RegisterCardBottom />
        </View>
    )

}
