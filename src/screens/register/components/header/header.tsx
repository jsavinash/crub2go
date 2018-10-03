import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from './header-style';
import { Images } from '@themes';
export interface HeaderProps {
    navigation: any
}
export const Header: React.StatelessComponent<HeaderProps> = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.div1}>
                <View style={styles.div2}>
                    <TouchableOpacity onPress={() => {
                        props.navigation.goBack();
                    }}>
                        <Image
                            source={Images.LEFT_WHITE_BACK_ARROW}
                            style={styles.img} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.txt1}>Let's Get Started!</Text>
            </View>
        </View>
    )
}
