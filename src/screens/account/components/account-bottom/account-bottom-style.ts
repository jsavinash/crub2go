import { StyleSheet, Dimensions } from "react-native";
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export const styles = StyleSheet.create({
    container: {
        width: ((SCREEN_WIDTH * 90) / 100),
        alignSelf: 'center',
        borderColor: '#f3f3f3',
    },
    sallow: {
        height: ((SCREEN_HEIGHT * 9) / 100),
        backgroundColor: '#f3f3f3',
        borderTopRightRadius: 22,
        borderTopLeftRadius: 22
    },
    sallowTxt: {
        marginLeft: '10%',
        alignContent: 'flex-start',
        marginTop: '4%',
        fontSize: 17,
        color: '#9b9b9b'
    },
    sallowView: {
        height: ((SCREEN_HEIGHT * 10) / 100),
        backgroundColor: 'white',
        paddingLeft: '3%',
        paddingRight: '3%'
    },
    sallowFlex: {
        flexDirection: 'row',
    },
    image: {
        marginLeft: '5%',
        marginTop: '2%',
        height: 25,
        width: 25,
        left: 0
    },
    touchTxt: {
        marginTop: '2%',
        marginLeft: '2%'
    },
    txt: {
        marginLeft: '5%',
        marginTop: '5%',
    },
    border: {
        borderBottomWidth: 1,
        borderBottomColor: '#aaa',
    },
    sallowView1: {
        height: ((SCREEN_HEIGHT * 9) / 100),
        backgroundColor: 'white',
        paddingLeft: '3%',
        paddingRight: '3%'
    },
    sallow1: {
        height: ((SCREEN_HEIGHT * 9) / 100),
        backgroundColor: '#f3f3f3'
    },
    shadow: {
        height: ((SCREEN_HEIGHT * 9) / 100),
        backgroundColor: 'white',
        borderBottomWidth: 2,
        borderBottomColor: '#aaa',
    },
    shadow1: {
        height: ((SCREEN_HEIGHT * 9) / 100),
        backgroundColor: 'white',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    txtView: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '10%',
        marginBottom: '10%'
    },
    txtView1: {
        color: 'black',
        fontSize: 16
    },
    txtView2: {
        color: '#aaa',
        fontSize: 12
    }

});