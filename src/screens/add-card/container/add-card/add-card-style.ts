import { Dimensions, StyleSheet } from "react-native";
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    bgImage: {
        flex: 1,
        top: 0,
        left: 0,
        position: 'absolute',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
    },
    image: {
        alignSelf: 'center',
        height: '18%',
        width: '30%',
        marginTop: '8%',
        marginBottom: '2%'
    },
    div1: {
        alignItems: 'center',
        marginBottom: '2%'
    },
    div1Txt: {
        color: 'white',
        fontSize: 25
    }
});