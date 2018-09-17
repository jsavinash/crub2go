import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../themes/Colors';
const SCREEN_HEIGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0
    },
    containerIn: {
        margin: ((SCREEN_HEIGHT * 1.5) / 100)

    },
    crossBtnDiv: {
        alignItems: 'flex-end'
    },
    crossBtnDivImg: {
        height: ((SCREEN_HEIGHT * 2.5) / 100),
        width: ((SCREEN_HEIGHT * 2.5) / 100)
    },
    textContent: {
        flexDirection: 'column'
    },
    txt1: {
        fontWeight: '400',
        fontSize: 18,
        color: 'black'
    },
    txt2: {
        fontSize: 11.5,
        color: 'black'
    },
    selTypDiv: {
        flexDirection: 'column',
    },
    selTypDivView1: {
        marginTop: ((SCREEN_HEIGHT * 2) / 100)
    },
    selTypDivView1Txt: {
        fontSize: 16,
        color: 'black',
        fontWeight: '500'
    },
    selTypDivView2: {
        flexDirection: 'row',
        marginTop: ((SCREEN_HEIGHT * 1) / 100),
        justifyContent: 'space-between'
    },
    div1: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    div2: {
        borderRadius: 10,
        height: ((SCREEN_HEIGHT * 11.5) / 100),
        width: ((SCREEN_HEIGHT * 11.5) / 100),
        borderWidth: 1,
        borderColor: '#aaa',
        backgroundColor: '#ACD472'
    },
    div21: {
        borderRadius: 10,
        height: ((SCREEN_HEIGHT * 11.5) / 100),
        width: ((SCREEN_HEIGHT * 11.5) / 100),
        borderWidth: 1,
        borderColor: '#aaa'
    },
    img: {
        height: ((SCREEN_HEIGHT * 6) / 100),
        width: ((SCREEN_HEIGHT * 6) / 100),
        margin: ((SCREEN_HEIGHT * 2.4) / 100),
    },
    txt:  {
        marginTop: ((SCREEN_HEIGHT * 0.7) / 100)
    },
    black: {
        borderRadius: 10,
        height: ((SCREEN_HEIGHT * 11.5) / 100),
        width: ((SCREEN_HEIGHT * 11.5) / 100),
        borderWidth: 1,
        borderColor: '#aaa',
        backgroundColor: '#030003',
        marginLeft: ((SCREEN_HEIGHT * 1) / 100)
    },
    white: {
        borderRadius: 10,
        height: ((SCREEN_HEIGHT * 11.5) / 100),
        width: ((SCREEN_HEIGHT * 11.5) / 100),
        borderWidth: 1,
        borderColor: '#aaa',
        backgroundColor: '#ffffff',
        marginLeft: ((SCREEN_HEIGHT * 1) / 100)
    },
    red: {
        borderRadius: 10,
        height: ((SCREEN_HEIGHT * 11.5) / 100),
        width: ((SCREEN_HEIGHT * 11.5) / 100),
        borderWidth: 1,
        borderColor: '#aaa',
        backgroundColor: "#ff0000",
        marginLeft: ((SCREEN_HEIGHT * 1) / 100)
    },
    neon: {
        borderRadius: 10,
        height: ((SCREEN_HEIGHT * 11.5) / 100),
        width: ((SCREEN_HEIGHT * 11.5) / 100),
        borderWidth: 1,
        borderColor: '#aaa',
        backgroundColor: '#00ff00',
        marginLeft: ((SCREEN_HEIGHT * 1) / 100)
    },
    violet: {
        borderRadius: 10,
        height: ((SCREEN_HEIGHT * 11.5) / 100),
        width: ((SCREEN_HEIGHT * 11.5) / 100),
        borderWidth: 1,
        borderColor: '#aaa',
        backgroundColor: '#0000ff',
        marginLeft: ((SCREEN_HEIGHT * 1) / 100)
    },
    yellow: {
        borderRadius: 10,
        height: ((SCREEN_HEIGHT * 11.5) / 100),
        width: ((SCREEN_HEIGHT * 11.5) / 100),
        borderWidth: 1,
        borderColor: '#aaa',
        backgroundColor: '#ffff00',
        marginLeft: ((SCREEN_HEIGHT * 1) / 100)
    },
    bottomColor: {
        borderRadius: 10,
        height: ((SCREEN_HEIGHT * 11.5) / 100),
        width: ((SCREEN_HEIGHT * 11.5) / 100),
        borderWidth: 1,
        borderColor: '#aaa',
        backgroundColor: '#ffff00',
        marginLeft: ((SCREEN_HEIGHT * 1) / 100)
    },
    containerInBtnStyle: {
        backgroundColor: '#ACD472',
        borderColor: 'transparent',
        borderWidth: 1,
        borderRadius: 30
    },
});
