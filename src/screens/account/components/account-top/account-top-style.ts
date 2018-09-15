import { StyleSheet, Dimensions } from "react-native";
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    topContainer: {
        alignItems: 'center'
    },
    txt: {
        marginTop: '8%',
        color: 'white',
        fontSize: 22,
    },
    img1: {
        marginTop: '8%',
        width: ((SCREEN_WIDTH * 35) / 100),
        height: ((SCREEN_HEIGHT * 20) / 100),
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 22,
        borderColor: 'transparent',
        alignItems: 'center'
    },
    img: {
        width: ((SCREEN_WIDTH * 35) / 100),
        height: ((SCREEN_HEIGHT * 20) / 100),
        borderRadius: 22
    },
    txt1: {
        marginTop: '2%',
        color: 'white',
        fontSize: 22,
    },
    txt2: {
        marginTop: '1%',
        marginBottom: '2%',
        color: 'white',
        fontSize: 18,
    }
});