import * as React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from './footer-style';
import { Images } from "@themes";

export const Footer: React.StatelessComponent<{}> = () => {
    return (
        <View
            style={styles.container}>
            <View style={styles.div1}>
                <Text style={styles.txt1}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => {
                    this.navigateTo('Register');
                }}>
                    <Text style={styles.txt2}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
