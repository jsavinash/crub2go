import { StyleSheet, Dimensions } from "react-native";
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        marginTop: '8%',
        flexDirection: 'row',
    },
    div1: {
        marginLeft: '4%'
    },
    img: {
        width: ((SCREEN_WIDTH * 8) / 100),
        height: ((SCREEN_HEIGHT * 4) / 100),
    },
    txt1: {
        color: 'white',
        fontSize: 20,
        marginHorizontal: '15%'
    },
});