import { StyleSheet, Dimensions } from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    card: {
        width: SCREEN_WIDTH,
        flex: 1,
        marginBottom: 10,
    },
    margin: {
        margin: 10
    },
    
    flexColumn: {
        flexDirection: 'column'
    },
    image: {
        width: ((SCREEN_WIDTH * 95) / 100),
        height: ((SCREEN_HEIGHT * 18) / 100)
    },
    txt1: {
        marginTop: '4%',
        color: 'black',
        fontSize: 15
    },
    txt2: {
        color: '#aaa',
        fontSize: 12
    },
    txt3: {
        color: '#aaa',
        fontSize: 12,
        marginBottom: '1%'
    },
    txt4: {
        marginTop: '4%',
        color: 'black',
        fontSize: 15,
        fontWeight: '500'
    },
    border: {
        borderBottomColor: '#aaa',
        borderWidth: 1
    },
    
});