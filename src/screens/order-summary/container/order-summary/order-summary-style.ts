import { Dimensions, StyleSheet } from "react-native";
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 0,
        left: 0,
        position: 'absolute',
        backgroundColor: 'white',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
    },
    headerContainer: {
        flex: 0.1,
        borderColor: '#aaa',
        borderWidth: 2,
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    headerText: {
        fontSize: 20,
        marginTop: '4%',
        color: 'black',
        fontWeight: '700'
    }
})