import * as React from "react";
import { View, TouchableWithoutFeedback, Text } from "react-native";
import { styles } from './footer-style';
export interface FooterProps {
    navigation: any
}
export const Footer: React.StatelessComponent<FooterProps> = (props) => {
    return (
        <View
            style={styles.container}>
            <View style={styles.div1}>
                <Text style={styles.txt1}>Don't have an account?</Text>
                <TouchableWithoutFeedback onPress={() => {
                    props.navigation.navigate('Register');
                }}>
                    <View>
                        <Text style={styles.txt2}>Register</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}
