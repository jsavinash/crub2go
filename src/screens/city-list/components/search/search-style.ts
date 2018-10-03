import { StyleSheet, Dimensions } from "react-native";
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH,
        height: ((SCREEN_HEIGHT * 15) / 100),
        borderColor: '#aaa',
        borderWidth: 2,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    div1: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    div2: {
        alignSelf: 'center'

    },
    img:
    {
        width: 30,
        height: 30
    },
    txtField: {
        width: ((SCREEN_WIDTH * 90) / 100)
    }
});