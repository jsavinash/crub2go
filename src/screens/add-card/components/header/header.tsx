import * as React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { styles } from './header-style';
import { Images } from '@themes';
export interface HeaderProps {
    navigation: any
}
export const Header: React.StatelessComponent<HeaderProps> = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                props.navigation.goBack();
            }}>
                <Image
                    source={Images.LEFT_WHITE_BACK_ARROW}
                    style={styles.img} />
            </TouchableOpacity>
        </View>
    )
}
