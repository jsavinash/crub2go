import { StyleSheet, Dimensions } from "react-native";
const SCREEN_HEIGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        height: ((SCREEN_HEIGHT * 25) / 100),
        marginTop: ((SCREEN_HEIGHT * 2) / 100),
        marginBottom: 10,
    },
    div1: {
        alignSelf: 'center',
        backgroundColor: 'white',
        width: ((SCREEN_HEIGHT * 20) / 100),
        height: ((SCREEN_HEIGHT * 20) / 100),
        borderRadius: 18
    },
    img1: {
        width: ((SCREEN_HEIGHT * 20) / 100),
        height: ((SCREEN_HEIGHT * 20) / 100)
    },
    img2: {
        width: ((SCREEN_HEIGHT * 9) / 100),
        height: ((SCREEN_HEIGHT * 9) / 100)
    },
    touch: {
        position: 'absolute',
        bottom: 0,
        right: '28%'
    }
});