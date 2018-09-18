import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from './header-style';
export interface HeaderProps {
    navigation: any
}
export const Header: React.StatelessComponent<HeaderProps> = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.div1}>
                <TouchableOpacity onPress={() => {
                    props.navigation.goBack();
                }}>
                    <Image
                        source={require('../../../../assets/app-images/back_btn_s_1a.png')}
                        style={styles.img} />
                </TouchableOpacity>
            </View>
            <Text style={styles.txt1}>Let's Get Started!</Text>
        </View>
    )
}
