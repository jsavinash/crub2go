import { StyleSheet, Dimensions } from "react-native";
const SCREEN_WIDTH = Dimensions.get('window').width;
export const styles = StyleSheet.create({
    bgImage: {
        flex: 1,
        top: 0,
        left: 0,
    },
    header: {
        marginTop: '2%',
        alignItems: 'center'
    },
    headerIn: {
        color: 'white',
        fontSize: 20
    },
    headerImg: {
        alignSelf: 'center',
        height: '15%',
        width: '25%',
        backgroundColor: 'white',
        marginTop: 4,
        marginBottom: 10
    },
    headerImgStyle: {
        width: 100,
        height: 100,
    },
    txtTouch: {
        marginTop: '8%',
        right: '10%',
        alignSelf: 'flex-end'
    },
    skip: {
        color: 'white',
        fontSize: 20
    },
    image: {
        alignSelf: 'center',
        height: '30%',
        width: '30%',
        marginTop: '8%',
        marginBottom: '2%'
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: SCREEN_WIDTH,
        height: '10%'
    },
    footerIn: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    txt1: {
        marginTop: '1%'
    },
    txt2: {
        color: '#ACD472',
        marginLeft: '2%',
        fontSize: 20,
    }
});