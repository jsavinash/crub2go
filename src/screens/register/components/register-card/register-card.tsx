import * as React from "react";
import { View } from "react-native";
import { styles } from './register-card-style';
import { RegisterCardField, RegisterCardFooter } from '../';

export const RegisterCard: React.StatelessComponent<{}> = () => {

    return (
        <View style={styles.container}>
            <RegisterCardField />
            <RegisterCardFooter />
            
        </View>
    )

}
