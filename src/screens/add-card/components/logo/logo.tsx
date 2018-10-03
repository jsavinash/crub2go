import * as React from "react";
import { Image } from "react-native";
import { styles } from './logo-style';
import { Images } from "@themes";

export const Logo: React.StatelessComponent<{}> = () => {
    return (
        <Image
            source={Images.CARD_PAYMENT}
            resizeMode="contain"
            style={styles.container}>
        </Image>
    )
}
