import * as React from "react"
import { StyleSheet, ImageBackground, Dimensions } from "react-native"
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

interface Props {

}

export const BackGround: React.StatelessComponent<Props> = () => {
    return (
        <ImageBackground
            source={require('../../assets/app-images/bg.png')}
            style={styles.bgImage}>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    bgImage: {
        flex: 1,
        top: 0,
        left: 0,
        position: 'absolute',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
    },
});