import * as React from "react"
import { ImageBackground, View, Text, Image } from "react-native";
import { styles } from './add-card-style';
import { CardView } from '../../components';
export const AddCard: React.StatelessComponent<{}> = () => {
    return (
        <ImageBackground
            source={require('../../../../assets/app-images/bg.png')}
            style={styles.bgImage}>
            <Image
                source={require('../../../../assets/app-images/card_payment.png')}
                resizeMode="contain"
                style={styles.image}>
            </Image>
            <View style={styles.div1}>
                <Text
                    style={styles.div1Txt}>Add Card</Text>
            </View>
            <CardView />
        </ImageBackground>
    )
}