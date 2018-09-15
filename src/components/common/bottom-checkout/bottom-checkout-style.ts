import { StyleSheet, Dimensions } from 'react-native';
const SCREEN_HEIGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container1: {
        width: '100%',
        backgroundColor: '#ACD472',
        position: 'absolute',
        bottom: ((SCREEN_HEIGHT * 7.5) / 100)
    },
    container2: {
        width: '100%',
        backgroundColor: '#ACD472',
        position: 'absolute',
        bottom: 0
    },
    div1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: ((SCREEN_HEIGHT * 8) / 100)
    },
    txtDiv1:
    {
        alignSelf: 'center',
        marginLeft: '2%'
    },
    txtDiv1text1: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500'
    },
    txtDiv2: {
        alignSelf: 'center',
        flexDirection: 'column',
        marginRight: '10%'
    },
    txtDiv2text1: {
        color: 'white',
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'center'
    },
    txtDiv2text2: {
        color: 'white',
        fontSize: 12,
        textAlign: 'center'
    },
    txtDiv3: {
        alignSelf: 'center',
        marginRight: '5%'
    },
    txtDiv3text1: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500'
    }
});
